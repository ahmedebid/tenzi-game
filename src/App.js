import {useState} from "react";
import Die from "./components/Die";

export default function App() {

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

    const dieElements = dice.map(die => <Die value={die} />)

    return (
        <main>
            <div className="dice">
                {dieElements}
            </div>
        </main>
    )
}