"use client";

import React, { useEffect, useState } from "react";
import { Fighter, fighters } from "./Fighters";
import { useReadContract } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

const results = [
  { PlayerOneAction: "attack", PlayerTwoAction: "defend", PlayerOneFirst: true },
  { PlayerOneAction: "attack", PlayerTwoAction: "attack", PlayerOneFirst: true },
  { PlayerOneAction: "specialMove", PlayerTwoAction: "attack", PlayerOneFirst: false },
];

export const FightDisplay = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [playFight, setPlayFight] = useState(false);
  const [showRoundAnnouncement, setShowRoundAnnouncement] = useState(false);
  const [gameLoaded, setGameLoaded] = useState<boolean>(false);

  const [gameId, setGameId] = useState<string>("");
  const contractName = "ScrollFighter";
  const { data: deployedContractData } = useDeployedContractInfo(contractName);

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

  const handleGameIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(e.target.value);
    setGameLoaded(false); // Reset load state when game ID changes
  };

  useEffect(() => {
    if (gameId && gameData && !isGameLoading) {
      setGameLoaded(true);
    }
  });

  // Use to fetch game details
  const { data: gameData, isLoading: isGameLoading } = useReadContract({
    address: deployedContractData?.address || "",
    abi: deployedContractData?.abi || [],
    functionName: "getGame",
    args: [BigInt(gameId)],
  });

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0 `}>
      <div className=" flex flex-col mt-10 relative">
        <div className="p-5 divide-y divide-base-300">
          <h1 className="text-xl font-bold">Game ID</h1>
          <input
            type="text"
            placeholder="Enter Game ID to Load"
            value={gameId}
            onChange={handleGameIdChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
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
          {gameLoaded && (
            <>
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
                style={{
                  position: "absolute",
                  top: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ backgroundColor: "red", height: "10px", width: "40%", margin: "0 10px" }} />
                <div style={{ backgroundColor: "red", height: "10px", width: "40%", margin: "0 10px" }} />
              </div>

              <div style={{ position: "absolute", bottom: "50px", left: "80px" }}>
                <img
                  src={
                    playFight
                      ? getImageForAction(fighters[0], results[currentRound].PlayerOneAction)
                      : fighters[0].idleImage
                  }
                  alt={fighters[0].name}
                  style={{ height: "200px" }}
                />{" "}
              </div>

              <div style={{ position: "absolute", bottom: "50px", right: "80px" }}>
                <img
                  src={
                    playFight
                      ? getImageForAction(fighters[1], results[currentRound].PlayerTwoAction)
                      : fighters[1].idleImage
                  }
                  alt={fighters[1].name}
                  style={{ height: "200px", transform: "scaleX(-1)" }}
                />{" "}
              </div>
              <button
                className={`btn`}
                onClick={() => setPlayFight(true)}
                style={{ position: "absolute", bottom: "10px" }}
              >
                Play Fight
              </button>
            </>
          )}
        </div>
        <p>Results:</p>
      </div>
    </div>
  );
};
