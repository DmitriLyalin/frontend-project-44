#!/usr/bin/env node
import { greetUser } from "../src/cli.js";
import {
  gameRounds,
  askQuestion,
  getUserAnswer,
  checkAnswer,
} from "../src/index.js";

const minLength = 5;
const maxLength = 10;

const getRandomNumber = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

const getArithmeticSequence = (min, max) => {
  let arithmeticArray = [];
  const arrayLength = getRandomNumber(min, max);
  const step = getRandomNumber(min, max);
  const startElement = getRandomNumber(min, max);
  for (let i = 0; i <= arrayLength; i += 1) {
    let currentElement = startElement + i * step;
    arithmeticArray.push(currentElement);
  }
  return arithmeticArray;
};

const getReplacedNumber = (array, index) => {
  return array[index];
};
const transformArray = (array, index) => {
  const newArray = [...array];
  newArray[index] = "..";
  return newArray;
};
const app = () => {
  const userName = greetUser();
  console.log('What number is missing in the progression?')
  for (let round = 0; round < gameRounds; round += 1) {
    const arithmeticArray = getArithmeticSequence(minLength, maxLength);
    const index = getRandomNumber(0, arithmeticArray.length);
    const questionArray = transformArray(arithmeticArray, index);
    askQuestion(questionArray);
    const correctAnswer = getReplacedNumber(arithmeticArray, index).toString();
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

