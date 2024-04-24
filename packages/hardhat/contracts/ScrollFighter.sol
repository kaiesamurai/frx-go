// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract ScrollFighter {
    // EVENTS
    event GameStarted(uint gameId);
    event FightersEncrypted(uint gameId);
    event FightersRevealed(uint gameId);
    event RoundResult(uint gameId, uint round, address player1, PlayerAction action1, address player2, PlayerAction action2);
    event GameEnded(uint gameId, address winner);

    // ENUMS
    enum GameState { FIGHTER_SELECTION, FIGHTER_REVEAL, IN_BATTLE, GAME_OVER }
    enum PlayerAction { NONE, ATTACK, DEFEND }
    
    // STRUCTS
    struct Fighter {
        uint id;
        uint hp;
    }

    struct Game {
        address[2] players;
        bytes32[2] encryptedFighters;
        uint[2] fighterIds;
        GameState gameState;
        uint currentRound;
        address winner;
    }

    // STATE VARIABLES
    uint public nextGameId = 1;
    mapping(uint => Game) public games;
    mapping(uint => Fighter) public fighters;

    constructor() {
        // Initialize some fighters for demonstration
        fighters[1] = Fighter(1, 2);
        fighters[2] = Fighter(2, 2);
        fighters[3] = Fighter(3, 2);
    }

    // FUNCTIONS
    function startGame(address _opponent) external payable {
        require(msg.value == 1 ether, "Each player must wager 1 Ether");
        require(_opponent != address(0) && _opponent != msg.sender, "Invalid opponent address");

        uint gameId = nextGameId++;
        games[gameId] = Game({
            players: [msg.sender, _opponent],
            encryptedFighters: [bytes32(0), bytes32(0)],
            fighterIds: [uint(0), uint(0)], 
            gameState: GameState.FIGHTER_SELECTION,
            currentRound: 0,
            winner: address(0)
        });
        emit GameStarted(gameId);
    }

    function selectFighterEncrypted(uint gameId, bytes32 encryptedFighter) external {
        Game storage game = games[gameId];
        require(game.gameState == GameState.FIGHTER_SELECTION, "Not the right state for selecting fighters");
        
        if (msg.sender == game.players[0]) {
            game.encryptedFighters[0] = encryptedFighter;
        } else if (msg.sender == game.players[1]) {
            game.encryptedFighters[1] = encryptedFighter;
        }

        if (game.encryptedFighters[0] != bytes32(0) && game.encryptedFighters[1] != bytes32(0)) {
            game.gameState = GameState.FIGHTER_REVEAL;
            emit FightersEncrypted(gameId);
        }
    }

    function revealFighter(uint gameId, uint fighterId, string calldata salt) external {
        Game storage game = games[gameId];
        require(game.gameState == GameState.FIGHTER_REVEAL, "Not the right state for revealing fighters");

        bytes32 hash = keccak256(abi.encodePacked(fighterId, salt));
        uint playerIndex = msg.sender == game.players[0] ? 0 : 1;

        require(hash == game.encryptedFighters[playerIndex], "Hash mismatch");

        game.fighterIds[playerIndex] = fighterId;
        if (game.fighterIds[0] != 0 && game.fighterIds[1] != 0) {
            game.gameState = GameState.IN_BATTLE;
            emit FightersRevealed(gameId);
        }
    }

}
