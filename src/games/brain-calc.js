#!/usr/bin/env node
import { greetUser } from '../cli.js'
import {
  gameEngine,
  getRandomNumber,
range,
} from '../utils.js'

const getRandomOperator = (operators) => {
  const operator = operators[Math.floor(Math.random() * operators.length)]
  return operator
}

const operators = ['+', '-', '*']

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
  return { question: expression, correctAnswer: result.toString() }
}

const gameMessage ='What is the result of the expression?'
gameEngine(gameMessage, composeExpression)

export {gameEngine}

