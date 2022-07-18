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

    console.log(allNewDice());

    function rollDice() {
        setDice(allNewDice());
    }

    const dieElements = dice.map(die => <Die key={die.id} value={die.value} />)

    return (
        <main>
            <div className="dice">
                {dieElements}
            </div>
            <button onClick={rollDice}>Roll</button>
        </main>
    )
}