// import { useState } from "react";
import { SelectGame } from "../../components/SelectGame";
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
      <SelectGame />
      {/* <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Debug Contracts</h1>
        <p className="text-neutral">
          You can debug & interact with your deployed contracts here.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / app / debug / page.tsx
          </code>{" "}
        </p>
      </div> */}
    </>
  );
};

export default Join;
