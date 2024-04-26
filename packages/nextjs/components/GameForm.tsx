"use client";

// GameForm.tsx
import React, { useEffect, useState } from "react";
import { Fighter, fighters } from "./Fighters";
import { formatUnits } from "viem";
import { useAccount, useBalance, useReadContract, useWriteContract } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

// Adjust the path as necessary

interface GameFormProps {
  mode: "create" | "join";
  initialOpponentAddress?: string;
  initialAmount?: string;
}

const moves = ["Attack", "Defend", "Special"] as const;
type Move = (typeof moves)[number];

export const GameForm = ({ mode, initialOpponentAddress, initialAmount }: GameFormProps) => {
  const writeTxn = useTransactor();

  const [amount, setAmount] = useState<string>(initialAmount || "");
  const [opponent, setOpponent] = useState<string>(initialOpponentAddress || "");
  const { address, chain } = useAccount();
  const contractName = "ScrollFighterV2";
  const { data: deployedContractData } = useDeployedContractInfo(contractName);

  const tokenContractAddress = "0x64CDeB6CD5ecfB002bdaFabc98B5C883C5C06B27";
  const ethBalance = useBalance({ address: address, token: tokenContractAddress }) || 0;
  const data = ethBalance.data;
  const formattedEthBalance = formatUnits(BigInt(data?.value ?? 0), data?.decimals ?? 18);
  // const [gameLoaded, setGameLoaded] = useState<boolean>(false);
  const [gameId, setGameId] = useState<string>("");
  const [selectedFighter, setSelectedFighter] = useState<Fighter | null>(null);
  const [selectedMoves, setSelectedMoves] = useState<Move[]>(["Attack", "Attack", "Attack"]);
  const [specialMoveUsed, setSpecialMoveUsed] = useState(false);
  const { targetNetwork } = useTargetNetwork();

  const writeDisabled = !chain || chain?.id !== targetNetwork.id;

  const handleMoveChange = (index: number, move: Move): void => {
    console.log("special move used" + specialMoveUsed);
    setSelectedMoves(prevMoves => {
      const newMoves = [...prevMoves];
      const currentMove = newMoves[index];
      const isSpecialMove = move === "Special";
      const wasSpecialMove = currentMove === "Special";

      // Handling special move selection
      if (isSpecialMove && specialMoveUsed && currentMove !== "Special") {
        console.log("alert");
        alert("Special move can only be used once per game.");
        return newMoves; // Return previous state if change is invalid
      }

      // Updating the move
      newMoves[index] = move;

      // Update special move usage state
      if (isSpecialMove) {
        setSpecialMoveUsed(true);
      } else if (wasSpecialMove) {
        // Check if any remaining move is still a special move
        const anySpecial = newMoves.some(m => m === selectedFighter?.specialMove);
        setSpecialMoveUsed(anySpecial);
      }

      return newMoves; // Return the updated moves
    });
  };

  const { isPending, writeContractAsync } = useWriteContract();

  // When a fighter is clicked, update the selectedFighter state
  const handleFighterSelect = (fighter: Fighter) => {
    setSelectedFighter(fighter);
  };

  // Use to fetch game details
  const { data: gameData, isLoading: isGameLoading } = useReadContract({
    address: deployedContractData?.address || "",
    abi: deployedContractData?.abi || [],
    functionName: "getGame",
    args: [BigInt(gameId)],
  });

  useEffect(() => {
    if (gameData && !isGameLoading) {
      setOpponent(gameData.players[0]);
      setAmount(formatUnits(BigInt(gameData.wageredAmount), 18));
      // setGameLoaded(true);
    }
  }, [gameData, isGameLoading]);

  const handleGameIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(e.target.value);
    // setGameLoaded(false); // Reset load state when game ID changes
  };

  const proposeGame = async () => {
    if (writeContractAsync) {
      if (!deployedContractData?.abi || !deployedContractData?.address) {
        console.error("Contract data is not loaded.");
        return;
      }
      try {
        // const bytes32Value = `0x4100000000000000000000000000000000000000000000000000000000000000`;

        // \/ \/ \/ V2 LOGIC. REMOVE THIS WHEN USING V1 \/ \/ \/
        if (!selectedFighter) {
          console.error("No fighter selected");
          return;
        }

        const moveIndices = selectedMoves.map(move => BigInt(moves.indexOf(move)));
        if (moveIndices.length !== 3) {
          console.error("Invalid number of moves selected");
          return;
        }
        const fighterIdBigInt = BigInt(selectedFighter.id);
        // /\ /\ /\ V2 LOGIC. REMOVE THIS WHEN USING V1 /\ /\ /\

        const makeWriteWithParams = () =>
          writeContractAsync({
            address: deployedContractData.address,
            functionName: "proposeGame",
            abi: deployedContractData.abi,
            // args: [opponent, bytes32Value, BigInt(amount)],
            args: [opponent, fighterIdBigInt, moveIndices as [bigint, bigint, bigint], BigInt(amount)],
          });
        await writeTxn(makeWriteWithParams);
        // onChange();
      } catch (e: any) {
        console.error("⚡️ ~ file: WriteOnlyFunctionForm.tsx:handleWrite ~ error", e);
      }
    }
  };

  const joinGame = async () => {
    if (!deployedContractData?.abi || !deployedContractData?.address) {
      console.error("Contract data is not loaded.");
      return;
    }

    if (!selectedFighter) {
      console.error("No fighter selected");
      return;
    }

    try {
      // Ensure moveIndices always has three elements, each converted to BigInt
      const moveIndices = selectedMoves.map(move => BigInt(moves.indexOf(move)));
      if (moveIndices.length !== 3) {
        console.error("Invalid number of moves selected");
        return;
      }

      // Convert all parts to BigInt for Solidity compatibility
      const gameIdBigInt = BigInt(gameId);
      const fighterIdBigInt = BigInt(selectedFighter.id);

      const makeWriteWithParams = () =>
        writeContractAsync({
          address: deployedContractData.address,
          functionName: "acceptGame",
          abi: deployedContractData.abi,
          args: [gameIdBigInt, fighterIdBigInt, moveIndices as [bigint, bigint, bigint]],
        });

      await writeTxn(makeWriteWithParams);
      console.log("Game joined successfully!");
    } catch (error) {
      console.error("Failed to join game:", error);
    }
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0 `}>
      <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          <div className="z-10">
            <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Start game</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">
                <h1 className="text-xl font-bold">Game Setup</h1>
                {mode === "join" && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter Game ID to Load"
                      value={gameId}
                      onChange={handleGameIdChange}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </>
                )}
                <label className="block">
                  Opponent Address:
                  <input
                    type="text"
                    value={opponent}
                    onChange={e => setOpponent(e.target.value)}
                    readOnly={mode === "join"}
                    className="input input-bordered w-full"
                    placeholder="Enter ERC20 address"
                  />
                </label>
                <label className="block">
                  <div className="flex justify-between mt-2">Amount to Stake: {amount} FT</div>
                  <input
                    type="range"
                    min="0"
                    max={formattedEthBalance.toString()}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    readOnly={mode === "join"}
                    className="range range-primary w-full"
                  />
                  <div className="flex justify-between">
                    <div className="text-left">0</div>
                    <div className="text-right">{formattedEthBalance}</div>
                  </div>
                </label>
                <h1 className="text-xl font-bold">Select Your Fighter</h1>
                <div className="flex space-x-4">
                  {fighters.map(fighter => (
                    <div
                      key={fighter.id}
                      className="text-center cursor-pointer"
                      onClick={() => handleFighterSelect(fighter)}
                    >
                      <img
                        src={selectedFighter?.id === fighter.id ? fighter.idleImage : fighter.staticImage}
                        alt={fighter.name}
                        className={`h-40 w-40 inline-block ${
                          selectedFighter?.id === fighter.id ? "ring-4 ring-primary" : ""
                        }`}
                      />
                      <div className="mt-1 font-semibold">{fighter.name}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="my-2">
                    Health:
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-primary h-4 rounded-full bg-red-500"
                        style={{ width: `${selectedFighter ? selectedFighter.health * 10 : 0}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="my-2">
                    Attack:
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-primary h-4 rounded-full bg-green-500"
                        style={{ width: `${selectedFighter ? selectedFighter.attack * 10 : 0}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="my-2">
                    Defense:
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-primary h-4 rounded-full bg-blue-500"
                        style={{ width: `${selectedFighter ? selectedFighter.defense * 10 : 0}%` }}
                      ></div>
                    </div>
                  </div>

                  <p>Special Move: {selectedFighter ? selectedFighter.specialMove : "None"} </p>
                </div>

                <div></div>
                <p>Select moves for each round:</p>
                <div className="flex flex-col gap-4">
                  <div>
                    {Array.from({ length: 3 }).map((_, roundIndex) => (
                      <div key={roundIndex} className="flex flex-col items-center">
                        <p>Round {roundIndex + 1}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {moves.map(move => (
                            <button
                              key={move}
                              className={`btn ${selectedMoves[roundIndex] === move ? "btn-active" : "btn-outline"}`}
                              onClick={() => handleMoveChange(roundIndex, move)}
                              disabled={
                                move === selectedFighter?.specialMove &&
                                specialMoveUsed &&
                                selectedMoves[roundIndex] !== move
                              }
                            >
                              {move}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className="btn btn-secondary btn-sm"
                  disabled={writeDisabled || isPending}
                  onClick={() => (mode === "create" ? proposeGame() : joinGame())}
                >
                  {isPending && <span className="loading loading-spinner loading-xs"></span>}
                  {mode === "create" ? "Start a fight" : "Fight!"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
