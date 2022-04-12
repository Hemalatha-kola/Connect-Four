const button = [...document.querySelectorAll("#buttons > button")];
const message=document.getElementById("msg1");
const resetmsg= document.getElementById("reset-game");
const check=document.getElementById("check");
const music= document.getElementById("player");

document.getElementById("buttons").addEventListener("click", function1);
document.getElementById("reset-game").addEventListener("click", reset);

const chips = {
    '-1' : "yellow",
    '1' : "red",
    '0' : "white"
}

 let board;
 let player;
 let turns;
 let winner;


reset();

function reset(){
 board = [
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0]];

 player=1;
 turns=0;
 winner=0;
 func2();
}
function function1(evt){
    let coloumnIndex= button.indexOf(evt.target);
    //console.log(button.indexOf(evt.target));
    if ( coloumnIndex === -1 || winner){
        return;
    }
    let column = board[coloumnIndex];
    
    //console.log(board[coloumnIndex]);
    let rowIndex=column.indexOf(0);
   
        
    
    column[rowIndex]=player;
    player*=-1
   
    winner = findWinner(coloumnIndex, rowIndex);
    func2();
      if(winner ==="T"){
          msg1.innerText = `It's a Tie!`
      }
      else if(winner){
         msg1.innerText = `${winner === 1 ? 'Red' : 'Yellow'} Wins!`;
      }
      else{
        message.innerHTML= `Now It's ${player===1 ? "Red" : "Yellow"} 's turn`;
      }
}
//
function func2(){
board.forEach((coloumn, coloumnidx) => {

    coloumn.forEach((cell, cellidx) => {

       
       let color = document.getElementById(`c${coloumnidx}r${cellidx}`);
       color.style.backgroundColor= chips[cell];
    });
     button[coloumnidx].style.visibility = coloumn.includes(0) ? "visible" : "hidden";

});

turns++;
resettxt();
}

//

function findWinner(){
    if (turns>=42){
        return winner = "T";
    }
    for(let colIndex=0; colIndex<6; colIndex++){
        winner= checkWinner(colIndex);
        if(winner){
            break;
        }
       
    }
    return winner;
}
//

function checkWinner(cI){
 const column = board[cI];

for(let rI=0; rI< column.length; rI++){
    let winner=vertical(column, rI) ;
    if(winner) return winner;
}
 return null;//otherwise it returns undefined.
}
//
function vertical(column, rI){
       if(Math.abs(column[rI] + column[rI + 1] + column[rI + 2] + column[rI + 3]) === 4){
           return column[rI];
       }
       else{
              return null;
       }
}



//
function resettxt(){
    if(turns>=42){
        resetmsg.innerText = "Reset";
      }else{
          resetmsg.innerText = "Play";
      }
}