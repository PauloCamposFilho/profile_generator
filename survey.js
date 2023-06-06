const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const answers = {};
// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();
// });

rl.question("What is your name? ", (name) => {
  answers.name = name;
  rl.question("What is an activity you like doing? ", (hobby) => {
    answers.hobby = hobby;
    rl.question("What do you listen to while doing that? ", (music) => {
      answers.music = music;
      rl.question("Which meal is your favorite? ", (meal) => {
        answers.meal = meal;
        rl.question("Which sport is your favorite? ", (sport) => {
          answers.sport = sport;
          rl.question("What is your superpower? ", (superPower) => {
            answers.superPower = superPower;
            console.log("Your profile information: ");
            // for(let key in answers) {
            //   console.log(`${key}: ${answers[key]}`);
            // }
            console.log(`Hi there, ${answers.name}!`);
            console.log(`You are interested in ${answers.hobby}, and you like listening to ${answers.music}.`);
            console.log(`Your favorite meal is ${answers.meal}`);
            console.log(`You like ${answers.sport}, and your superpower is ${answers.superPower}`);
            console.log("Thank you!");
            rl.close();
          });
        });
      });
    });
  });
});

