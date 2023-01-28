var readline = require("readline-sync");

var chalk = require('chalk')



var score = 0;

var userName = readline.question(chalk.cyan.underline.bold("What's your name ? \n "));

var welcomeUser =   "Welcome ! "+userName + " let's check how well you know me"



console.log(chalk.bold.blue(welcomeUser));


var userHighScore = [
  {
    name:"Gurnav",
    score:10
  },
  {
    name:"varnu",
    score:9
  }
]


var questions = [
  {
    question:"Do I prefer coffee or tea ",
    answer:"tea"
  },
  
  {
    question:"where was i born ",
    answer:"home"
  },
  {
    question:"What is my childhood name",
    answer:"mintu"
  }
  ,{
    question:"What countries would I move to ",
    answer:"Paris"
  },
  {
    question:"what's my fav web series ",
    answer:"got"
  }
]




function play(question, answer){
  var userAnswer = readline.question(chalk.cyan.underline(question));
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("You are right ! "));
    score = score+2;
  }
  else{
    console.log(chalk.red("you are wrong ! "))
  }
  console.log(chalk.yellow("__________________________"))
  console.log(chalk.bold.magenta("your current score is ",score))
}



for(let i=0; i<questions.length; i++){
  let currentQuestion = questions[i].question + "\n";
  let currentAnswer = questions[i].answer;

  play(currentQuestion,currentAnswer)
}


console.log (chalk.green.bold("you final score",score))

for(let i=0; i<userHighScore.length;i++){
  var highScoreName = userHighScore[i].name;
  var highScore = userHighScore[i].score;

  console.log(chalk.bgGreen.white(highScoreName," : ",highScore))
}

console.log(chalk.blue("if your score is higher than Higher scorer send a screenshot i'll update it"))



function CheckScore(){

  console.log(highScoreName,highScore,userName,score)

   if(highScore<score){
     console.log(chalk.underline.bgCyanBright.bold(userName  + " is higher score than " + highScoreName))  
     console.log(chalk.black.bgWhite("congratulate  you brake the record"))
   }
}



CheckScore();