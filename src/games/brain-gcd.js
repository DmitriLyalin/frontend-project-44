#!/usr/bin/env node
import { greetUser } from '../cli.js'
import {
  gameRounds,
  askQuestion,
  getUserAnswer,
  checkAnswer,
  getRandomNumber,
  getResult,
  range,
} from '../utils.js'
// Функция нахождения наибольшего общего делителя (НОД)
const findGreatestCommonDivider = (numberOne, numberTwo) => {
  let firstNumber = numberOne
  let secondNumber = numberTwo
  while (secondNumber !== 0) {
    let greatestCommonDivider = firstNumber % secondNumber
    firstNumber = secondNumber
    secondNumber = greatestCommonDivider
  }
  return firstNumber
}
// Основная функция игры "НОД"
const brainDivider = () => {
  const userName = greetUser()
  console.log('Find the greatest common divisor of given numbers.')

  for (let round = 0; round < gameRounds; round += 1) {
    const numberOne = getRandomNumber(range)
    const numberTwo = getRandomNumber(range)
    const questionExpression = `${numberOne} ${numberTwo}`
    askQuestion(questionExpression)
    const correctAnswer = findGreatestCommonDivider(numberOne, numberTwo)
    const userAnswer = getUserAnswer()
    const checkedAnswer = checkAnswer(userAnswer, correctAnswer.toString())
    const result = getResult(checkedAnswer, userName, userAnswer, correctAnswer) // Получаем результат (true/false)
    if (!result) {
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
export { brainDivider }
