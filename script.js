let boxes=document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset-btn");
let newbtn =document.querySelector("#new-btn");
let msg =document.querySelector("#msg");
let msgcontainer =document.querySelector(".msg-container");
let turn0 = true;
let count=0;
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame=()=>{
  turn0=true;
  enableBoxes();
  msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turn0 === true){           //player 0
      box.innerText="0";
      box.style.color="rgb(106, 9, 9)";
      turn0 = false;

    }else{                        //player X
      box.innerText="X";
      box.style.color="rgb(10, 10, 92)";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();

    if(count === 9 && !isWinner){
      gameDraw();
    }

  });
});

const gameDraw=()=>{
  msg.innerText=`ITS A DRAW`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

const showWinner =(winner)=>{
  msg.innerText=`Congratulations Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner=()=>{
  for (let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val===pos2val && pos2val===pos3val){
        console.log("winneerrrr");
        showWinner(pos1val);
      }
    }
  }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


