


var gameWords = ["yemi", "is","very","cool", "man!"];

function randomWord(Words){
return Words[Math.floor(Math.random() * Words.length)];
//  randomWord(gameWords);
};

 function isCorrectGuess(word, letter){
     for(var i = 0; i < word.length; i++){
         if (word[i] === letter){
             return true;
         }
     }

     return false;
 }


 function getBlanks(guessingWord) {
    //return the answer array
    var answerArray = [];
    for (var i = 0; i < guessingWord.length; i++) {
         answerArray.push("_");
    };
    return answerArray
 }

 function fillBlanks (guessingWord, puzzleState, letter){
    // if letter is in guessingWord we want to replace the "_" in the puzzleState with the letter at the correct position.
    // if letter is in guessingWord
    for (var i = 0; i < guessingWord.length; i++){
        if (guessingWord[i] === letter) {
            // now we have to put the right guess into the correct spot of the empty array
            puzzleState[i] = letter;
        }
    }
    return puzzleState;
}

function setupRound (theWord){
    var round = {
        word: theWord,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: []
    };
    return round;
}

function updateRound (round, letter){

    if (isCorrectGuess(round.word, letter)){
        //something  
        round.puzzleState = fillBlanks(round.word, round.puzzleState, letter)
    } else {
        round.guessesLeft--;
        round.wrongGuesses.push(letter);
    }
    return round

}

function hasWon (puzzleState){
    if (puzzleState.indexOf("_") === -1){
        return true;
    }
    else{
    return false;
}
}
function hasLost (guessesLeft){
    if (guessesLeft < 1 ){
        return true;
    }
    else{
        return false;
    }
}

function isEndOfRound(round) {
    if (round.guessesLeft < 1) {
        return true
    }
    if (hasWon(round.puzzleState)){
        return true;
    } else{
        return false;
    }
}

// setupGame function

function setupGame (gameWords, wins, losses){
    var game = {
        words: gameWords,
        wins: wins,
        losses: losses,
        round: setupRound(randomWord(gameWords))

    };
    return game;
}

function startNewRound (game){
// check if the user has won or lost
       if (hasWon(game.round.puzzleState)) {
           game.wins++;
           alert('You just won the round and the word indeed was' + ' ' + game.round.word);
       } else {
       if (hasLost(game.round.guessesLeft)) {
           game.losses++;
           alert('Oops! Sorry, you lost the round. The word was' + ' ' + game.round.word);

       } 
       }
}
// Now that you can check if you should start a new round, you need to create a function to start a new round on the game. To do this, create a 
// function named startNewRound that takes a single argument: the game object. This function is going to update the round on the game object. 
// It should:


// Check to see if the user has won or lost, and update the number of wins and/or losses on the game accordingly.


// Trigger a single alert that informs the user if they've won or lost, and what the word was (the alert just needs to contain the word somewhere).

// For example: "You lost! The word was 'heart'. Try again! ❤️"



// Finally, it should update the game object to have a new round with a new random word.