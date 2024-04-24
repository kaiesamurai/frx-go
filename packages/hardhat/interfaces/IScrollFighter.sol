//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IScrollFighter {
    // Events
    event GameStarted();
    event FighterSelected(address player, uint figtherId);
    event RoundResult(uint round, address player1, PlayerAction action1, address player2, PlayerAction action2);
    event GameEnded(address winner);

    // Enum definitions
    enum GameState { FIGHTER_SELECTION, IN_BATTLE, GAME_OVER }
    enum PlayerAction { NONE, ATTACK, DEFEND }

    mapping (uint => Game) public games;
    mapping (uint => Fighter) public fighters;

    // Struct definitions
    struct Fighter {
        uint id;
        uint hp;
    }


    struct Game {
        address[2] players;
        Fighter[2] fighters ;
        GameState gameState;
        uint currentRound;
        address winner;
    }

    // Function to join the game with a wager
    function startGame(address _opponent) external payable;

    // Function for players to select their fighter
    function selectFighter(uint _gameId, uint _fighterId) external;

    // Function for players to perform an action (attack or defend)
    function playerAction(uint _gameId, PlayerAction _action) external;

}
