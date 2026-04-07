#!/usr/bin/env node
import { greetUser } from "../src/cli.js";
import {
  askQuestion,
  getUserAnswer,
  checkAnswer,
  getRandomNumber,
  gameRounds,
} from "../src/index.js";

const range = 100;

const isPrime = (number) => {
let prime 

  if (number === 2 || number === 3) {
    return "yes";
  }

if (number < 2 || number % 3 === 0) {
    return "no";
  }
  
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
     prime = 'no';
    } else {
       prime ='yes'
    }
return prime
  }
};
const app = () => {
  const userName = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let round = 0; round < gameRounds; round += 1) {
    const questionNumber = getRandomNumber(range);
    askQuestion(questionNumber);
    const correctAnswer = isPrime(questionNumber);
    const userAnswer = getUserAnswer();

    const checkedAnswer = checkAnswer(userAnswer, correctAnswer);
    if (checkedAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
app();

