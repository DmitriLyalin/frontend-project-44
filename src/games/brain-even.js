#!/usr/bin/env node
import { greetUser } from '../cli.js'
import { getRandomNumber,gameEngine, range } from '../utils.js'

// Проверка на чётность
const isEven = (randomNumber) => {
  return randomNumber % 2 === 0 ? true : false
}
const isEvenNumber = () =>{
const  number = getRandomNumber(range)
const result = isEven(number)
 if (result) {
    return { question: number, correctAnswer: 'yes' }
  }

  return { question: number, correctAnswer: 'no' }
}


// Основная функция игры "Проверка на чётность"
const gameMessage ='Answer "yes" if the number is even, otherwise answer "no".'
gameEngine(gameMessage, isEvenNumber)

export {gameEngine}

