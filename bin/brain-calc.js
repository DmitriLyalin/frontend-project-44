#!/usr/bin/env node
import {greetUser} from '../src/cli.js'
import {askQuestion, getUserAnswer, checkAnswer} from '../src/index.js'

const getRandomNumber = (range) => {
let randomNumber =  Math.floor(Math.random() * range)
return randomNumber
}

const getRandomOperator = (operators) => {
const operator =operators[Math.floor(Math.random() * operators.length)]
return operator
}

const operators = ['+', '-', '*']
const range = 100

const composeExpression = ()=> {

const numberOne = getRandomNumber(range)
const numberTwo = getRandomNumber(range)
const sign = getRandomOperator(operators)


let expression
let result
switch (sign){
case '+':
 result =numberOne  + numberTwo
break
case '-':
result = numberOne - numberTwo
break
case '*':
 result = numberOne * numberTwo
break
}
 expression = `${numberOne} ${sign} ${numberTwo}`
 return  [expression, result]
}


const gameRounds = 3

const app = () => {
const userName = greetUser()
for (let round = 0; round < gameRounds; round += 1) {

const [questionExpression,questionNumber]  = composeExpression()
askQuestion(questionExpression)
const  correctAnswer  =(questionNumber).toString() 
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
