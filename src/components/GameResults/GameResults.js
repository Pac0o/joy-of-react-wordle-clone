import React from "react";
import Guess from "../Guess";

function GameResults({guessList, answer}) {
  return (
    <div className="guess-results">
      {guessList.map(({ guess, id })=>{
        return (
            <Guess guess={guess} key={id} answer={answer}/>
        )
      })}
    </div>
  );
}

export default GameResults;
