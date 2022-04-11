const button = [...document.querySelectorAll("#buttons > button")];
const message=document.getElementById("msg1");
const resetmsg= document.getElementById("reset-game");
const check=document.getElementById("check");
const music= document.getElementById("player");

document.getElementById("buttons").addEventListener("click", function1);


const chips = {
    '-1' : "yellow",
    '1' : "red",
    '0' : "white"
}

let board = [
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0]];

let player=1;
let turns=0;
let winner=0;

function function1(evt){
    let coloumnindex= button.indexOf(evt.target);
    //console.log(button.indexOf(evt.target));
    if ( coloumnindex === -1){
        return;
    }
    let column = board[coloumnindex];
    
   // console.log(board[coloumnindex]);
    let rowindex=column.indexOf(0);
   
        
    
    column[rowindex]=player;
    player*=-1
   message.innerHTML= `Now It's ${player===1 ? "Red" : "Yellow"} 's turn`
    
    func2();

}

function func2(){
board.forEach((coloumn, coloumnidx) => {

    coloumn.forEach((cell, cellidx) => {

       
       let color = document.getElementById(`c${coloumnidx}r${cellidx}`);
       color.style.backgroundColor= chips[cell];
    });
     button[coloumnidx].style.visibility = coloumn.includes(0) ? "visible" : "hidden";

});
reset();
turns++;
}
function reset(){
    if(turns>=42){
      resetmsg.innerText = "Reset";
    }else{
        resetmsg.innerText = "Play";
    }
}