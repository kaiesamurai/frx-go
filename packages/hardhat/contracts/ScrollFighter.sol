// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import { UltraVerifier } from "./plonk_vk.sol";

contract ScrollFighter {
	using ECDSA for bytes32;
	UltraVerifier verifier;
	IERC20 public fightingTokens;

	// EVENTS
	event GameProposed(
		uint gameId,
		address player1,
		address player2,
		uint wageredAmount
	);
	event GameAccepted(
		uint gameId,
		address player1,
		address player2,
		uint wageredAmount
	);
	event FightersRevealed(uint gameId, address player1, address player2);

	event GameEnded(
		uint gameId,
		address player1,
		address player2,
		address winner,
		uint wageredAmount
	);
	event GameEndedByTimeout(
		uint gameId,
		address player1,
		address player2,
		address winner,
		uint wageredAmount
	);

	// ENUMS, STRUCTS, MAPPINGS, AND STATE VARIABLES
	enum GameState {
		PROPOSED,
		ACCEPTED,
		STARTED,
		FINISHED
	}
	enum PlayerAction {
		NONE,
		ATTACK, //1
		DEFEND, //2
		SPECIAL //3
	}

	struct Fighter {
		uint id;
		uint health;
		uint attack;
		uint defense;
		uint special;
	}

	struct Game {
		uint id;
		uint wageredAmount;
		address[2] players;
		bytes challengerCommitment;
		uint[2] fighterIds;
		uint[3][2] moves; // Assumed to be 3 rounds of moves for 2 players
		uint[3][2] pain;
		GameState gameState;
		address winner;
		uint lastActionBlock;
		uint[2] currentHealth;
	}

	mapping(uint => Fighter) public fighters;
	mapping(uint => Game) private games;
	uint public nextGameId = 1;
	function getGame(uint gameId) public view returns (Game memory) {
		return games[gameId];
	}

	constructor(address _verifier, address _token) {
		verifier = UltraVerifier(_verifier);
		fightingTokens = IERC20(_token);

		// Initialize the fighters for demonstration
		fighters[1] = Fighter(1, 6, 8, 5, 1);
		fighters[2] = Fighter(2, 8, 6, 5, 2);
		fighters[3] = Fighter(3, 6, 6, 6, 3);
	}

	modifier onlyPlayers(uint gameId) {
		require(
			msg.sender == games[gameId].players[0] ||
				msg.sender == games[gameId].players[1],
			"Caller is not a player in this game"
		);
		_;
	}

	// GAME FUNCTIONS
	function proposeGame(
		address _opponent,
		bytes calldata proof,
		uint _amount
	) external {
		require(
			_opponent != address(0) && _opponent != msg.sender,
			"Invalid opponent address"
		);
		// add 18 decimals
		uint amount = _amount * 10 ** 18;
		require(
			fightingTokens.transferFrom(msg.sender, address(this), amount),
			"Transfer failed"
		);

		// Verify proof
		bytes32[] memory publicInputs = new bytes32[](0);
		require(verifier.verify(proof, publicInputs), "Invalid proof");

		uint gameId = nextGameId++;
		games[gameId] = Game({
			id: gameId,
			wageredAmount: amount,
			players: [msg.sender, _opponent],
			challengerCommitment: proof,
			fighterIds: [uint(0), uint(0)],
			moves: [[uint(0), uint(0), uint(0)], [uint(0), uint(0), uint(0)]],
			pain: [[uint(0), uint(0), uint(0)], [uint(0), uint(0), uint(0)]],
			gameState: GameState.PROPOSED,
			winner: address(0),
			lastActionBlock: block.number,
			currentHealth: [uint(0), uint(0)]
		});
		emit GameProposed(gameId, msg.sender, _opponent, amount);
	}

	function acceptGame(
		uint _gameId,
		uint _fighterId,
		uint[3] calldata moves
	) external {
		Game storage game = games[_gameId];
		require(
			game.gameState == GameState.PROPOSED,
			"Game must be in proposed state"
		);
		require(
			game.players[1] == msg.sender,
			"Only the opponent can accept the game"
		);
		require(
			fightingTokens.transferFrom(
				msg.sender,
				address(this),
				game.wageredAmount
			),
			"Transfer failed"
		);

		game.gameState = GameState.ACCEPTED;

		game.fighterIds[1] = _fighterId;
		game.moves[1] = moves;
		game.lastActionBlock = block.number;

		// Validate that special moves (value 3) appear only once or not at all
		uint specialMoveCount = 0;
		for (uint i = 0; i < moves.length; i++) {
			if (moves[i] == 3) {
				specialMoveCount++;
			}
		}
		require(specialMoveCount <= 1, "Special move can only be used once");

		emit GameAccepted(
			_gameId,
			game.players[0],
			msg.sender,
			game.wageredAmount
		);
	}

	function revealFight(
		uint gameId,
		uint fighterID,
		uint[3] calldata moves,
		uint nonce,
		bytes memory proof
	) public {
		// Load game
		require(
			games[gameId].gameState == GameState.ACCEPTED,
			"Game must be in accepted state"
		);
		Game storage game = games[gameId];
		require(msg.sender == game.players[0], "Only challenger can reveal");

		// Verify fighter and strategy
		// bytes32 hash = keccak256(abi.encodePacked(fighterID, moves, nonce));
		// require(hash == game.challengerCommitment, "Commitment mismatch");

		// Reveal fighter
		game.fighterIds[0] = fighterID;
		game.moves[0] = moves;
		game.gameState = GameState.STARTED;
		emit FightersRevealed(gameId, game.players[0], game.players[1]);
		playGame(gameId);
	}

	function playGame(uint gameId) internal {
		Game storage game = games[gameId];
		require(
			game.gameState == GameState.STARTED,
			"Game must be in started state"
		);

		game.currentHealth[0] = fighters[game.fighterIds[0]].health;
		game.currentHealth[1] = fighters[game.fighterIds[1]].health;

		for (uint round = 0; round < game.moves[0].length; ++round) {
			for (uint player = 0; player < 2; ++player) {
				uint opponent = (player + 1) % 2;
				uint damage = calculateDamage(
					game.fighterIds[player],
					game.moves[player][round]
				);
				game.pain[player][round] = damage;
				if (damage > game.currentHealth[opponent]) {
					game.currentHealth[opponent] = 0; // Prevents underflow
				} else {
					game.currentHealth[opponent] -= damage;
				}
			}

			if (game.currentHealth[0] <= 0 && game.currentHealth[1] <= 0) {
				game.gameState = GameState.FINISHED;
				game.winner = address(0); // Draw
				break;
			} else if (game.currentHealth[0] <= 0) {
				game.gameState = GameState.FINISHED;
				game.winner = game.players[1];
				break;
			} else if (game.currentHealth[1] <= 0) {
				game.gameState = GameState.FINISHED;
				game.winner = game.players[0];
				break;
			}
		}

		// Handle game draw if no winner found
		if (game.gameState != GameState.FINISHED) {
			game.gameState = GameState.FINISHED;
			game.winner = address(0); // Draw
		}
		emit GameEnded(
			gameId,
			game.winner,
			game.players[0],
			game.players[1],
			game.wageredAmount
		);
	}

	function finishByTimeout(uint gameId) public onlyPlayers(gameId) {
		Game storage game = games[gameId];
		require(
			game.gameState == GameState.PROPOSED ||
				game.gameState == GameState.ACCEPTED,
			"Game must be in started state"
		);
		require(
			block.number > game.lastActionBlock + 10,
			"Timeout not availble yet"
		);

		if (
			game.gameState == GameState.PROPOSED &&
			msg.sender == game.players[0]
		) {
			fightingTokens.transfer(game.players[1], game.wageredAmount * 2);
			game.winner = game.players[1];
		} else if (
			game.gameState == GameState.ACCEPTED &&
			msg.sender == game.players[1]
		) {
			fightingTokens.transfer(game.players[0], game.wageredAmount);
			game.winner = game.players[0];
		}

		emit GameEndedByTimeout(
			gameId,
			game.winner,
			game.players[0],
			game.players[1],
			game.wageredAmount
		);
	}

	// Helper functions

	function calculateDamage(
		uint fighterId,
		uint move
	) internal view returns (uint damage) {
		Fighter memory fighter = fighters[fighterId];
		damage = (move + fighter.attack) - fighter.defense;
		return damage > 0 ? damage : 0;
	}
}
