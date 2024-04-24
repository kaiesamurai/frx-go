"use client";

import React, { useState } from "react";
import { Fighter, fighters } from "./Fighters";

const results = [
  { PlayerOneAction: "attack", PlayerTwoAction: "defend", PlayerOneFirst: true },
  { PlayerOneAction: "attack", PlayerTwoAction: "attack", PlayerOneFirst: true },
  { PlayerOneAction: "specialMove", PlayerTwoAction: "attack", PlayerOneFirst: false },
];

export const FightDisplay = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [playFight, setPlayFight] = useState(false);

  const getImageForAction = (fighter: Fighter, action: string) => {
    switch (action) {
      case "attack":
        return fighter.attackImage;
      case "defend":
        return fighter.defendImage;
      case "specialMove":
        return fighter.specialImage;
      case "hurt":
        return fighter.hurtImage;
      case "death":
        return fighter.deathImage;
      default:
        return fighter.idleImage;
    }
  };

  const playRound = (round: number) => {
    if (round < results.length) {
      setCurrentRound(round);
      setTimeout(() => playRound(round + 1), 2000); // Move to next round after 2 seconds
    } else {
      setPlayFight(false); // End the fight
    }
  };

  return (
    <div>
      <h1>Fight Simulation</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h2>{fighters[0].name}</h2>
          <img
            src={
              playFight ? getImageForAction(fighters[0], results[currentRound].PlayerOneAction) : fighters[0].idleImage
            }
            className="h-40 w-40 inline-block "
            alt={fighters[0].name}
          />
        </div>
        <div>
          <h2>{fighters[1].name}</h2>
          <img
            src={
              playFight ? getImageForAction(fighters[1], results[currentRound].PlayerTwoAction) : fighters[1].idleImage
            }
            alt={fighters[1].name}
            className="h-40 w-40 inline-block "
            style={{ transform: "scaleX(-1)" }} // Flips the image horizontally
          />
        </div>
      </div>
      <button
        onClick={() => {
          setPlayFight(true);
          playRound(0);
        }}
      >
        Play Fight
      </button>
    </div>
  );
};
