import readlineSync from 'readline-sync'

const askQuestion = (question) => {
console.log('Question: ' + question)
return question
}

const getUserAnswer = () => {
const userAnswer = readlineSync.question('Your answer: ')
return userAnswer
}


const  checkAnswer = (answer, correctAnswer) => {
 return answer === correctAnswer
}
export {askQuestion, getUserAnswer, checkAnswer}
