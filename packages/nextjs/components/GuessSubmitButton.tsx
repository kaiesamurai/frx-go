"use client";

import React from "react";
import circuit from "../../noir/circuits/target/scrollfighter.json";
import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";
import { Noir } from "@noir-lang/noir_js";
import { CompiledCircuit } from "@noir-lang/types";

const setup = async () => {
  // const [noircAbi, acvmJs] = await Promise.all([
  await Promise.all([
    import("@noir-lang/noirc_abi").then(module =>
      module.default(new URL("@noir-lang/noirc_abi/web/noirc_abi_wasm_bg.wasm", import.meta.url).toString()),
    ),
    import("@noir-lang/acvm_js").then(module =>
      module.default(new URL("@noir-lang/acvm_js/web/acvm_js_bg.wasm", import.meta.url).toString()),
    ),
  ]);
};

function display(container: string, msg: string): void {
  const c = document.getElementById(container);
  if (c) {
    const p = document.createElement("p");
    p.textContent = msg;
    c.appendChild(p);
  }
}

const GuessSubmitButton: React.FC = () => {
  return (
    <button
      id="submitGuess"
      onClick={async () => {
        try {
          display("logs", "Processing your guess...");
          const backend = new BarretenbergBackend(circuit as CompiledCircuit);
          const noir = new Noir(circuit as CompiledCircuit, backend);
          //   const inputElement = document.getElementById("guessInput") as HTMLInputElement;
          const input = { inputs: [1, 1, 1, 1, 1] };

          await setup();

          display("logs", "Generating proof... ⌛");
          const proof = await noir.generateProof(input);
          display("logs", "Generating proof... ✅");
          display("results", proof.proof.toString());
          display("logs", "Verifying proof... ⌛");
          const verification = await noir.verifyProof(proof);
          if (verification) display("logs", "Verifying proof... ✅");
        } catch (e: any) {
          display("logs", e);
          display("logs", "Oh 💔 Wrong guess");
        }
      }}
    >
      Submit Guess
    </button>
  );
};

export default GuessSubmitButton;
