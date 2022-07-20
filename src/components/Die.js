import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons";

export default function Die(props) {

    let dieIcon;

    switch (props.value) {
        case 1:
            dieIcon = faDiceOne;
            break;
        case 2:
            dieIcon = faDiceTwo;
            break;
        case 3:
            dieIcon = faDiceThree;
            break;
        case 4:
            dieIcon = faDiceFour;
            break;
        case 5:
            dieIcon = faDiceFive;
            break;
        case 6:
            dieIcon = faDiceSix;
            break;
        default:
            dieIcon = faDiceOne;
    }

    return (
        <FontAwesomeIcon 
            onClick={props.holdDice} 
            className={`die ${props.selected ? "die-selected" : ""}`} icon={dieIcon} 
        />
    )
}