#!/usr/bin/env node
import {greetUser} from '../src/cli.js'
import {askQuestion, getUserAnswer, checkAnswer} from '../src/index.js'

const getRandomNumber = (range) => {
let randomNumber =  Math.floor(Math.random() * range)
return randomNumber
}

const isEven = (randomNumber) => {
 return randomNumber % 2 === 0 ? 'yes' : 'no'
}

const range = 100
const gameRounds = 3

const app = () => {
const userName = greetUser()
for (let round = 0; round < gameRounds; round += 1) {

const questionNumber = getRandomNumber(range)
askQuestion(questionNumber)
const  correctAnswer  =  isEven(questionNumber)
const userAnswer = getUserAnswer()

const checkedAnswer = checkAnswer(userAnswer,correctAnswer)
if (checkedAnswer) {
console.log('Correct!')
}

else {
console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
return
}
}
console.log(`Congratulations, ${userName}!`)

}
app()
