window.addEventListener('load', init);

// Levels
const levels = {
    easy: 5,
    medium: 3,
    hard:2
}

//to change level
const currentLevel = level.easy;

//global variables 
let time = currentLevel;
let score = 0;
let isPlaying;

//dom variables
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'raed',
    'tariq',
    'salah',
    'dog',
    'hat',
    'car',
    'hero',
    'java',
    'this',
    'is',
    'a',
    'test',
    'of',
    'random',
    'words',
    'investigating',
    'situations',
    'and',
    'breaking',
    'keyboards'
];

//Initializing game
function init(){
    // Load random word from array
    showWord(words);
    // Check word input
    wordInput.addEventListener('input', startMatch);
    //call countdown for every sec
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}
//check word match
function startMatch(){
    if(matchWord()){
        console.log('MATCH!!!');
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }
    //if score is -1 show 0
    if(score === -1){
        scoreDisplay.innerHTML= 0;
    }else{
        // increment score
        scoreDisplay.innerHTML = score;
    }
    
}
// matc to input
function matchWord(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'correct!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

//Pick and show random word
function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // output a random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
    // Check time is still running
    if(time > 0){
        // decrement time every sec
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    //display time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}