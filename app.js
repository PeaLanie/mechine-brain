// These are the two fuctions that open and close the sidebar ---------------------------

function openNav() {
    document.getElementById("side-nav").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
}

function closeNav() {
    document.getElementById("side-nav").style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
}

// --------------------------- End --------------------------------


function randomN(min, max, inc) {
    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
}



// These are the fuctions that display the numbers on the page -----------------------------

function basic() {
var randOne = Math.floor(Math.random() * 9) + 1;
var randTwo = Math.floor(Math.random() * 9) + 1;
var randThree = Math.floor(Math.random() * 9) + 1;
var randFour = Math.floor(Math.random() * 9) + 1;
var randFive = Math.floor(Math.random() * 9) + 1;

var indexOne = document.getElementById('basic1');
var indexTwo = document.getElementById('basic2');
var indexThree = document.getElementById('basic3');
var indexFour = document.getElementById('basic4');
var indexFive = document.getElementById('basic5');

indexOne.innerHTML = randOne;
indexTwo.innerHTML = randTwo;
indexThree.innerHTML = randThree;
indexFour.innerHTML = randFour;
indexFive.innerHTML = randFive;
}
basic();


function beginner() {
    var randOne = randomN(10, 90, 10);
    var randTwo = randomN(10, 90, 10);
    var randThree = randomN(10, 90, 10);
    var randFour = randomN(10, 90, 10);
    var randFive = randomN(10, 90, 10);
    
    var indexOne = document.getElementById('beginner1');
    var indexTwo = document.getElementById('beginner2');
    var indexThree = document.getElementById('beginner3');
    var indexFour = document.getElementById('beginner4');
    var indexFive = document.getElementById('beginner5');
    
    indexOne.innerHTML = randOne;
    indexTwo.innerHTML = randTwo;
    indexThree.innerHTML = randThree;
    indexFour.innerHTML = randFour;
    indexFive.innerHTML = randFive;
}
beginner();


function intermediate() {
    var randOne = Math.floor(Math.random() * 9) + 1;
    var randTwo = Math.floor(Math.random() * 9) + 1;
    var randThree = Math.floor(Math.random() * 9) + 1;
    var randFour = Math.floor(Math.random() * 9) + 1;
    var randFive = Math.floor(Math.random() * 9) + 1;
    
    var indexOne = document.getElementById('basic1');
    var indexTwo = document.getElementById('basic2');
    var indexThree = document.getElementById('basic3');
    var indexFour = document.getElementById('basic4');
    var indexFive = document.getElementById('basic5');
    
    indexOne.innerHTML = randOne;
    indexTwo.innerHTML = randTwo;
    indexThree.innerHTML = randThree;
    indexFour.innerHTML = randFour;
    indexFive.innerHTML = randFive;
}


function advanced() {
    var randOne = Math.floor(Math.random() * 9) + 1;
    var randTwo = Math.floor(Math.random() * 9) + 1;
    var randThree = Math.floor(Math.random() * 9) + 1;
    var randFour = Math.floor(Math.random() * 9) + 1;
    var randFive = Math.floor(Math.random() * 9) + 1;
    
    var indexOne = document.getElementById('basic1');
    var indexTwo = document.getElementById('basic2');
    var indexThree = document.getElementById('basic3');
    var indexFour = document.getElementById('basic4');
    var indexFive = document.getElementById('basic5');
    
    indexOne.innerHTML = randOne;
    indexTwo.innerHTML = randTwo;
    indexThree.innerHTML = randThree;
    indexFour.innerHTML = randFour;
    indexFive.innerHTML = randFive;
}



function master() {
    var randOne = Math.floor(Math.random() * 9) + 1;
    var randTwo = Math.floor(Math.random() * 9) + 1;
    var randThree = Math.floor(Math.random() * 9) + 1;
    var randFour = Math.floor(Math.random() * 9) + 1;
    var randFive = Math.floor(Math.random() * 9) + 1;
    
    var indexOne = document.getElementById('basic1');
    var indexTwo = document.getElementById('basic2');
    var indexThree = document.getElementById('basic3');
    var indexFour = document.getElementById('basic4');
    var indexFive = document.getElementById('basic5');
    
    indexOne.innerHTML = randOne;
    indexTwo.innerHTML = randTwo;
    indexThree.innerHTML = randThree;
    indexFour.innerHTML = randFour;
    indexFive.innerHTML = randFive;
}


function expert() {
    var randOne = Math.floor(Math.random() * 9) + 1;
    var randTwo = Math.floor(Math.random() * 9) + 1;
    var randThree = Math.floor(Math.random() * 9) + 1;
    var randFour = Math.floor(Math.random() * 9) + 1;
    var randFive = Math.floor(Math.random() * 9) + 1;
    
    var indexOne = document.getElementById('basic1');
    var indexTwo = document.getElementById('basic2');
    var indexThree = document.getElementById('basic3');
    var indexFour = document.getElementById('basic4');
    var indexFive = document.getElementById('basic5');
    
    indexOne.innerHTML = randOne;
    indexTwo.innerHTML = randTwo;
    indexThree.innerHTML = randThree;
    indexFour.innerHTML = randFour;
    indexFive.innerHTML = randFive;
}


function next() {
    var randOne = Math.floor(Math.random() * 9) + 1;
    var randTwo = Math.floor(Math.random() * 9) + 1;
    var randThree = Math.floor(Math.random() * 9) + 1;
    var randFour = Math.floor(Math.random() * 9) + 1;
    var randFive = Math.floor(Math.random() * 9) + 1;
    
    var indexOne = document.getElementById('basic1');
    var indexTwo = document.getElementById('basic2');
    var indexThree = document.getElementById('basic3');
    var indexFour = document.getElementById('basic4');
    var indexFive = document.getElementById('basic5');
    
    indexOne.innerHTML = randOne;
    indexTwo.innerHTML = randTwo;
    indexThree.innerHTML = randThree;
    indexFour.innerHTML = randFour;
    indexFive.innerHTML = randFive;
}



// End of function!! ---------------------------------------------------------------------


// This is the fuction that adds the numbers and checks if the users input is correct ------------

function checkAnswer(id1, id2, id3, id4, id5, outPut, usersAnswer) {
    var indexOne = document.getElementById(id1).textContent;
    var indexTwo = document.getElementById(id2).textContent;
    var indexThree = document.getElementById(id3).textContent;
    var indexFour = document.getElementById(id4).textContent;
    var indexFive = document.getElementById(id5).textContent;


    var sum = parseInt(indexOne) + parseInt(indexTwo) + parseInt(indexThree) + parseInt(indexFour) + parseInt(indexFive);
    var answer = document.getElementById(usersAnswer).value;
    if (parseInt(answer) == sum) {
        document.getElementById(outPut).innerHTML = ('Correct! ' + '<span class="greenNum">' + sum.toString() + '</span>' + ' is the right answer. Click "Reload" for more practice!')
    }
    else if (parseInt(answer) != sum) {
        outPut = document.getElementById(outPut);
        outPut.innerHTML = ('<span class="oops">' + 'Oops!' + '</span>' + 'The correct answer is ' + '<span class="greenNum">' + sum.toString() + '</span>' + '. Please click "Reload" and try again. (Make sure you insert an answer;and it must be an Interger).')
    }
}

// End -------------------------------------------------------------------------------------------------------------
