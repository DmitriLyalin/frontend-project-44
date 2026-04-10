#!/usr/bin/env node
import { greetUser } from '../cli.js'
import {gameEngine} from '../index.js'
import {
  getRandomNumber,
  range,
} from '../utils.js'
// Функция проверки: является ли число простым
const isPrime = (number)=> {
  if (number < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return  false
    }
  }
 return true
}

const isPrimeNumber = () => {
const number = getRandomNumber(range)
const result =  isPrime(number)
  if (result) {
    return { question: number, correctAnswer: 'yes' }
  }

  return { question: number, correctAnswer: 'no' }
}

// Основная функция игры "Простое число"
const runBrainPrime = () => {
const gameMessage ='Answer "yes" if given number is prime. Otherwise answer "no".'
gameEngine(gameMessage, isPrimeNumber)
}
export default runBrainPrime
