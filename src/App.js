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
        setDice(allNewDice());
    }

/**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die));
    }

    const dieElements = dice.map(die => <Die key={die.id} value={die.value} selected={die.isHeld} holdDice={() => holdDice(die.id)}/>)

    return (
        <main>
            <div className="dice">
                {dieElements}
            </div>
            <button onClick={rollDice}>Roll</button>
        </main>
    )
}