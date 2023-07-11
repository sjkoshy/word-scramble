// word array //
let original = [
  "syntax",
  "glance",
  "policy",
  "height",
  "middle",
  "window",
  "bounty",
  "script",
  "carpet",
  "object",
  "branch"
]

let words = [
  ...original
]


// query selectors //

const wordBox = document.querySelector(".word")
const textBox = document.querySelector(".textbox")
const checkButton = document.querySelector(".submit")
const scoreCount = document.querySelector(".score")
const resetButton = document.querySelector(".reset")
const gameMessage = document.querySelector(".game-message")
let correctWord = ""
let score = 0

let gameStart = () => {
  let randWord = words.splice([Math.floor(Math.random() * words.length)], 1)
  console.log(randWord)
  let wordArray = randWord[0].split("")
  let randIndex;
  for (let i = wordArray.length; i > 0; i--) {
    // randomIdx = Math.floor(Math.random() * i)
    // [wordArray[i], wordArray[randomIdx]] = [wordArray[randomIdx], wordArray[i]]
    randIndex = Math.floor(Math.random() * i)
    let temp = wordArray[i]
    wordArray[i] = wordArray[randIndex]
    wordArray[randIndex] = temp
  }

  wordBox.innerText = wordArray.join("")
  correctWord = randWord[0]
  textBox.value = ""
}

gameStart()

let checkWord = (e) => {
  e.preventDefault()
  let userGuess = textBox.value
  if (userGuess !== correctWord) {
    // alert(`${userGuess} is not correct. Try again!`)
    gameMessage.innerText = (`"${userGuess}" is not correct. Try again!`)
    words.push(correctWord)
  } else {
    // alert(`You got it! ${correctWord} is the correct word.`)
    gameMessage.innerText = (`You got it! "${correctWord}" is the correct word.`)
    increaseScore()
  }
  gameStart();
}

function increaseScore() {
  score += 10;
  scoreCount.innerText = `score: ${score.toString().padStart(3, '0')}`
  if (score == 100) {
    gameMessage.innerText = (`Great job! You won the game!`)
    // alert(`Great job! You won the game!`)
    reset()
  }
}

function reset() {
  words = [...original]
  score = 0
  scoreCount.innerText = `score: ${score.toString().padStart(3, '0')}`
}

resetButton.addEventListener("click", reset)
checkButton.addEventListener("click", checkWord)


