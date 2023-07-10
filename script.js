// word array //
let words = [
  ["syntax"],
  ["glance"],
  ["policy"],
  ["height"],
  ["middle"],
  ["window"],
  ["bounty"],
  ["script"],
  ["carpet"],
  ["object"],
  ["branch"]
]

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


// query selectors //

let wordBox = document.querySelector(".word")
let checkButton = document.querySelector(".submit")
let scoreCount = document.querySelector(".score")
let textBox = document.querySelector(".textbox")
let resetButton = document.querySelector(".reset")

// const gameStart = () => {

//   let randWord = words[Math.floor(Math.random() * words.length)]
//   let wordArray = randWord.words.split("").join()
// }
// console.log(wordArray)

// // function scramble() {
// //   for (let i = words.length - 1; i > 0; i--)

// // }


// // gameStart()

let correctWord

const gameStart = () => {
  let randWord = words[Math.floor(Math.random() * words.length)];
  let wordArray = randWord.words.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordBox.innerText = wordArray.join("");
  correctWord = randWord.words.toLowerCase();;
  textBox.value = "";
  // inputField.setAttribute("maxlength", correctWord.length);
}
gameStart();
const checkWord = () => {
  let userGuess = textBox.value.toLowerCase();
  // if (!userWord) return alert("Please enter the word to check!");
  if (userGuess !== correctWord) return alert(`${userGuess} is not correct. Try again!`);
  alert(`You got it! ${correctWord} is the correct word`);
  gameStart();
}

let score = 0;
function increasePointsByTen() {
  score += 10;
  document.querySelector(".score").innerHTML = scoreCount
}

resetButton.addEventListener("click", gameStart);
checkButton.addEventListener("click", checkWord);

