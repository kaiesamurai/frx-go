import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  FightersRevealed,
  GameAccepted,
  GameEnded,
  GameEndedByTimeout,
  GameProposed
} from "../generated/ScrollFighter/ScrollFighter"

export function createFightersRevealedEvent(
  gameId: BigInt,
  player1: Address,
  player2: Address,
  fighter1: BigInt,
  fighter2: BigInt,
  moves1: Array<BigInt>,
  moves2: Array<BigInt>
): FightersRevealed {
  let fightersRevealedEvent = changetype<FightersRevealed>(newMockEvent())

  fightersRevealedEvent.parameters = new Array()

  fightersRevealedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  fightersRevealedEvent.parameters.push(
    new ethereum.EventParam("player1", ethereum.Value.fromAddress(player1))
  )
  fightersRevealedEvent.parameters.push(
    new ethereum.EventParam("player2", ethereum.Value.fromAddress(player2))
  )
  fightersRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "fighter1",
      ethereum.Value.fromUnsignedBigInt(fighter1)
    )
  )
  fightersRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "fighter2",
      ethereum.Value.fromUnsignedBigInt(fighter2)
    )
  )
  fightersRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "moves1",
      ethereum.Value.fromUnsignedBigIntArray(moves1)
    )
  )
  fightersRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "moves2",
      ethereum.Value.fromUnsignedBigIntArray(moves2)
    )
  )

  return fightersRevealedEvent
}

export function createGameAcceptedEvent(
  gameId: BigInt,
  player1: Address,
  player2: Address,
  wageredAmount: BigInt
): GameAccepted {
  let gameAcceptedEvent = changetype<GameAccepted>(newMockEvent())

  gameAcceptedEvent.parameters = new Array()

  gameAcceptedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameAcceptedEvent.parameters.push(
    new ethereum.EventParam("player1", ethereum.Value.fromAddress(player1))
  )
  gameAcceptedEvent.parameters.push(
    new ethereum.EventParam("player2", ethereum.Value.fromAddress(player2))
  )
  gameAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "wageredAmount",
      ethereum.Value.fromUnsignedBigInt(wageredAmount)
    )
  )

  return gameAcceptedEvent
}

export function createGameEndedEvent(
  gameId: BigInt,
  player1: Address,
  player2: Address,
  winner: Address,
  pain1: Array<BigInt>,
  pain2: Array<BigInt>,
  wageredAmount: BigInt
): GameEnded {
  let gameEndedEvent = changetype<GameEnded>(newMockEvent())

  gameEndedEvent.parameters = new Array()

  gameEndedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam("player1", ethereum.Value.fromAddress(player1))
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam("player2", ethereum.Value.fromAddress(player2))
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam(
      "pain1",
      ethereum.Value.fromUnsignedBigIntArray(pain1)
    )
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam(
      "pain2",
      ethereum.Value.fromUnsignedBigIntArray(pain2)
    )
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam(
      "wageredAmount",
      ethereum.Value.fromUnsignedBigInt(wageredAmount)
    )
  )

  return gameEndedEvent
}

export function createGameEndedByTimeoutEvent(
  gameId: BigInt,
  player1: Address,
  player2: Address,
  winner: Address,
  wageredAmount: BigInt
): GameEndedByTimeout {
  let gameEndedByTimeoutEvent = changetype<GameEndedByTimeout>(newMockEvent())

  gameEndedByTimeoutEvent.parameters = new Array()

  gameEndedByTimeoutEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameEndedByTimeoutEvent.parameters.push(
    new ethereum.EventParam("player1", ethereum.Value.fromAddress(player1))
  )
  gameEndedByTimeoutEvent.parameters.push(
    new ethereum.EventParam("player2", ethereum.Value.fromAddress(player2))
  )
  gameEndedByTimeoutEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  gameEndedByTimeoutEvent.parameters.push(
    new ethereum.EventParam(
      "wageredAmount",
      ethereum.Value.fromUnsignedBigInt(wageredAmount)
    )
  )

  return gameEndedByTimeoutEvent
}

export function createGameProposedEvent(
  gameId: BigInt,
  player1: Address,
  player2: Address,
  wageredAmount: BigInt
): GameProposed {
  let gameProposedEvent = changetype<GameProposed>(newMockEvent())

  gameProposedEvent.parameters = new Array()

  gameProposedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameProposedEvent.parameters.push(
    new ethereum.EventParam("player1", ethereum.Value.fromAddress(player1))
  )
  gameProposedEvent.parameters.push(
    new ethereum.EventParam("player2", ethereum.Value.fromAddress(player2))
  )
  gameProposedEvent.parameters.push(
    new ethereum.EventParam(
      "wageredAmount",
      ethereum.Value.fromUnsignedBigInt(wageredAmount)
    )
  )

  return gameProposedEvent
}
