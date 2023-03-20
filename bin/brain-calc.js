#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operations.length - 1);
  return operations[randomIndex];
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let correctAnswersCgount = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const operation = getOperation();
    const question = `Question: ${number1} ${operation} ${number2}`;

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculate(number1, number2, operation);
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playCalcGame;