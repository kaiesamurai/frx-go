"use client";

import React from "react";

// import React, { useEffect, useState } from "react";

// import { GameForm } from "./GameForm";
// import { readContract } from "@wagmi/core";
// import { useReadContract } from "wagmi";
// import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
// import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// interface GameData {
//   opponent: string;
//   amount: string;
// }

export const SelectGame = () => {
  // const [gameId, setGameId] = useState<string>("");
  // const [gameData, setGameData] = useState<GameData>({ opponent: "", amount: "0" });

  // const { data: deployedContractData } = useDeployedContractInfo("ScrollFighterV2");

  // const fetchGameData = async () => {
  //   console.log("AVH gameid = " + gameId);
  //   if (!gameId) return;
  //   try {
  //     const { data, error } = await useReadContract({
  //       functionName: "getGame",
  //       args: ["1"],
  //       address: deployedContractData?.address,
  //     });

  //     if (error) {
  //       console.error("Failed to load game data:", error);
  //       return;
  //     }

  //     setGameData({
  //       opponent: (data as { players: string[]; amount: number }).players[0],
  //       amount: (data as { players: string[]; amount: number }).amount.toString(),
  //     });
  //   } catch (error) {
  //     console.error("Error fetching game data:", error);
  //   }
  // };

  return (
    <>
      {/* <div className="container mx-auto p-6">
        <input
          type="text"
          placeholder="Enter Game ID"
          value={gameId}
          onChange={e => setGameId(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary m-4" onClick={() => fetchGameData()} disabled={!gameId}>
          Load Game
        </button>
        {gameData.opponent && (
          <GameForm mode="join" initialOpponentAddress={gameData.opponent} initialAmount={gameData.amount} />
        )}
      </div> */}
    </>
  );
};
