let readlineSync = require('readline-sync');

const dataBase = {
    data: [
        {
          question: `let a = {}, b = {}
    console.log(a == b)
    console.log(a === b)`,
          options: {
            a: "false false",
            b: "false true",
            c: "true false",
            d: "true true"
          },
          correctAnswer: "a"
        },
        {
          question: "Object.assign(targer, source) creates which type of copy?",
          options: {
            a: "Deep Copy",
            b: "Shallow Copy",
            c: "Nested Copy",
            d: "Creates a new reference"
          },
          correctAnswer: "b"
        },
        {
          question: "Is method chaining possible with forEach?",
          options: {
            a: "Yes",
            b: "No"
          },
          correctAnswer: "b"
        }
      ]
}

const LeaderBoard = [
    {
        userName: "Prakash",
        score: 1,
    },
    {
        userName: "Abhishek",
        score: 2,
    },
    {
        userName: "Rishab",
        score: 0
    }
]

let userName = readlineSync.question("What is your Name");
let score = 0;

function ShowLeaderBoard( userName,score){
    let newUser = {userName, score};
    let updatedLeaderBoard = LeaderBoard.push(newUser);
    LeaderBoard.sort((a,b)=> b.score - a.score);
    console.log(LeaderBoard);
}


function checkUserAnswer(userAnswer, correctAnswer){
 if(userAnswer=== correctAnswer){
    console.log("answer is correct");
    score++;
 }
 else{
    console.log(`correct answer is ${correctAnswer}`);
 }
}

function showQuestionsAndOptions(){
    for(let i=0; i< dataBase.data.length ; i++){
        console.log(`\n${dataBase.data[i].question}`);
        for(let key in dataBase.data[i].options){
            console.log(`${key} :${dataBase.data[i].options[key]}`);
        }
       let userAnswer = readlineSync.question("Choose the answer from these options (a/b/c/d)").toLocaleLowerCase();
       checkUserAnswer(userAnswer, dataBase.data[i].correctAnswer);
    }
    console.log({ userName,score});
    ShowLeaderBoard(userName, score)
}

showQuestionsAndOptions();