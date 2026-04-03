import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".')


let result = 0;
const range = 100
const gameRounds = 3
let correctAnswer =''

const getRandomNumber = () => {
let randomNumber =  Math.floor(Math.random() * range)
return randomNumber
}
const isEven = (randomNumber) => {
if (randomNumber % 2 === 0) {
correctAnswer = 'yes'
return  correctAnswer
}
else {
correctAnswer = 'no'
return  correctAnswer
}
}

const  checkAnswer = (answer) => {
if  (answer === correctAnswer){
console.log('Correct!')
}
else {
console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.  "Let's try again, Bill!`)
return false
}
}



for (let winCount = 0; winCount < gameRounds; winCount += 1) {
result = getRandomNumber()
console.log ('Question: ' + result)
let answer = readlineSync.question('Your answer: ')
isEven(result)
let checkedAnswer = checkAnswer(answer)
if (checkedAnswer === false) {
break}
console.log('Congratulations,')
}


