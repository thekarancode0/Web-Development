let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let result = document.querySelector(".result");
let showComputer = document.querySelector(".com");
let showUser = document.querySelector(".user");
let Score1 = document.querySelector('.userScore')
let Score2 = document.querySelector('.comScore');

let userScore = 0;
let comScore = 0;



let choices = ["Rock","Paper","Scissor"];


let userChoise;
let computerChoise;

rock.addEventListener('click',()=>{
    userChoise=0;
    gamePlay();
    console.log("User : " + choices[userChoise])
})
paper.addEventListener('click',()=>{
    userChoise=1;
    gamePlay()
    console.log("User : " + choices[userChoise])
})

scissor.addEventListener('click',()=>{
    userChoise=2;
    gamePlay();
    console.log("User : " + choices[userChoise])
})


function computer(){
    computerChoise = (Math.floor(Math.random()*3));
    console.log("computer choose-->" + choices[computerChoise]);
}

function gamePlay(){
    computer();

    showComputer.innerHTML = `Computer Choise : ${choices[computerChoise]}`;
    showUser.innerHTML = `Your choise: ${choices[userChoise]}`;
    if(computerChoise === userChoise) result.innerHTML = "Draw!!!";

    else if(computerChoise === 0 && userChoise === 1 ||
            computerChoise === 1 && userChoise === 2 ||
            computerChoise === 2 && userChoise === 0)
            {   
                result.innerHTML = "User wins"  
                userScore+=1;
                Score1.innerHTML = `Your: ${userScore}`;
            }
    else{
        result.innerHTML = "Computer Win"
        comScore+=1;
        Score2.innerHTML = `Computer: ${comScore}`;
    }
   
}