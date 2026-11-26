let boxex=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#newGame");
let winMess=document.querySelector("p");
let container=document.querySelector(".message");
let trunO=true //playerX and playerO
let cout="0";
 
const winningPatters=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{
    trunO=true;
    enableboxes();
    container.classList.add("hide");
}
const enableboxes=()=>{
    for(let box of boxex){
        box.disabled=false;
        box.innerText="";
    }
}
 
boxex.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunO){
            box.innerText="O";
            trunO=false;
        }
        else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true; 
        checkWinner();
    })
})
const disabledboxes=()=>{
    for(let box of boxex){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
     winMess.innerText=`Congratulation winner is ${winner}`;
     container.classList.remove("hide");
     disabledboxes();
}

const checkWinner=()=>{
    for(let pattern of winningPatters){
        let pos1=boxex[pattern[0]].innerText;
        let pos2=boxex[pattern[1]].innerText;
        let pos3=boxex[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1)
            }

        }
    }
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);