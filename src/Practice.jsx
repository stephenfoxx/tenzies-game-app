export default function Practice() {
    

const [dice, setDice] = React.useState (() =>)

    function generateAllNewDice() {
        return new Array(dice.length).fill(dice).map(() => ({

        })) 

    }
    
    // to hold dice

    function isHeld() {
        if (isHeld == true) {
            return;
        }
     }
    // to hold the dice that it changes color when clicked
    
    function heldDice() {
        setDice((oldDice) => {
            return oldDice.map((die) => {
                return die.id = id ? { ...die, isHeld: !die.isHeld } : die;
            })
        })
    }

    const dieEelement = dice.map((dieObject) => {
        <Die
            value={dieObject.value}
            key = {dieObject.id}
            id={dieObject.id}
            hold={hold}
            isHeld = {isHeld}
        />

    })

    function gameWon() {
        if (!gameWon) {
            setDice(oldDice => {
                oldDice.map((die) => {
                   die.isHeld ? die : {...die, value: Math.ceil (Math.random () *6)}

               })
           })
        } else {
            setDice (generateAllNewDice)
       }
   }
    }



    
    
    
    return (
        <main>
        </main>
    )
}