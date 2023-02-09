import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({guess, answer}) {

  const letterStatus = guess.trim() !== ""? checkGuess(guess, answer): false;

  return (
    <p className="guess" >
      {guess.split("").map((letter,index)=>{
        const cellClass = letterStatus ? `cell ${letterStatus[index].status}`: 'cell';
        return <span className={cellClass} key={index}>{letter}</span>
      })}
  </p>
  );
}

export default Guess;
