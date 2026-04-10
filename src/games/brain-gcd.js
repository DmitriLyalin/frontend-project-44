#!/usr/bin/env node
import { greetUser } from '../cli.js'
import {gameEngine} from '../index.js'
import {
  getRandomNumber,
  range,
} from '../utils.js'
// Функция нахождения наибольшего общего делителя (НОД)
const findGreatestCommonDivider = () => {
  const firstNumber = getRandomNumber(range)
  const secondNumber = getRandomNumber(range)
let numberOne = firstNumber
let numberTwo = secondNumber
  while (numberTwo !== 0) {
    let remainder = numberOne % numberTwo
    numberOne = numberTwo
    numberTwo = remainder
  }
  const correctAnswer = numberOne.toString()
 const questionSequence = `${firstNumber} ${secondNumber}`
 return {
    question: questionSequence,
    correctAnswer,
  }
}

// Основная функция игры "НОД"
const runBrainGreatestDivider = () => {
const gameMessage ='Find the greatest common divisor of given numbers.'
gameEngine(gameMessage, findGreatestCommonDivider)
}
export default runBrainGreatestDivider
