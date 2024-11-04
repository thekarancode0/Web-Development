let boxes=document.querySelectorAll(".box")
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let newgame=document.querySelector(".new-btn");
let turnO=true;
let count=0;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

boxes.forEach ((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="X";
            box.style.color="black";
            turnO=false;
        }
        else{
            box.innerText="O";
            box.style.color="red"
            turnO=true;
        }
        box.disabled = true;
        count++;
        
        let iswinner=checkWinner();
        if(count===9 && !iswinner){
          drawgame();
        }
    });
});

const drawgame =() =>{
    msg.innerText="Game Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

 const disableBoxes =() => {
    for(let box of boxes){
        box.disabled = true;
    }
 };
 const enableBoxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
 };
const showWinnner =(winner) =>{
    msg.innerText='Congratulations, Winner is ' + winner;
    msgContainer.classList.remove("hide");
    
    disableBoxes();
};

const checkWinner =() => {
    for(let pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if( pos1val!="" && pos2val!="" && pos3val!="") {
            if(pos1val===pos2val && pos2val===pos3val){
                showWinnner(pos1val);
                return true;
            }
        }  
    }
    
    
};



const resetgame =() =>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");

};

newgame.addEventListener("click",resetgame);