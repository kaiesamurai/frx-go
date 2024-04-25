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
	event GameEnded(uint gameId, address winner);

	// ENUMS, STRUCTS, MAPPINGS, AND STATE VARIABLES
	enum GameState {
		PROPOSED,
		ACCEPTED,
		STARTED,
		GAME_OVER
	}
	enum PlayerAction {
		NONE,
		ATTACK,
		DEFEND
	}

	struct Fighter {
		uint id;
		uint hp;
	}

	struct Game {
		uint id;
		uint wageredAmount;
		address[2] players;
		bytes32[2] initialCommitments;
		uint[2] fighterIds;
		uint[3][2] moves;
		bool[2] revealed;
		GameState gameState;
		address winner;
	}

	mapping(uint => Fighter) public fighters;
	mapping(uint => Game) private games;
	uint public nextGameId = 1;
	function getGame(
		uint gameId
	) public view returns (address[2] memory, uint[2] memory, bool[2] memory) {
		Game storage game = games[gameId];
		return (game.players, game.fighterIds, game.revealed);
	}

	constructor(address _verifier, address _token) {
		verifier = UltraVerifier(_verifier);
		fightingTokens = IERC20(_token);

		// Initialize some fighters for demonstration
		fighters[1] = Fighter(1, 2);
		fighters[2] = Fighter(2, 2);
		fighters[3] = Fighter(3, 2);
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
		bytes32 hashCommitment,
		uint _amount
	) external {
		require(
			_opponent != address(0) && _opponent != msg.sender,
			"Invalid opponent address"
		);
		require(
			fightingTokens.transferFrom(msg.sender, address(this), _amount),
			"Transfer failed"
		);

		uint gameId = nextGameId++;
		games[gameId] = Game({
			id: gameId,
			wageredAmount: _amount,
			players: [msg.sender, _opponent],
			initialCommitments: [hashCommitment, bytes32(0)],
			fighterIds: [uint(0), uint(0)],
			moves: [[uint(0), uint(0), uint(0)], [uint(0), uint(0), uint(0)]],
			revealed: [false, false],
			gameState: GameState.PROPOSED,
			winner: address(0)
		});
		emit GameProposed(gameId, msg.sender, _opponent, _amount);
	}

	function acceptGame(
		uint _gameId,
		bytes32 hashCommitment,
		uint _amount
	) external {
		Game storage game = games[_gameId];
		require(
			game.gameState == GameState.PROPOSED,
			"Game must be in proposed state"
		);
		require(_amount == game.wageredAmount, "Wagered amount must match");
		require(
			game.players[1] == msg.sender,
			"Only the opponent can accept the game"
		);
		require(
			fightingTokens.transferFrom(msg.sender, address(this), _amount),
			"Transfer failed"
		);

		game.gameState = GameState.ACCEPTED;
		game.initialCommitments[1] = hashCommitment;
		emit GameAccepted(
			_gameId,
			game.players[0],
			msg.sender,
			game.wageredAmount
		);
	}

	function revealFighter(
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
		uint playerIndex = msg.sender == game.players[0] ? 0 : 1;

		// Verify proof
		bytes32 hash = keccak256(abi.encodePacked(fighterID, moves, nonce));
		bytes32 hash_moves = keccak256(abi.encodePacked(moves, nonce));
		require(
			hash == game.initialCommitments[playerIndex],
			"Commitment mismatch"
		);
		bytes32[] memory publicInputs = new bytes32[](1);
		publicInputs[0] = hash;
		require(verifier.verify(proof, publicInputs), "Invalid proof");

		// Reveal fighter
		game.fighterIds[playerIndex] = fighterID;
		game.moves[playerIndex] = moves;
		game.revealed[playerIndex] = true;
		if (game.revealed[0] && game.revealed[1]) {
			game.gameState = GameState.STARTED;
			emit FightersRevealed(gameId, game.players[0], game.players[1]);
			// TODO: call playGame directly?
		}
	}

	function playGame(uint gameId) public onlyPlayers(gameId) {
		require(
			games[gameId].gameState == GameState.STARTED,
			"Game must be in started state"
		);

		// loop over rounds
		Game storage game = games[gameId];
		// uint[3] memory challengerMoves = game.moves[0];
		// uint[3] memory opponentMoves = game.moves[1];
		uint challengerFighterId = game.fighterIds[0];
		uint opponentFighterId = game.fighterIds[1];
		// uint challengerHp = fighters[challengerFighterId].hp;
		// uint opponentHp = fighters[opponentFighterId].hp;

		for (uint i = 0; i < 3; i++) {
			// if (challengerAction == PlayerAction.ATTACK && opponentAction == PlayerAction.ATTACK) {
			//     // TODO randomize who attacks first
			//     fighters[challengerFighterId].hp -= opponentValue;
			//     fighters[opponentFighterId].hp -= challengerValue;
			// } else if (challengerAction == PlayerAction.ATTACK && opponentAction == PlayerAction.DEFEND) {
			//     fighters[opponentFighterId].hp -= challengerValue;
			// } else if (challengerAction == PlayerAction.DEFEND && opponentAction == PlayerAction.ATTACK) {
			//     fighters[challengerFighterId].hp -= opponentValue;
			// }
			if (
				fighters[challengerFighterId].hp <= 0 ||
				fighters[opponentFighterId].hp <= 0
			) {
				gameFinished(game);
				return;
			}
		}
	}

	function gameFinished(Game storage game) private {
		if (fighters[game.fighterIds[0]].hp > fighters[game.fighterIds[1]].hp) {
			game.winner = game.players[0];
		} else if (
			fighters[game.fighterIds[0]].hp < fighters[game.fighterIds[1]].hp
		) {
			game.winner = game.players[1];
		} else {
			game.winner = address(0);
		}
		game.gameState = GameState.GAME_OVER;
		emit GameEnded(game.id, game.winner);

		if (game.winner == address(0)) {
			fightingTokens.transfer(game.players[0], game.wageredAmount);
			fightingTokens.transfer(game.players[1], game.wageredAmount);
		} else {
			fightingTokens.transfer(game.winner, game.wageredAmount * 2);
		}
	}

	// ADDITIONAL CONTRACT FUNCTIONS AS NEEDED
}
