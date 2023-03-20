#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const numberOfQuestions = 3;
let correctAnswersCounter = 0;

while (correctAnswersCounter < numberOfQuestions) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const isEven = number % 2 === 0;
  const expectedAnswer = isEven ? 'yes' : 'no';

  if (answer === expectedAnswer) {
    console.log('Correct!');
    correctAnswersCounter += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
}

console.log(`Congratulations, ${name}!`);