#!/usr/bin/env node
import { greetUser } from '../cli.js'
import {
  gameRounds,
  askQuestion,
  getUserAnswer,
  checkAnswer,
  getRandomNumber,
  getResult,
} from '../utils.js'

const getRandomOperator = (operators) => {
  const operator = operators[Math.floor(Math.random() * operators.length)]
  return operator
}

const operators = ['+', '-', '*']
const range = 100

const composeExpression = () => {
  const numberOne = getRandomNumber(range)
  const numberTwo = getRandomNumber(range)
  const sign = getRandomOperator(operators)

  let expression
  let result
  switch (sign) {
    case '+':
      result = numberOne + numberTwo
      break
    case '-':
      result = numberOne - numberTwo
      break
    case '*':
      result = numberOne * numberTwo
      break
  }
  expression = `${numberOne} ${sign} ${numberTwo}`
  return {expression, result}
}

const brainCalculator = () => {
  const userName = greetUser()
  console.log('What is the result of the expression?')
  for (let round = 0; round < gameRounds; round += 1) {
    const { expression: questionExpression,
            result: questionNumber} = composeExpression()
    askQuestion(questionExpression)
    const correctAnswer = questionNumber.toString()
    const userAnswer = getUserAnswer()
    const checkedAnswer = checkAnswer(userAnswer, correctAnswer)
    const result =  getResult(checkedAnswer,userName,userAnswer,correctAnswer) 
    if (!result) {
	return}
 

  }
  console.log(`Congratulations, ${userName}!`)
}
export { brainCalculator }
