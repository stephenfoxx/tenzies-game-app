import React, { useEffect } from "react";

import Die from "./Die";

import { nanoid } from "nanoid"

import Confetti from "react-confetti"

import { useRef } from "react";


export default function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());

  // to generate random dice value when clicked
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  // function to hold a dice
  function heldDie() {
    if (isHeld == true) {
      return;
    }
  }

  // to hold dice when clicked,  it changes color
  function hold(id) {
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id == id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const diceElements = dice.map((dieObject) => (
    <Die
      value={dieObject.value}
      key={dieObject.id}
      isHeld={dieObject.isHeld}
      hold={hold}
      id={dieObject.id}
    ></Die>
  ));

  // to roll dice
  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllNewDice);
    }
  }

  const buttonRef = useRef(null);

  // for if game is won
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  // to be able to use a space bar to trigger new game instead of refreshing page
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  //   function generateAllNewDice() {
  //     const newDice = []
  //     for (let i = 0; i < 10; i++) {
  //       const rand = math.ceil (Math.random () * 6)
  // newDice.push(rand)
  //     }

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <div className="dice-image">
          <img src="./public/dice.jpeg" alt="" />
          <h1 className="h1">Tenzies</h1>
        </div>
        <p className="h1">
          Roll untill all dice are the same click each die to freeze it at its
          current value between rolls.
        </p>

        <div className="dice-container">{diceElements}</div>
      </main>

      <button ref={buttonRef} onClick={rollDice} className="roll">
        {gameWon ? "new game" : "Roll"}
      </button>
      <canvas></canvas>
    </>
  );
}