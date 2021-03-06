/*-----------Cached Element References--------- */
const button = [...document.querySelectorAll("#buttons > button")];
const message=document.getElementById("msg1");
const resetmsg= document.getElementById("reset-game");
const check=document.getElementById("check");
const music= document.getElementById("player");
/*-----Event Listener--------------*/
document.getElementById("buttons").addEventListener("click", function1);
document.getElementById("reset-game").addEventListener("click", reset);
document.querySelector("#check").addEventListener("click", backgroundmusic);


/*-------Chips object------- */
const chips = {
    '-1' : "yellow",
    '1' : "red",
    '0' : "white"
}
/*--------Variable declaration------- */
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
winner=null;
iterate();
}
function function1(evt){
    const coloumnIndex= button.indexOf(evt.target);
    if ( coloumnIndex === -1 || winner){
        return;
    }
    const column = board[coloumnIndex];
    const rowIndex=column.indexOf(0);
    console.log(column[rowIndex]);
    column[rowIndex]=player;
    player*=-1
    winner = findWinner(coloumnIndex, rowIndex);
    iterate();
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
///*--------Iterate through each coloumn and each cell in a coloumn---------------------- */
function iterate(){
board.forEach((coloumn, coloumnidx) => {
    coloumn.forEach((cell, cellidx) => {
    let color = document.getElementById(`c${coloumnidx}r${cellidx}`);
    color.style.backgroundColor= chips[cell];
    });
    button[coloumnidx].style.visibility = coloumn.includes(0) ? "visible" : "hidden";

});

turns++;

}

///*-----------Checking for winner----------------- */
function findWinner(){
    if (turns>=42){
        return winner = "T";
    }
    for(let colindex=0;  colindex<=6;  colindex++){
        winner= checkWinner( colindex);
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
    let winner=checkingVertical(column, rI) || checkingHorizontal(cI, rI) || checkingDiagonal(cI, rI) || checkingDiagonal2(cI, rI);
    if(winner) return winner;
}
return null;
}
//--------Winning Logic--------------//
function checkingVertical(column, rI){
    if(Math.abs(column[rI] + column[rI + 1] + column[rI + 2] + column[rI + 3]) === 4){
        return column[rI];
    }
    else{
            return null;
    }
}
//
function checkingHorizontal(coloumnIndex, roIndex){  
    if (coloumnIndex>3) return null;
    if(Math.abs(board[coloumnIndex][roIndex] + board[coloumnIndex + 1][roIndex] + board[coloumnIndex + 2][roIndex] + board[coloumnIndex + 3][roIndex]) === 4){
return board[coloumnIndex][roIndex];
    }else{
        return null;
    }
}
//

function checkingDiagonal(colid, rowid){  
    if (colid>3) return null;
if(Math.abs(board[colid][rowid] + board[colid + 1][rowid + 1] + board[colid + 2][rowid + 2] + board[colid + 3][rowid + 3]) === 4){
    return board[colid][rowid];
}
else{
    return null;
}
}
//

function checkingDiagonal2(cd, rd){
    if(cd >3)return null;
    if(Math.abs(board[cd][rd] + board[cd + 1][rd - 1] + board[cd + 2][rd - 2] + board[cd + 3][rd - 3]) === 4){
        return board[cd][rd];
    }
    else{
        return null;
    }
}
//

function backgroundmusic(){
    check.checked ? music.play() : music.pause();
}
