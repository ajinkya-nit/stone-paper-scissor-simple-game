let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const UserSocrePara = document.querySelector("#user-score");
const CompSocrePara = document.querySelector("#comp-score");

choices.forEach((choice) => {

    choice.addEventListener("click" , () => {
        const choiceID = choice.getAttribute("id");
        playGame(choiceID);
    })
})
const compChoice = () => {
    //take random value from rock, paper, scissor
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, choiceID, computerchoice) => {
    if(userWin) {
        userScore++;
        UserSocrePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${choiceID} beats ${computerchoice}!`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        CompSocrePara.innerText = compScore;
        console.log("You Loose!");
        msg.innerText = `You Loose! AI ${choiceID} beats ${computerchoice}!`;
        msg.style.backgroundColor = "red";
    }
}


let userWin = true;
const playGame = (choiceID,) => {
    console.log("user choice =" , choiceID);
    //generating computer choice
    const computerchoice = compChoice();
    console.log("computer choice =" , computerchoice );
    if(choiceID == computerchoice ) {
        //draw game
        drawGame();
        return;
    }
    else {
        if(choiceID === "rock"){
            userWin = computerchoice === "paper" ? false : true;
        }
        else if(choiceID === "paper") {
            userWin = computerchoice === "scissor" ? false : true;
        }
        else {
                userWin = computerchoice === "rock" ? false : true;
            }
    }

    showWinner(userWin ,choiceID, computerchoice);
}
