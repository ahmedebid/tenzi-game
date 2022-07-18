import Die from "./components/Die";

export default function App() {

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

    console.log(allNewDice());

    return (
        <main>
            <div className="dice">
                <Die value="1" />
                <Die value="4" />
                <Die value="5" />
                <Die value="6" />
                <Die value="3" />
                <Die value="5" />
                <Die value="2" />
                <Die value="4" />
                <Die value="4" />
                <Die value="1" />
            </div>
        </main>
    )
}