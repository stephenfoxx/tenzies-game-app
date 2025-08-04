export default function Die(props) {
    
    const styles = {
      backgroundColor: props.isHeld ? "green" : "white",
    };

    return(
        
        <button
            aria-label={`die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
            aria-pressed = {props.isHeld}
            style={styles}
        onClick={() => props.hold(props.id)}
        >
            {props.value}
        </button>
    )
}