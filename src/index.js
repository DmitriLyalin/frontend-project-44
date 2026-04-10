import readlineSync from 'readline-sync'
import {greetUser} from './cli.js'
// Функция реализации игр
const gameEngine = (gameMessage, getGameData) => {
  const userName = greetUser()
  console.log(gameMessage)
  for (let round = 0; round < 3; round += 1) {
    const { question, correctAnswer } = getGameData()
    console.log('Question: ' + question)
    const userAnswer =  readlineSync.question('Your answer: ')
	if (userAnswer !==correctAnswer)  {
   console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${userName}!`)
      return
}
else {
console.log ('Correct!')
}
}
  console.log(`Congratulations, ${userName}!`)
}
export {gameEngine}
