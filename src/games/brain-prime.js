#!/usr/bin/env node
import { greetUser } from "../cli.js";
import {
  askQuestion,
  getUserAnswer,
  checkAnswer,
  getRandomNumber,
  gameRounds,
} from "../index.js";

const range = 100;
const isPrime = (number) => {
  let prime = 0;

  if (number === 2 || number === 3) {
    return "yes";
  }

  if (number < 2 || number % 3 === 0) {
    return "no";
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      prime += 1;
    }
  }
  return prime === 0 ? "yes" : "no";
};
const brainPrime = () => {
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
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export  {brainPrime}
