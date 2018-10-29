window.addEventListener('load', init);

//global variables 
let time = 5;
let score = 0;
let isPlaying;

//dom variables
const wordIput = document.querySelector('#word-input');
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
    'of ',
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
    //call countdown for every sec
    setInterval(countdown, 1000);
}

//Pick and show random word
function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // output a random word
    currentWord.innerHTML = words[randIndex];
}