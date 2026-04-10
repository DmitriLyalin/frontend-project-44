#!/usr/bin/env node
import { gameEngine } from '../index.js'
import {
  getRandomNumber,
} from '../utils.js'
// Минимальная и максимальная длина прогрессии
const minLength = 5
const maxLength = 10
// Функция генерации арифметической прогрессии
const getArithmeticSequence = () => {
  let arithmeticArray = []
  const arrayLength = getRandomNumber(minLength, maxLength)
  const step = getRandomNumber(minLength, maxLength)
  const startElement = getRandomNumber(minLength, maxLength)
  for (let i = 0; i < arrayLength; i += 1) {
    arithmeticArray.push(startElement + i * step)
  }
  const index = getRandomNumber(0, arithmeticArray.length - 1)
  const correctAnswer = arithmeticArray[index].toString()
  arithmeticArray[index] = '..'
  const questionSequence = arithmeticArray.join(' ')
  return {
    question: questionSequence,
    correctAnswer,
  }
}
const runBrainProgression = () => {
  const gameMessage = 'What number is missing in the progression?'
  gameEngine(gameMessage, getArithmeticSequence)
}
export default runBrainProgression
