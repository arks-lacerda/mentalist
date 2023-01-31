//Variáveis
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let input = document.querySelector(".input")
let button = document.querySelector(".button")

//button.disabled = true;

let randomNumber =  Math.round(Math.random() * 1001)
console.log(randomNumber)
let xAttempts = 1

// Events

input.addEventListener("change", stateHandle)

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
   //console.log(e.key) descobrir a tecla
    if(e.key == "Enter" && screenOne.includes('hide')) {
        handleResetClick()
    }
})

//função callback
function handleTryClick(event) {
    event.preventDefault() //não faça o padrão desse evento

    const inputNumber = document.querySelector("#inputNumber")
    numberIsGreaterOrLess(inputNumber)
    
    if(Number(inputNumber.value) == randomNumber) {
        screenTwo.querySelector("h2").innerText = `Got it right in ${xAttempts} tries!`
    } else if(Number(inputNumber.value) < 1 || Number(inputNumber.value) > 1000) {
        alert('Apenas Números de 1 até 1000')
    }
    stateHandle()
    inputNumber.value = ""
    xAttempts++
}

function stateHandle() {
    if (document.querySelector(".input").value === "") {
        button.disabled = true
    } else { 
        button.disabled = false
    }
}

function handleResetClick() {
    stateHandle()
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10001)
}

function toggleScreen() {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}

function numberIsGreaterOrLess() {
  if (input.value < randomNumber) {
    alert('You missed! The number is bigger.')
  } else if (input.value == randomNumber) {
    toggleScreen()
  } else {
    alert('You missed! The number is smaller')
  }
  console.log(randomNumber)
  console.log(input.value)
}



//
//you missed! The number is smaller