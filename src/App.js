import {useState} from "react";
import Die from "./components/Die";

export default function App() {

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        const diceArray = [];

        while (diceArray.length < 10) {
            const randomNum = Math.floor(Math.random() * 7);
            if (randomNum !== 0) {
                diceArray.push(randomNum);
            }
        }

        return diceArray;
    }

    function rollDice() {
        setDice(allNewDice());
    }

    const dieElements = dice.map(die => <Die value={die} />)

    return (
        <main>
            <div className="dice">
                {dieElements}
            </div>
            <button onClick={rollDice}>Roll</button>
        </main>
    )
}