#!/usr/bin/env node
import { greetUser } from '../cli.js'
import {
  askQuestion,
  getUserAnswer,
  checkAnswer,
  getRandomNumber,
  gameRounds,
  getResult,
 range,
} from '../utils.js'
 // Функция проверки: является ли число простым
const isPrime = (number) => {
  if (number < 2) {
    return 'no'
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
     if (number % i === 0){
            return 'no' 
  }
}
    return 'yes'
}
// Основная функция игры "Простое число"
const brainPrime = () => {
  const userName = greetUser()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  for (let round = 0; round < gameRounds; round += 1) {
   const questionNumber = getRandomNumber(range)
    askQuestion(questionNumber)
    const correctAnswer = isPrime(questionNumber)
    const userAnswer = getUserAnswer()
    const checkedAnswer = checkAnswer(userAnswer, correctAnswer)
    const result =  getResult(checkedAnswer,userName,userAnswer,correctAnswer)  // Получаем результат (true/false)
    if (!result) {
	return}
  }
  
  console.log(`Congratulations, ${userName}!`)
}
export { brainPrime }
