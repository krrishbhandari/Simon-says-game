let gameSeq = [];
let userSeq =[];

let btns= ["one" , "two" ,"three" , "four"];

let started= false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
  btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
   }, 250);
}


function levelUp(){
userSeq = [];
level++ ;
h2.innerText = `Level ${level}`;

let randIdx = Math.floor(Math.random() * 3);// 0 , 1 , 2 , 3
let randColor = btns[randIdx];              // one , two , three , four
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(randColor);
btnFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
          setTimeout(levelUp, 1000);
       }
    }
    else{
        h2.innerHTML = `Game Over! <b>Your score is ${level-1} <br> Press any key to start again`;
        reset();
    }
}

function ButtonPress(){
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let AllButton = document.querySelectorAll(".btn");
for(btn of AllButton){
    btn.addEventListener("click" , ButtonPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}