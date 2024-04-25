/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  534351: {
    FightingTokens: {
      address: "0x64CDeB6CD5ecfB002bdaFabc98B5C883C5C06B27",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string",
            },
          ],
          name: "StringTooLong",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "version",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32",
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        allowance: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        approve: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        balanceOf: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        decimals: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        decreaseAllowance: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        increaseAllowance: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        name: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        symbol: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        totalSupply: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        transfer: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        transferFrom: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        DOMAIN_SEPARATOR: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        eip712Domain: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        nonces: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
        permit: "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol",
      },
    },
    ScrollFighter: {
      address: "0x75836c1a9cf7B2b2bFa30F4d943169167828A964",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
          ],
          name: "FightersRevealed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameAccepted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "winner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameEnded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "winner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameEndedByTimeout",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameProposed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_gameId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_fighterId",
              type: "uint256",
            },
            {
              internalType: "uint256[3]",
              name: "moves",
              type: "uint256[3]",
            },
          ],
          name: "acceptGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "fighters",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "health",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "attack",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "defense",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "special",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "fightingTokens",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
          ],
          name: "finishByTimeout",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
          ],
          name: "getGame",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "wageredAmount",
                  type: "uint256",
                },
                {
                  internalType: "address[2]",
                  name: "players",
                  type: "address[2]",
                },
                {
                  internalType: "bytes32",
                  name: "challengerCommitment",
                  type: "bytes32",
                },
                {
                  internalType: "uint256[2]",
                  name: "fighterIds",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[3][2]",
                  name: "moves",
                  type: "uint256[3][2]",
                },
                {
                  internalType: "uint256[3][2]",
                  name: "pain",
                  type: "uint256[3][2]",
                },
                {
                  internalType: "enum ScrollFighter.GameState",
                  name: "gameState",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "winner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastActionBlock",
                  type: "uint256",
                },
                {
                  internalType: "uint256[2]",
                  name: "currentHealth",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct ScrollFighter.Game",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nextGameId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_opponent",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "hashCommitment",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "proposeGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "fighterID",
              type: "uint256",
            },
            {
              internalType: "uint256[3]",
              name: "moves",
              type: "uint256[3]",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "proof",
              type: "bytes",
            },
          ],
          name: "revealFight",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    ScrollFighterV2: {
      address: "0x4250F996882E56b0D0a2dAdDf3Ea0bF9904fec5e",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
          ],
          name: "FightersRevealed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameAccepted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "winner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameEnded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "winner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameEndedByTimeout",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player1",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player2",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wageredAmount",
              type: "uint256",
            },
          ],
          name: "GameProposed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_gameId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_fighterId",
              type: "uint256",
            },
            {
              internalType: "uint256[3]",
              name: "moves",
              type: "uint256[3]",
            },
          ],
          name: "acceptGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "fighters",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "health",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "attack",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "defense",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "special",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "fightingTokens",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
          ],
          name: "finishByTimeout",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
          ],
          name: "getGame",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "wageredAmount",
                  type: "uint256",
                },
                {
                  internalType: "address[2]",
                  name: "players",
                  type: "address[2]",
                },
                {
                  internalType: "bytes32",
                  name: "challengerCommitment",
                  type: "bytes32",
                },
                {
                  internalType: "uint256[2]",
                  name: "fighterIds",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[3][2]",
                  name: "moves",
                  type: "uint256[3][2]",
                },
                {
                  internalType: "uint256[3][2]",
                  name: "pain",
                  type: "uint256[3][2]",
                },
                {
                  internalType: "enum ScrollFighterV2.GameState",
                  name: "gameState",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "winner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastActionBlock",
                  type: "uint256",
                },
                {
                  internalType: "uint256[2]",
                  name: "currentHealth",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct ScrollFighterV2.Game",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nextGameId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_opponent",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_fighterId",
              type: "uint256",
            },
            {
              internalType: "uint256[3]",
              name: "moves",
              type: "uint256[3]",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "proposeGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    UltraVerifier: {
      address: "0xc15BC025d57bec9FA39e18701b4f0b3b5a067B6C",
      abi: [
        {
          inputs: [],
          name: "INVALID_VERIFICATION_KEY",
          type: "error",
        },
        {
          inputs: [],
          name: "MOD_EXP_FAILURE",
          type: "error",
        },
        {
          inputs: [],
          name: "OPENING_COMMITMENT_FAILED",
          type: "error",
        },
        {
          inputs: [],
          name: "PAIRING_FAILED",
          type: "error",
        },
        {
          inputs: [],
          name: "PAIRING_PREAMBLE_FAILED",
          type: "error",
        },
        {
          inputs: [],
          name: "POINT_NOT_ON_CURVE",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "PUBLIC_INPUT_COUNT_INVALID",
          type: "error",
        },
        {
          inputs: [],
          name: "PUBLIC_INPUT_GE_P",
          type: "error",
        },
        {
          inputs: [],
          name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
          type: "error",
        },
        {
          inputs: [],
          name: "getVerificationKeyHash",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_proof",
              type: "bytes",
            },
            {
              internalType: "bytes32[]",
              name: "_publicInputs",
              type: "bytes32[]",
            },
          ],
          name: "verify",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0x83277E9FE7Cc93Ad2D5986b87659A6fa80A48Ac0",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
