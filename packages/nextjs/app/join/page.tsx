import { useState } from "react";
// ensure the ABI is correctly imported
import { GameForm } from "../../components/GameForm";
import type { NextPage } from "next";
import { useReadContract } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
// assuming this is a custom or extended hook in your setup
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Join game",
  description: "Join an existing game",
});

const Join: NextPage = () => {
  const [gameId, setGameId] = useState("");
  const [gameData, setGameData] = useState({ opponent: "", amount: "0" });

  const { data: deployedContractData } = useDeployedContractInfo("ScrollFighter");

  const { data, isError, isLoading } = useReadContract({
    address: deployedContractData?.address || "0xa52A05eB2Eb48499d5bEB6d89d39dDB41854f47C", // Contract address
    functionName: "getGame", // Assuming this is correct
    args: [gameId],
  });

  // When game data is successfully fetched, update local state
  if (data && !isLoading && !isError) {
    setGameData({
      opponent: (data as { players: string[]; amount: number }).players[0],
      amount: (data as { players: string[]; amount: number }).amount.toString(),
    });
  }

  const handleLoadGame = () => {
    if (!gameId) return;
    // Assuming refetch or direct call is available or managed internally
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <input
          type="text"
          placeholder="Enter Game ID"
          value={gameId}
          onChange={e => setGameId(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary m-4" onClick={handleLoadGame} disabled={!gameId}>
          Load Game
        </button>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading game data. Please try again.</p>}
        {gameData.opponent && (
          <GameForm mode="join" initialOpponentAddress={gameData.opponent} initialAmount={gameData.amount} />
        )}
      </div>
    </>
  );
};

export default Join;
