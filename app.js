const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const tries = document.querySelectorAll('.tries');
const misses = 'images/lostHeart.png';


let missed = 0;

//listen for the start game button to be pressed 
  startButton.addEventListener('click', (e) => {
    const overLay = document.querySelector('#overlay')
    overLay.style.display = 'none';
  });


//arrays
const gameSongPhrases = [
    'It Was A Good Day',
    'Rapstar',
    'Rebel Without A Pause',
    'Hypnotize',
    'Calling My Phone',
    'My Name Is'
  ];

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    const randomIndexSelector = Math.floor(Math.random() * arr.length);
    const randomPhraseSelector = arr[randomIndexSelector];
    return phraseLetterSplitter = randomPhraseSelector.split('');
};

const phrasesToLettersArr = getRandomPhraseAsArray(gameSongPhrases);


// adds the letters of a string to the display 
const addPhraseToDisplay = arr => {
  for (let i = 0; i < arr.length; i++ ) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    const phraseUl = document.querySelector('#phrase ul');
    phraseUl.appendChild(li);
    
    if ( li.textContent === '') {
        li.classList.add('space');
    } else {
        li.classList.add("letter");
    }
  }  
}

addPhraseToDisplay(phrasesToLettersArr); 

// checks if a letter is in the phrase
const checkLetter = (button) => {
    let matched = null;
    for (i=0; i < letter.length; i++) {
      if (button === letter[i].textContent.toLowerCase()) {
        letter[i].classList.add('show');
        matched = true;
      }
    }
    return matched;
  }

  // listen for 
  qwerty.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = 'chosen';
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
        missed++;
        tries.style.className = 'misses';
        misses.textContent = missed;
      }
      // checkWin() function call would go here
    }
  });

    //check if the game has been won or lost
    const checkWin = () => {
      
    }























