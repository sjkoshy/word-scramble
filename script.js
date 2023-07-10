// word array //
let words = [
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


// query selectors //

const wordBox = document.querySelector(".word")
const textBox = document.querySelector(".textbox")
const checkButton = document.querySelector(".submit")
const scoreCount = document.querySelector(".score")
const resetButton = document.querySelector(".reset")
let correctWord = ""
let score = 0;

let gameStart = () => {
  let randWord = words[Math.floor(Math.random() * words.length)]

  let wordArray = randWord.split("")
  let randomIdx;

  for (let i = wordArray.length; i > 0; i--) {
    // randomIdx = Math.floor(Math.random() * i)
    // [wordArray[i], wordArray[randomIdx]] = [wordArray[randomIdx], wordArray[i]]
    randomIdx = Math.floor(Math.random() * i)
    let temp = wordArray[i]
    wordArray[i] = wordArray[randomIdx]
    wordArray[randomIdx] = temp
  }

  wordBox.innerText = wordArray.join("")
  correctWord = randWord
  textBox.value = ""
}

gameStart()

let checkWord = (e) => {
  e.preventDefault()
  let userGuess = textBox.value
  if (userGuess !== correctWord) {
    alert(`${userGuess} is not correct. Try again!`)
  } else {
    increaseScore()
    alert(`You got it! ${correctWord} is the correct word`)
  }
  gameStart();
}

function increaseScore() {
  score += 10;
  scoreCount.innerText = `score: ${score.toString().padStart(3, '0')}`
}

resetButton.addEventListener("click", gameStart);
checkButton.addEventListener("click", checkWord);

//split each word into arrays of characters//

// function splitToChar(wordArray) {
//   let charArray = []
//   for (let i = 0; i < wordArray.length; i++) {
//     let word = wordArray[i]
//     let wordCharacters = wordArray.split("")
//     charArray = charArray.concat(wordCharacters)
//   }
//   return charArray
// }

// const charArray = splitToChar(wordArray)
// console.log(charArray)

// const gameStart = () => {

//   let randWord = words[Math.floor(Math.random() * words.length)]
//   let wordArray = randWord.words.split("").join()
// }
// console.log(wordArray)

// // function scramble() {
// //   for (let i = words.length - 1; i > 0; i--)

// // }


// // gameStart()

