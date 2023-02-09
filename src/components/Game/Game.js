import React from 'react';

import { range, sample } from "../../utils";
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GameResults from "../GameResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import EndingBanner from "../EndingBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState(range(0,NUM_OF_GUESSES_ALLOWED).map(()=>{
    return {
      guess:"     ",
      id: Math.random()
    }
  }))
  const [guessCount, setGuessCount] = React.useState(0)
  const [gameStatus, setGameStatus] = React.useState("PLAY")

  function addGuessToList(newGuess){
    if(newGuess === answer){
      setGameStatus("WIN")
    }else if(guessCount === NUM_OF_GUESSES_ALLOWED-1) {
      setGameStatus("LOSS")
    }
    const newGuessItem = {
      guess:newGuess,
      id: Math.random()
    }

    const newGuessList = [...guessList];
    newGuessList[guessCount] = newGuessItem;
    setGuessCount(guessCount+1);
    setGuessList(newGuessList);
  }

  return <>
    <GameResults guessList={guessList} answer={answer} />
    <GuessInput addGuessToList={addGuessToList} gameStatus={gameStatus} />
    <EndingBanner  answer={answer} gameStatus={gameStatus} guessCount={guessCount}/>
  </>;
}

export default Game;
