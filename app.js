const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const overLay = document.querySelector('#overlay');
const misses = document.querySelectorAll('.tries') ;


let missed = 0;

//listen for the start game button to be pressed 
  startButton.addEventListener('click', (e) => {
      overLay.style.display = 'none';
  });


//array on song names 
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
        li.classList.add('letter');
    }
  }  
}

addPhraseToDisplay(phrasesToLettersArr); 

// checks if a letter is in the phrase
const checkLetter = (button) => {
    let matched = null;
    let letters = document.querySelectorAll('.letter')
    for (i=0; i < letters.length; i++) {
      if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        matched = true;
      }
    }
    return matched;
  }

  const hearts = document.querySelector('.tries img');

  // listen for 
  qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = 'chosen';
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
        hearts.src = 'images/lostHeart.png';
        missed++;
      }

      checkWin()
      }
  });

    //check if the game has been won or lost
    const checkWin = () => {
      let letters = document.querySelectorAll('.letter')
      const title = document.querySelectorAll('.title');
      const show = document.querySelectorAll('.show');
      if (letters.length === show.length) {
        overlay.classList.add('win')
        title.textContent = 'Winner Winner Chicken Dinner!';
        overLay.style.display = 'flex';
      }
      else {
        if (missed > 4) {
          overlay.classList.add('lose')
          title.textContent = 'You Are Out of Lives, Try Again!';
          overLay.style.display = 'flex';         
        }

      }
    }























