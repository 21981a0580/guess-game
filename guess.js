let gameResult=document.getElementById("gameResult");
let userInput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
function checkGuess(){
    let guessedNumber=parseInt(userInput.value);
    if(guessedNumber>randomNumber){
        gameResult.textContent="Too High Try Again";
        gameResult.style.backgroundColor="pink";

    }
    else if(guessedNumber<randomNumber){
        gameResult.textContent="Too Low Try Again";
        gameResult.style.backgroundColor="orange";
    }
    else if(guessedNumber==randomNumber){
        gameResult.textContent="Congratulations ";
        gameResult.style.backgroundColor="green";
        
    }
    else{
        gameResult.textContent="Invalid";
        gameResult.style.backgroundColor="red";
    }
}
