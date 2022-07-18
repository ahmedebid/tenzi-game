import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";

export default function App() {

    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        const diceArray = [];

        while (diceArray.length < 10) {
            const randomNum = Math.floor(Math.random() * 7);
            if (randomNum !== 0) {
                diceArray.push({
                    value: randomNum,
                    isHeld: false,
                    id: nanoid()
                });
            }
        }

        return diceArray;
    }

    function rollDice() {
        setDice(prevDice => prevDice.map(die => {
            return die.isHeld ? 
                die : 
                {
                    value: Math.floor(Math.random() * 7), 
                    isHeld: false, 
                    id: nanoid()
                }
        }))
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die));
    }

    const dieElements = dice.map(die => <Die key={die.id} value={die.value} selected={die.isHeld} holdDice={() => holdDice(die.id)}/>)

    return (
        <main>
            <h1 className="game-title">Tenzies</h1>
            <p className="game-instructions">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice">
                {dieElements}
            </div>
            <button onClick={rollDice}>Roll</button>
        </main>
    )
}