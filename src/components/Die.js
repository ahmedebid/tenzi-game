export default function Die(props) {

    return (
        <div onClick={props.holdDice} className={`die ${props.selected ? "die-selected" : ""}`}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}