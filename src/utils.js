import readlineSync from 'readline-sync'
// Количество раундов в игре
const gameRounds = 3
// Максимальное значение для случайных чисел
const range = 100
// Функция вывода вопроса пользователю
const askQuestion = (question) => {
  console.log('Question: ' + question)
  return question
}
// Функция получения ответа от пользователя через консоль
const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ')
  return userAnswer
}
// Функция проверки ответа пользователя
const checkAnswer = (answer, correctAnswer) => {
  return answer === correctAnswer
}
// Функция генерации случайного числа в диапазоне от min до max
const getRandomNumber = (max, min=0) => {
  let randomNumber = Math.floor(Math.random() * (max + 1 - min) + min)
  return randomNumber
}
// Функция обработки результата ответа
const  getResult = (result,userName,userAnswer,correctAnswer) => {
  
  if (result) {
    console.log('Correct!')
    return true
  }
  else{
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`)
    return  false
  }
}
export { gameRounds, askQuestion, getUserAnswer, checkAnswer, getRandomNumber, getResult, range }
