import React from "react";

function EndingBanner({answer, gameStatus, guessCount}) {

  return (
    <>
    {
      (gameStatus === "WIN") &&
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessCount} guesses</strong>.
        </p>
      </div>
    }
    {
      (gameStatus === "LOSS") &&
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    }
    </>
  )
}

export default EndingBanner;
