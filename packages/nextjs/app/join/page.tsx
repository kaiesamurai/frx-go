// import { useState } from "react";
// import { SelectGame } from "../../components/SelectGame";
import { GameForm } from "../../components/GameForm";
import type { NextPage } from "next";
// import { useReadContract } from "wagmi";
// Ensure this is appropriate for your version of wagmi
// import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Join game",
  description: "Join an existing game",
});

const Join: NextPage = () => {
  return (
    <>
      <GameForm mode="join" />
    </>
  );
};

export default Join;
