const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const messages = document.getElementsByClassName("message");
// console.log(messages)
const tooHighMessage = document.getElementById("too-high");
const tooLowMessage = document.getElementById("too-low");
const maxGuessesMessage = document.getElementById("max-guesses");
const numberOfGuessesMessage = document.getElementById("number-of-guesses");
const correctMessage = document.getElementById("correct");

let targetNumber;
let attempts;
let maxNumberOfAttempts;

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", setup);

function setup() {
    targetNumber = getRandomNumber(1, 100);
    console.log(`target number: ${targetNumber}`);
  
    maxNumberOfAttempts = 5;
    attempts = 0
    
    submitButton.disabled = false;
    guessInput.disabled = false;
    hideAllMessages();
    resetButton.style.display = "none";
  }

setup();

function hideAllMessages() {
    for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
        //console.log(messages[elementIndex])
      messages[elementIndex].style.display = "none"; 
    }
  }

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * 101);
}


function checkValid(guess) {

    
}
function checkGuess() {
//console.log("Checkguess ran")
  const guess = parseInt(guessInput.value, 10);
  
  // när ska detta göras?
  attempts = attempts + 1;
  hideAllMessages();

  // skriv en funktion com heter checkValid(guess)

  // om denna funktio returnerar true så är guess ett heltal mellan 1 och 100
  // annars är det anv angett INTE giltigt

  if (checkValid(guess)) {
    // värdet är giltigt
  } else {
    // värdet är inte giltigt
  }
  if (guess === targetNumber) {
    //console.log("guess is equal to targetnumber")
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    correctMessage.style.display = "";
    submitButton.disabled = true;
    guessInput.disabled = true;
  } else {

    if (guess < targetNumber) {
        //console.log("guess !== targetNumber is true and guess < targetNumber is true")
      tooLowMessage.style.display = "";
    } 
    
    else {
        //console.log("guess !== targetNumber is true but guess < targetNumber is false")
      tooHighMessage.style.display = ""; 
    }
    const remainingAttempts = maxNumberOfAttempts - attempts;
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  if ((attempts === maxNumberOfAttempts) && (guess !== targetNumber)) {
    maxGuessesMessage.style.display = "";
    submitButton.disabled = true;
    guessInput.disabled = true;
  }
  guessInput.value = "";
  resetButton.style.display = "";
}


