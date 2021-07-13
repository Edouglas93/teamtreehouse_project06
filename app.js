const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const tries = document.querySelectorAll('.tries');
const misses = document.querySelector('.misses');

let missed = 0;

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
'Code everyday my friend',
'Keep a growth mindset',
'Never give up',
'Consistently learn new skills',
'Enjoy the process'
};

// adds the letters of a string to the display 
const addPhraseToDisplay = arr => {
    
}

// checks if a letter is in the phrase
const checkLetter = (button) => {
    let matched = null;
    for (i=0; i < letters.length; i++) {
      if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        matched = true;
      }
    }
    return matched;
  }

  //check if the game has been won or lost
  const checkWin = () => {
      
  }


  //listen for the start game button to be pressed 
  startButton.addEventListener('click', (e) => {
    const overLay = document.querySelector('#overlay')
    overLay.style.display = 'none';
  });


  // listen for 
  keyboard.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = 'chosen';
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
        missed++;
        // code to change heart icon from liveHeart.png to lostHeart.png would go here
        misses.textContent = missed;
      }
      // checkWin() function call would go here
    }
  });























