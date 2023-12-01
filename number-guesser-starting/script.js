let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = (secret) => {
   secret = Math.floor(Math.random() * 10)
   return secret
};

//console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, secret) => {
  
  const humanDiff = Math.abs(secret - humanGuess);
  const computerDiff = Math.abs(secret - computerGuess);

  if (humanDiff <= computerDiff) {
    return true
  } else {
    return false
  }

};

//console.log(compareGuesses());

const updateScore = winner => {
  
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++  
  }
};

//console.log(updateScore());


const advanceRound = () => {
  currentRoundNumber++
}

//console.log(advanceRound());