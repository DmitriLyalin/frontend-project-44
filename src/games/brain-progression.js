#!/usr/bin/env node
import { greetUser } from '../cli.js'
import {
  gameRounds,
  askQuestion,
  getUserAnswer,
  checkAnswer,
  getResult,
getRandomNumber
} from '../utils.js'
// Минимальная и максимальная длина прогрессии
const minLength = 5
const maxLength = 10
// Функция генерации арифметической прогрессии
const getArithmeticSequence = (min, max) => {
  let arithmeticArray = []
  const arrayLength = getRandomNumber(min, max)
  const step = getRandomNumber(min, max)
  const startElement = getRandomNumber(min, max)
  for (let i = 0; i < arrayLength; i += 1) {
    let currentElement = startElement + i * step
    arithmeticArray.push(currentElement)
  }
  return arithmeticArray
}
// Функция получения элемента по индексу
const getReplacedNumber = (array, index) => {
  return array[index]
}
// Основная функция игры "Арифметическая прогрессия"
const brainProgression = () => {
  const userName = greetUser()
  console.log('What number is missing in the progression?')
  for (let round = 0; round < gameRounds; round += 1) {
    const arithmeticArray = getArithmeticSequence(minLength, maxLength)
const index = getRandomNumber(0, arithmeticArray.length-1)
const correctAnswer = getReplacedNumber(arithmeticArray, index).toString()
arithmeticArray[index] = '..'    
const questionSequence = arithmeticArray.join(' ')    
    askQuestion(questionSequence)
    const userAnswer = getUserAnswer()
    const checkedAnswer = checkAnswer(userAnswer, correctAnswer)
    const result =  getResult(checkedAnswer,userName,userAnswer,correctAnswer)   // Получаем результат (true/false) 
    if (!result) {
	return}
  }
  console.log(`Congratulations, ${userName}!`)
}

export { brainProgression }
