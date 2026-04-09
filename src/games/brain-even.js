#!/usr/bin/env node
import { greetUser } from '../cli.js'
import { askQuestion, getUserAnswer, checkAnswer, getResult, gameRounds, range } from '../utils.js'
// Генерация случайного числа
const getRandomNumber = (range) => {
  let randomNumber = Math.floor(Math.random() * range)
  return randomNumber
}
// Проверка на чётность
const isEven = (randomNumber) => {
  return randomNumber % 2 === 0 ? 'yes' : 'no'
}


// Основная функция игры "Проверка на чётность"
const brainEven = () => {
  const userName = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
 // Запускаем цикл игры на заданное количество раундов
  for (let round = 0; round < gameRounds; round += 1) {
    const questionNumber = getRandomNumber(range)  
    askQuestion(questionNumber) /
    const correctAnswer = isEven(questionNumber) 
    const userAnswer = getUserAnswer() 
    const checkedAnswer = checkAnswer(userAnswer, correctAnswer) 
    const result =  getResult(checkedAnswer,userName,userAnswer,correctAnswer)  // Получаем результат (true/false) 
    if (!result) {
	return}
  }

console.log(`Congratulations, ${userName}!`)  
}
export { brainEven }
