
const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }  else {
        console.log('Error');
    }
};


const getComputerChoice = () =>{
    let number = Math.floor(Math.random()*3); // beteen 0 and 2 
    if(number === 0){
        return 'rock';
    } else if (number === 1){
        return 'paper';
    } else if (number === 2){
        return 'scissors';
    }
};

const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
        console.log('Tie');
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            console.log('Computer Win');
        } else {
            console.log('User Win');
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            console.log('Computer Win');
        } else {
            console.log('User Win');
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            console.log('Computer Win');
        } else {
            console.log('User Win');
        }
    }
    if(userChoice === 'bomb'){
        console.log('User Default Win');
    }
};

const playGame = () =>{
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('User Pick : ' + `${userChoice}`);
    console.log('Computer Choose : ' + `${computerChoice}`);
    determineWinner(userChoice,computerChoice);
};

playGame();


// console.log(determineWinner('rock','paper'));

// determineWinner('rock','paper');

// console.log(getComputerChoice());

// console.log(getUserChoice('Paper'));