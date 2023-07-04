import { useState, useRef } from "react";
import "./Game.css";



const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="points">
        <span>pontuação: 000</span>
      </p>
      <h1>Adivinhe a Palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className="wordContainer"></div>
        <span className="letter">A</span>
        <span className="blankSquare"></span>
        <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Jogar</button>
        </form>
         </div>
         <div className="wrongLettersContainer">

          <p>letras já utilizadas:</p>
          <span>a, </span>
          <span>b, </span>


         </div>

        
      </div>
  );
};

export default Game;