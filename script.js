
// Player Point
let Player1Point = 0
let Player2Point = 0

// HTML And Var Element
let PlayerP = document.getElementById("player")
let startbtn = document.getElementById("startbtn")
let PlayerRole = document.getElementById("playerrole") 
let dicenum = document.getElementById("dice")
let Win = document.getElementById("win")
let counter = 0
// Dice Emoji : ⚀⚁⚂⚃⚄⚅ 

// The Game Functions
   
   function turn1() {
    PlayerRole.textContent = "Player 1 Turn"
    nump1 = Math.floor(Math.random() * 6) + 1
    dicenum.textContent = "Player 1 Got : " + nump1
   }

   function turn2() {
    PlayerRole.textContent = "Player 2 Turn"
    nump2 = Math.floor(Math.random() * 6) + 1
    dicenum.textContent = "Player 2 Got : " + nump2
   }

   function result() {
    if (nump1 > nump2) {
      Player1Point = Player1Point + 1
      win.textContent = "Player 1 Win"  
      PlayerP.textContent = "Player 1 : " + Player1Point + " | Player 2 : " + Player2Point
    }
    else if (nump1 === nump2) {
      Player1Point = Player1Point + 1
      Player2Point = Player2Point + 1
      win.textContent = "Tie"
      PlayerP.textContent = "Player 1 : " + Player1Point + " | Player 2 : " + Player2Point  
    }
    else {
      Player2Point = Player2Point + 1
      win.textContent = "Player 2 Win" 
      PlayerP.textContent = "Player 1 : " + Player1Point + " | Player 2 : " + Player2Point
    }

    rollbtn.addEventListener('click', function() {
        if (counter === 0) {
            StartGame()
        } 
        else if (counter === 1) {
            turn1();
        } else if (counter === 2) {
            turn2();
        } else if (counter === 3) {
            result();
            counter = 1;
        }})  
        counter++; 
   }

   



startbtn.onclick = function StartGame() {
    PlayerP.textContent = "Player 1 : " + Player1Point + " | Player 2 : " + Player2Point
    startbtn.remove()
    rollbtn = document.createElement("BUTTON")
    rollbtn.id = "rollbtn"
    rollbtn.textContent = "Roll 🎲"
    document.body.appendChild(rollbtn)
}

