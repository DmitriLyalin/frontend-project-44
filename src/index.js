import readlineSync from 'readline-sync'

const gameRounds = 3

const askQuestion = (question) => {
  console.log('Question: ' + question)
  return question
}

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ')
  return userAnswer
}

const checkAnswer = (answer, correctAnswer) => {
  return answer === correctAnswer
}

const getRandomNumber = (range) => {
  let randomNumber = Math.floor(Math.random() * range)
  return randomNumber
}

export { gameRounds, askQuestion, getUserAnswer, checkAnswer, getRandomNumber }
