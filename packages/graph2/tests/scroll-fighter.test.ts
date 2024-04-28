import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { FightersRevealed } from "../generated/schema"
import { FightersRevealed as FightersRevealedEvent } from "../generated/ScrollFighter/ScrollFighter"
import { handleFightersRevealed } from "../src/scroll-fighter"
import { createFightersRevealedEvent } from "./scroll-fighter-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let gameId = BigInt.fromI32(234)
    let player1 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let player2 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let fighter1 = BigInt.fromI32(234)
    let fighter2 = BigInt.fromI32(234)
    let moves1 = [BigInt.fromI32(234)]
    let moves2 = [BigInt.fromI32(234)]
    let newFightersRevealedEvent = createFightersRevealedEvent(
      gameId,
      player1,
      player2,
      fighter1,
      fighter2,
      moves1,
      moves2
    )
    handleFightersRevealed(newFightersRevealedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FightersRevealed created and stored", () => {
    assert.entityCount("FightersRevealed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FightersRevealed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "gameId",
      "234"
    )
    assert.fieldEquals(
      "FightersRevealed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "player1",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FightersRevealed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "player2",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FightersRevealed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fighter1",
      "234"
    )
    assert.fieldEquals(
      "FightersRevealed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fighter2",
      "234"
    )
    assert.fieldEquals(
      "FightersRevealed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "moves1",
      "[234]"
    )
    assert.fieldEquals(
      "FightersRevealed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "moves2",
      "[234]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
