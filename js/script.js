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
    const coloumnIndex= button.indexOf(evt.target);
    //console.log(button.indexOf(evt.target));
    if ( coloumnIndex === -1 || winner){
        return;
    }
    const column = board[coloumnIndex];
    
    //console.log(board[coloumnIndex]);
   const rowIndex=column.indexOf(0);
   
        
    
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

}

//

function findWinner(){
    if (turns>=42){
        return winner = "T";
    }
    for(let coloumnIndex=0; coloumnIndex<6; coloumnIndex++){
        winner= checkWinner(coloumnIndex);
        if(winner){
            break;
        }
       
    }
    return winner;
}
//

function checkWinner(coloumnIndex){
 const column = board[coloumnIndex];

for(let rowIndex=0; rowIndex< column.length; rowIndex++){
    let winner=vertical(column, rowIndex) ||horizontal(coloumnIndex, rowIndex);
    if(winner) return winner;
}
 return null;//otherwise it returns undefined.
}
//
function vertical(column, rowIndex){
       if(Math.abs(column[rowIndex] + column[rowIndex + 1] + column[rowIndex + 2] + column[rowIndex + 3]) === 4){
           return column[rowIndex];
       }
       else{
              return null;
       }
}
//
function horizontal(coloumnIndex, rowIndex){
    if (coloumnIndex>3) return null;
    if(Math.abs(board[coloumnIndex][rowIndex] + board[coloumnIndex + 1][rowIndex] + board[coloumnIndex + 2][rowIndex] + board[coloumnIndex + 3][rowIndex]) === 4){
return board[coloumnIndex][rowIndex];
    }else{
        return null;
    }
}
