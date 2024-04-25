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
	event GameEndedByTimeout(uint gameId, address winner, uint wageredAmount);

	// ENUMS, STRUCTS, MAPPINGS, AND STATE VARIABLES
	enum GameState {
		PROPOSED,
		ACCEPTED,
		STARTED,
		GAME_OVER
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
		bytes32 challengerCommitment;
		uint[2] fighterIds;
		uint[3][2] moves;
		GameState gameState;
		address winner;
		uint lastActionBlock;
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
			challengerCommitment: hashCommitment,
			fighterIds: [uint(0), uint(0)],
			moves: [[uint(0), uint(0), uint(0)], [uint(0), uint(0), uint(0)]],
			gameState: GameState.PROPOSED,
			winner: address(0),
			lastActionBlock: block.number
		});
		emit GameProposed(gameId, msg.sender, _opponent, _amount);
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

	// function revealFighter(
	// 	uint gameId,
	// 	uint fighterID,
	// 	uint[3] calldata moves,
	// 	uint nonce,
	// 	bytes memory proof
	// ) public {
	// 	// Load game
	// 	require(
	// 		games[gameId].gameState == GameState.ACCEPTED,
	// 		"Game must be in accepted state"
	// 	);
	// 	Game storage game = games[gameId];
	// 	uint playerIndex = msg.sender == game.players[0] ? 0 : 1;

	// 	// Verify proof
	// 	bytes32 hash = keccak256(abi.encodePacked(fighterID, moves, nonce));
	// 	bytes32 hash_moves = keccak256(abi.encodePacked(moves, nonce));
	// 	require(
	// 		hash == game.initialCommitments[playerIndex],
	// 		"Commitment mismatch"
	// 	);
	// 	bytes32[] memory publicInputs = new bytes32[](1);
	// 	publicInputs[0] = hash;
	// 	require(verifier.verify(proof, publicInputs), "Invalid proof");

	// 	// Reveal fighter
	// 	game.fighterIds[playerIndex] = fighterID;
	// 	game.moves[playerIndex] = moves;
	// 	game.revealed[playerIndex] = true;
	// 	if (game.revealed[0] && game.revealed[1]) {
	// 		game.gameState = GameState.STARTED;
	// 		emit FightersRevealed(gameId, game.players[0], game.players[1]);
	// 		// TODO: call playGame directly?
	// 	}
	// }

	// function playGame(uint gameId) public onlyPlayers(gameId) {
	// 	require(
	// 		games[gameId].gameState == GameState.STARTED,
	// 		"Game must be in started state"
	// 	);

	// 	// loop over rounds
	// 	Game storage game = games[gameId];
	// 	// uint[3] memory challengerMoves = game.moves[0];
	// 	// uint[3] memory opponentMoves = game.moves[1];
	// 	uint challengerFighterId = game.fighterIds[0];
	// 	uint opponentFighterId = game.fighterIds[1];
	// 	// uint challengerHp = fighters[challengerFighterId].hp;
	// 	// uint opponentHp = fighters[opponentFighterId].hp;

	// 	for (uint i = 0; i < 3; i++) {
	// 		// if (challengerAction == PlayerAction.ATTACK && opponentAction == PlayerAction.ATTACK) {
	// 		//     // TODO randomize who attacks first
	// 		//     fighters[challengerFighterId].hp -= opponentValue;
	// 		//     fighters[opponentFighterId].hp -= challengerValue;
	// 		// } else if (challengerAction == PlayerAction.ATTACK && opponentAction == PlayerAction.DEFEND) {
	// 		//     fighters[opponentFighterId].hp -= challengerValue;
	// 		// } else if (challengerAction == PlayerAction.DEFEND && opponentAction == PlayerAction.ATTACK) {
	// 		//     fighters[challengerFighterId].hp -= opponentValue;
	// 		// }
	// 		if (
	// 			fighters[challengerFighterId].hp <= 0 ||
	// 			fighters[opponentFighterId].hp <= 0
	// 		) {
	// 			gameFinished(game);
	// 			return;
	// 		}
	// 	}
	// }

	// function gameFinished(Game storage game) private {
	// 	if (fighters[game.fighterIds[0]].hp > fighters[game.fighterIds[1]].hp) {
	// 		game.winner = game.players[0];
	// 	} else if (
	// 		fighters[game.fighterIds[0]].hp < fighters[game.fighterIds[1]].hp
	// 	) {
	// 		game.winner = game.players[1];
	// 	} else {
	// 		game.winner = address(0);
	// 	}
	// 	game.gameState = GameState.GAME_OVER;
	// 	emit GameEnded(game.id, game.winner);

	// 	if (game.winner == address(0)) {
	// 		fightingTokens.transfer(game.players[0], game.wageredAmount);
	// 		fightingTokens.transfer(game.players[1], game.wageredAmount);
	// 	} else {
	// 		fightingTokens.transfer(game.winner, game.wageredAmount * 2);
	// 	}
	// }

	function gameFinishedByTimeout(uint gameId) public onlyPlayers(gameId) {
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

		emit GameEndedByTimeout(gameId, game.winner, game.wageredAmount);
	}
}
