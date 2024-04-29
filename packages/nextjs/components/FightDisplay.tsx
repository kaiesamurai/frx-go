"use client";

import React, { useEffect, useState } from "react";
import { fighters } from "./Fighters";
import { useReadContract } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

const convertMoveToAction = (move: bigint): string => {
  switch (move) {
    case BigInt(1):
      return "attack";
    case BigInt(2):
      return "defend";
    case BigInt(3):
      return "specialMove";
    default:
      return "idle";
  }
};

export const FightDisplay: React.FC = () => {
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [playFight, setPlayFight] = useState<boolean>(false);
  const [showRoundAnnouncement, setShowRoundAnnouncement] = useState<boolean>(false);
  const [gameLoaded, setGameLoaded] = useState<boolean>(false);
  const [gameId, setGameId] = useState<string>("");
  const contractName = "ScrollFighter";

  const { data: deployedContractData } = useDeployedContractInfo(contractName);

  const { data: gameData, isLoading: isGameLoading } = useReadContract({
    address: deployedContractData?.address || "",
    abi: deployedContractData?.abi || [],
    functionName: "getGame",
    args: [BigInt(gameId)],
  });

  const getImageForAction = (fighterId: bigint, move: bigint, isActive: boolean): string => {
    const fighter = fighters.find(f => BigInt(f.id) === fighterId);
    const action = isActive ? convertMoveToAction(move) : "idle";
    // return fighter ? fighter[action + "Image"] : ""; // Concatenating with "Image" to get the correct image property
    if (fighter) {
      switch (action) {
        case "idle":
          return fighter.idleImage;
        case "attack":
          return fighter.attackImage;
        case "defend":
          return fighter.defendImage;
        case "specialMove":
          return fighter.specialImage;
        case "hurt":
          return fighter.specialImage;
        case "death":
          return fighter.specialImage;
        default:
          return fighter.idleImage;
      }
    }
    return ""; // Fallback in case no fighter is found
  };

  const playRound = (round: number) => {
    if (round < 3 && gameData) {
      console.log("Playing round", round);
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
    if (gameId && gameData && gameData.id !== BigInt(0) && !isGameLoading) {
      setGameLoaded(true);
    }
    console.log("Game data", gameData);
  }, [gameId, gameData, isGameLoading]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0`}>
      <div className="flex flex-col mt-10 relative">
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
          {gameLoaded && gameData && Number(gameData.fighterIds[0]) != 0 && Number(gameData.fighterIds[1]) != 0 && (
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
                <div
                  style={{
                    backgroundColor: "red",
                    height: "10px",
                    width: `${
                      // (100 * Number(gameData.currentHealth[0])) /
                      fighters.find(f => f.id === Number(gameData.fighterIds[0]))!.health * 5
                    }%`,
                    margin: "0 10px",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "red",
                    height: "10px",
                    width: `${
                      // (100 * Number(gameData.currentHealth[1])) /
                      fighters.find(f => f.id === Number(gameData.fighterIds[1]))!.health * 5
                    }%`,
                    margin: "0 10px",
                  }}
                />
              </div>

              <div style={{ position: "absolute", bottom: "50px", left: "80px" }}>
                <img
                  src={getImageForAction(
                    gameData.fighterIds[0],
                    gameData.moves[0][currentRound],
                    playFight && showRoundAnnouncement,
                  )}
                  alt={fighters.find(f => f.id === Number(gameData.fighterIds[0]))!.name}
                  style={{ height: "200px" }}
                />
              </div>

              <div style={{ position: "absolute", bottom: "50px", right: "80px" }}>
                <img
                  src={getImageForAction(
                    gameData.fighterIds[1],
                    gameData.moves[1][currentRound],
                    playFight && showRoundAnnouncement,
                  )}
                  alt={fighters.find(f => f.id === Number(gameData.fighterIds[1]))!.name}
                  style={{ height: "200px", transform: "scaleX(-1)" }}
                />
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
        {gameData && (
          <div style={{ marginTop: "20px", fontSize: "16px" }}>
            <p>Results: {gameData?.winner}</p>
            <strong>Wagered Amount:</strong> {gameData.wageredAmount.toString()} ETH
          </div>
        )}{" "}
        {/* other parts of the component */}{" "}
      </div>
    </div>
  );
};
