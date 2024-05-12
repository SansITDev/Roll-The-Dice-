// HTML Elemnet
const rollbtn = document.getElementById("rollbtn")
const dice = document.getElementById("dice")

// Fun
console.log("Why Are You Here?")
console.log("It Seem like you understand a little bit of programing!")
console.log("Dont Break Anything Please(I Know You Gonna Broke Something For Fun??)")


function roll() {
  let value = Math.floor(Math.random() * 6) + 1
  if (value === 1) {
    dice.textContent = "You Got ⚀"
  }
  else if (value === 2) {
    dice.textContent = "You Got ⚁"
  }
  else if (value === 3) {
    dice.textContent = "You Got ⚂"
  }
  else if (value === 4) {
    dice.textContent = "You Got ⚃"
  }
  else if (value === 5) {
    dice.textContent = "You Got ⚄"
  }
  else if (value === 6) {
    dice.textContent = "You Got ⚅"
  }
  else {
    console.error("The number It Not Really Right(You dont got a number for 1 to 6(Error: 1))")
  }

}

rollbtn.addEventListener("click", roll)