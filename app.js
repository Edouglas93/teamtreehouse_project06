const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const overLay = document.querySelector('#overlay');
const lives = document.querySelectorAll('.tries img') ;
const phraseUl = document.querySelector('#phrase ul');

let missed = 0;

//listen for the start game button to be pressed 
  startButton.addEventListener('click', (e) => {
      overLay.style.display = 'none';

      keyBoardReset()
      livesRestored()
      const phrasesToLettersArr = getRandomPhraseAsArray(gameSongPhrases);
      addPhraseToDisplay(phrasesToLettersArr); 
  });


//array on song names 
const gameSongPhrases = [
    'Too Much',
    'Rapstar',
    'One Dance',
    'Hypnotize',
    'More Life',
    'My Name Is'
  ];

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    const randomIndexSelector = Math.floor(Math.random() * arr.length);
    const randomPhraseSelector = arr[randomIndexSelector];
    return phraseLetterSplitter = randomPhraseSelector.split('');
};




// adds the letters of a string to the display 
const addPhraseToDisplay = arr => {
  for (let i = 0; i < arr.length; i++ ) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    phraseUl.appendChild(li);
    
    if ( arr[i] !== ' ') {
        li.classList.add("letter");
    } else {
        li.classList.add("space");
    }
  }  
}

// checks if a letter is in the phrase
const checkLetter = (button) => {
    let matched = null;
    let lettersFound = document.querySelectorAll('.letter')
    for (i=0; i < lettersFound.length; i++) {
      if (button === lettersFound[i].textContent.toLowerCase()) {
        lettersFound[i].classList.add('show');
        lettersFound[i].style.transition = '.1s ease-in';
        matched = true;
      }
    }
    return matched;
  }

  const hearts = document.querySelector('.tries img');

  // listen for clicks on the keyboard and disables button, counts misses and swich heart images
  qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = 'chosen';
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
        lives[missed].src ='images/lostHeart.png';
        missed++;
      }

      checkWin()
      }
  });

    //check if the game has been won or lost
    const checkWin = () => {
      let lettersFound = document.querySelectorAll('.letter')
      const title = document.querySelector('.title');
      const show = document.querySelectorAll('.show');
      if (lettersFound.length === show.length) {
        overLay.classList.add('win')
        title.textContent = 'Winner Winner Chicken Dinner!';
        overLay.style.display = 'flex';
        startButton.textContent = "Try Again!"
        clearPhraseToDisplay()
      }
      else if (missed > 4) {
          overLay.classList.add('lose')
          title.textContent = 'You Are Out of Lives!!';
          overLay.style.display = 'flex';
          startButton.textContent = "Try Again!"
          clearPhraseToDisplay()
        }

        
    }

    // Clear keys funciton
    function keyBoardReset() {
      const keyBoardButton = document.getElementsByTagName('button');
      for ( let i =0; i < keyBoardButton.length; i++) {
        keyBoardButton[i].className = ' ';
        keyBoardButton[i].disabled = false;
      }
    }

    // Restore Lives funciton
    function livesRestored() {
      for ( let i =0; i < lives.length; i++) {
        lives[i].src = 'images/liveHeart.png';
        missed = 0;
      }
    }

    //Reset the phrase at the end of the game 

    function clearPhraseToDisplay() {
      phraseUl.innerHTML = ' ';
    }





















