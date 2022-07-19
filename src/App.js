import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";

export default function App() {

    // A state to hold the generated random dice
    const [dice, setDice] = useState(allNewDice());

    // A state to hold if the user won the game or not
    const [tenzi, setTenzi] = useState(false);

    /* A useEffect hook to keep the two internal states (dice and tenzi) in sync.
    * 
    * Here, the useEffect hook is responsible for updating "tenzi" state
    * variable when the values in the "dice" state variable satisfy specific conditions).
    */
    useEffect(() => {
        /* This code loops through the dice state array and checks each 
        * element in the array for two conditions:
        *
        * 1. The value of the element is equal to the first value in the
        *    array (reference value).
        * 
        * 2. The element has the isHeld property equal to "true".
        * 
        * If these two conditions are satisfied, the counter value (i)
        * will increase by 1 to allow for checking the next element in the
        * array until all the elements are checked. However, if any of the
        * elements doesn't meet both of the conditions (at the same time),
        * the callback function of the useEffect hook will stops execution 
        * at that point (because of the "return" keyword).
        * 
        * When the user clicks on one of the die or clicks "Roll", the dice
        * state array will be updated and that means the callback function
        * of the useEffect hook will be run again and hence the For loop for
        * checking the elements in the state array will be run again as well.
        * 
        * If all the elements in the dice state array satisfies the two conditions
        * (at the same time), the "tenzi" state array will be set to "true" and
        * this means that the user has won the game.
        */
        for (let i = 0; i < dice.length;) {
            if (dice[0].value === dice[i].value && dice[i].isHeld) {
                i++;
            } else {
                return;
            }
        }

        setTenzi(true);

    }, [dice])

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