function play() {
    // hide the home screen
    const home = document.getElementById('home');
    home.classList.add('hidden')
    const play = document.getElementById('play');
    play.classList.remove('hidden')
    // step2 show the playground
    // playing game
    continueGame();
}


// continue game
function continueGame() {
    const alphabet = getRandomAlphabet();
    //   set randomly genareted alphabet
    const element = document.getElementById('currentElement');
    element.innerText = alphabet;

    //    set background color to current keybort button
    addBackgroundColorById(alphabet)

}

// captured keybord key press
function handlekeybordButtonPress(event) {
    const playerPressed = event.key;
    //   get the expected to press
    const currentElement = document.getElementById('currentElement')
    const currentAlphabet = currentElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet)

    // checked matching or not

    if(playerPressed===expectedAlphabet){
        console.log('you win');
        // update score
        const score=document.getElementById('current-score');
        const totalScore=(score.innerText)++;
        
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you miss and you loss a life')
        const life=document.getElementById('current-life');
        const totalLife=(life.innerText)--;
        if(totalLife===0){
            const currentSec=document.getElementById('play');
            currentSec.classList.add('hidden')
           const endGame=document.getElementById('endPart');
           endGame.classList.remove('hidden')
        }
    }

}
document.addEventListener('keyup', handlekeybordButtonPress)