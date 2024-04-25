"use client";

import React, { useEffect, useState } from "react";
import { Fighter, fighters } from "./Fighters";

const results = [
  { PlayerOneAction: "attack", PlayerTwoAction: "defend", PlayerOneFirst: true },
  { PlayerOneAction: "attack", PlayerTwoAction: "attack", PlayerOneFirst: true },
  { PlayerOneAction: "specialMove", PlayerTwoAction: "attack", PlayerOneFirst: false },
];

export const FightDisplay = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [playFight, setPlayFight] = useState(false);
  const [showRoundAnnouncement, setShowRoundAnnouncement] = useState(false);

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
      setShowRoundAnnouncement(true);
      setTimeout(() => {
        setShowRoundAnnouncement(false);
        setTimeout(() => {
          playRound(round + 1);
        }, 3000); // Duration of action before next round starts
      }, 2000); // Duration to show round announcement
    } else {
      setPlayFight(false); // End the fight
    }
  };

  useEffect(() => {
    if (playFight) {
      playRound(0);
    }
  }, [playFight]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage: 'url("/wafflehouse.jpeg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "640px",
        height: "360px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {showRoundAnnouncement && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px #000",
          }}
        >
          Round {currentRound + 1}
        </div>
      )}
      {/* Health bars and players positioned */}
      <div
        style={{ position: "absolute", top: "10px", width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ backgroundColor: "red", height: "10px", width: "40%", margin: "0 10px" }} />
        <div style={{ backgroundColor: "red", height: "10px", width: "40%", margin: "0 10px" }} />
      </div>

      <div style={{ position: "absolute", bottom: "50px", left: "80px" }}>
        <img
          src={
            playFight ? getImageForAction(fighters[0], results[currentRound].PlayerOneAction) : fighters[0].idleImage
          }
          alt={fighters[0].name}
          style={{ height: "200px" }}
        />{" "}
      </div>

      <div style={{ position: "absolute", bottom: "50px", right: "80px" }}>
        <img
          src={
            playFight ? getImageForAction(fighters[1], results[currentRound].PlayerTwoAction) : fighters[1].idleImage
          }
          alt={fighters[1].name}
          style={{ height: "200px", transform: "scaleX(-1)" }}
        />{" "}
      </div>

      <button onClick={() => setPlayFight(true)} style={{ position: "absolute", bottom: "10px" }}>
        Play Fight
      </button>
    </div>
  );
};
