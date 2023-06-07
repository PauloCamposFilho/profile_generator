const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const answers = {};
const questions = ["What is your name? ", "What is an activity you like doing? ", "Which meal is your favorite? ", "What is your favorite sport? ", "What is your superpower? "];

const askQuestion = (index, callback) => {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      answers[questions[index]] = answer;
      askQuestion(index + 1, callback); // recursion to loop through all questions
    });
  } else {
    rl.close();
    callback();
  }
};

askQuestion(0, () => { // my function used as callback
  for (let key in answers) {
    console.log(key, answers[key]);
  }
});