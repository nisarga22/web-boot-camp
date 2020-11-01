let score =[0,1,2,3,4,5,6]


var team1={
    name: "BFC",
    runs: [],
    score: 0,

}
console.log(team1)

var team1={
    name: "CFC",
    runs: [],
    score: 0,

}

var turn;
window.onload = () => {
    selectTurn(); //deciding the toss
    updateButton();
}



//Es6 was writing functions
 selectTurn = () => {
     turn = Math.round(Math.random())+1;
     

 }
 //
 function updateButton() {
    var button= document.getElementById("bat-button");
    var result = document.getElementById("winner");

     result.style.visibility="";

     button.textContent =  turn === 1 ? team1.name : team2.name +"strike"
 }
    
