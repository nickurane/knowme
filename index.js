

var readlinesyn = require("readline-sync");

const chalk = require('chalk');

var username = readlinesyn.question((chalk.yellowBright("hey! may i know your name:  ".toUpperCase())));

console.log(chalk.green.bold("HI  " + "`"+username+"`".toUpperCase()));
console.log(chalk.yellowBright("lets play the game of how well you know nikhil".toUpperCase()));

var question;
var ans;
var u_ans;
var score = 0;
var questions = [

  {
    question: "what is my age",
    ans: "22"
  },
  {
    question: "what is my favourite cartoon ",
    ans: "sinchan"
  },
  {
    question: "where do i live",
    ans: "mangasuli"
  },
  {
    question: "what is my fav color",
    ans: "blue"
  },
  {
    question: "what is my fav sub when i am in 3rd sem",
    ans: "c"
  },
]
display()
function display() {
  for (let i = 0; i < questions.length; i++) {
    console.log("---------------------------------------------")
    console.log(chalk.blue(questions[i].question.toUpperCase() + " ?"));
    u_ans = readlinesyn.question(" ");
    play(questions[i].question, u_ans)
  }
}


function play(question, u_ans) {
  let u_question = question;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].question === u_question)
      if (questions[i].ans === u_ans) {
        console.log("---------------------------------------------")
        console.log(chalk.green("yay u get it right  🥳  ".toUpperCase()));
        score = score + 1;
        console.log(chalk.green("SCORE: " + score))
        console.log("---------------------------------------------")


      }
      else {
        console.log("---------------------------------------------")
        console.log(chalk.red.dim("u make me sad  😔   ".toUpperCase()));
        console.log(chalk.red.dim("SCORE: " + score))
        console.log("------------------------------------------------")

      }
  }
  return;

}
console.log("------------------------------------"); console.log("YOUR TOTAL SCORE IS: " + score);
console.log("------------------------------------");
console.log("HIGHSCORE")
console.log("------------------------------------------------------");
console.log("username   ");

console.log("------------------------------------------------------");

var u, s;

var users = [{ u: "Nikhil", s: "5" }]
for (let k = 0; k < users.length; k++) {
  console.log(users[k].u, users[k].s)
}

console.log("note:hey if u the one who beat the highscore")
  console.log("or closer to it please send me a screenshot")

