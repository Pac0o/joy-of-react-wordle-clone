import React from "react";

function GuessInput({addGuessToList, gameStatus}) {
  const [guessInput, setGuessInput] = React.useState("")
  const minLength = 5;
  const maxLength = 5;
  return (
    <form className="guess-input-wrapper" onSubmit={event=>{
      event.preventDefault();
      if(guessInput.length !==  5){
        return
      }

      addGuessToList(guessInput)
      setGuessInput("")
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input minLength={minLength} maxLength={maxLength} id="guess-input" value={guessInput}
      onChange={(event)=>{
        setGuessInput(event.target.value.toUpperCase())
      }}
       disabled={gameStatus!=="PLAY"}
             type="text" />
    </form>
  )
}

export default GuessInput;
