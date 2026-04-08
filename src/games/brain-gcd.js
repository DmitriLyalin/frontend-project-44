#!/usr/bin/env node
import { greetUser } from "../cli.js";
import {
  gameRounds,
  askQuestion,
  getUserAnswer,
  checkAnswer,
  getRandomNumber,
} from "../index.js";

const findGreatestCommonDivider = (numberOne, numberTwo) => {
  while (numberTwo !== 0) {
    let gcd = numberOne % numberTwo;
    numberOne = numberTwo;
    numberTwo = gcd;
  }
  return numberOne;
};

const brainDivider = () => {
  const range = 100;
  const userName = greetUser();
  console.log("Find the greatest common divisor of given numbers.");

  for (let round = 0; round < gameRounds; round += 1) {
    const numberOne = getRandomNumber(range);
    const numberTwo = getRandomNumber(range);
    const questionExpression = `${numberOne} ${numberTwo}`;
    askQuestion(questionExpression);
    const correctAnswer = findGreatestCommonDivider(numberOne, numberTwo);
    const userAnswer = getUserAnswer();
    const checkedAnswer = checkAnswer(userAnswer, correctAnswer.toString());
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
export {brainDivider}
