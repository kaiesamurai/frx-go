// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {UltraVerifier} from "./plonk_vk.sol";

contract ScrollFighter {
    UltraVerifier verifier;

    // EVENTS
    event GameProposed(uint gameId);
    event GameAccepted(uint gameId);
    event FightersEncrypted(uint gameId);
    event FightersRevealed(uint gameId);
    event RoundResult(uint gameId, uint round, address player1, PlayerAction action1, address player2, PlayerAction action2);
    event GameEnded(uint gameId, address winner);

    // ENUMS
    enum GameState { PROPOSED, ACCEPTED, STARTED, GAME_OVER }
    enum PlayerAction { NONE, ATTACK, DEFEND }
    
    // STRUCTS
    struct Fighter {
        uint id;
        uint hp;
    }
    using ECDSA for bytes32;

    struct Game {
        uint wageredAmount;
        address[2] players;
        bytes32[2] initialCommitments; // Hashes of fighterIDs and nonces
        uint[2] fighterIds;
        bool[2] revealed;
        GameState gameState;
        uint currentRound;
        address winner;
    }

    // MAPPINGS
    mapping(uint => Fighter) public fighters;
    mapping(uint => Game) private games;

    uint public nextGameId = 1;
    function getGame(uint gameId) public view returns (address[2] memory, uint[2] memory, bool[2] memory) {
        Game storage game = games[gameId];
        return (game.players, game.fighterIds, game.revealed);
    }

    constructor(address _verifier) {
        // Initialize some fighters for demonstration
        fighters[1] = Fighter(1, 2);
        fighters[2] = Fighter(2, 2);
        fighters[3] = Fighter(3, 2);

        verifier = UltraVerifier(_verifier);
    }

    // FUNCTIONS
    function proposeGame(address _opponent, bytes32 hashCommitment) external payable {
        require(_opponent != address(0) && _opponent != msg.sender, "Invalid opponent address");

        uint gameId = nextGameId++;
        games[gameId] = Game({
            wageredAmount: msg.value,
            players: [msg.sender, _opponent],
            initialCommitments: [hashCommitment, bytes32(0)],
            fighterIds: [uint(0), uint(0)], 
            revealed: [false, false],
            gameState: GameState.PROPOSED,
            currentRound: 0,
            winner: address(0)
        });
        emit GameProposed(gameId);
    }

    function acceptGame(uint _gameId, bytes32 hashCommitment) external payable {
        require(games[_gameId].gameState == GameState.PROPOSED, "Game must be in proposed state");
        require(msg.value == games[_gameId].wageredAmount , "Wagered amount must match");
        require(games[_gameId].players[1] == msg.sender, "Only the opponent can accept the game");
        games[_gameId].gameState = GameState.ACCEPTED;
        games[_gameId].initialCommitments[1] = hashCommitment;
        emit GameAccepted(_gameId);
    }

    // Both players must call this function to reveal their fighters
    function revealFighter(uint gameId, uint fighterID, uint nonce, bytes memory proof) public {
        Game storage game = games[gameId];
        uint playerIndex = msg.sender == game.players[0] ? 0 : 1;

        bytes32 hash = keccak256(abi.encodePacked(fighterID, nonce));

        require(hash == game.initialCommitments[playerIndex], "Commitment mismatch");

        require(verifyProof(proof, hash), "Invalid proof");

        game.fighterIds[playerIndex] = fighterID;
        game.revealed[playerIndex] = true;

        if (game.revealed[0] && game.revealed[1]) {
            game.gameState = GameState.STARTED;
            emit FightersRevealed(gameId);
        } else {
            emit FightersEncrypted(gameId);
        }
    }

    function verifyProof(bytes memory proof, bytes32 commitment) private pure returns (bool) {
        return true;
    }

}
