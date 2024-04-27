import React from "react";
import GuessSubmitButton from "../../components/GuessSubmitButton";

// Import the button component

const App: React.FC = () => {
  return (
    <>
      <h1>Noir app</h1>
      <div className="input-area">
        <input id="guessInput" type="number" placeholder="Enter your guess" />
        <GuessSubmitButton />
      </div>
      <div className="outer">
        <div id="logs" className="inner">
          <h2>Logs</h2>
        </div>
        <div id="results" className="inner">
          <h2>Proof</h2>
        </div>
      </div>
    </>
  );
};

export default App;
