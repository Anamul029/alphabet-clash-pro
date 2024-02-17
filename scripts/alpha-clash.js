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
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet)

    // checked matching or not

    if (playerPressed === expectedAlphabet) {
        // update score
        const score = document.getElementById('current-score');
        const totalScore = (score.innerText)++;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        
        // console.log('you miss and you loss a life')
        const life = document.getElementById('current-life');
        const totalLife = (life.innerText)--;
        const Totallife=parseInt(totalLife);
        if (Totallife === 0) {
             // clear the last selected alphabet background
            
            const currentSec = document.getElementById('play');
            currentSec.classList.add('hidden')
            const endGame = document.getElementById('endPart');
            endGame.classList.remove('hidden')
            // showing final score by id
            const finalScore = document.getElementById('final-score');
            //  current score by id
            const score = document.getElementById('current-score');
            finalScore.innerText = score.innerText;
            // play again
            document.getElementById('play-again-btn').addEventListener('click', function () {
                // set the initial life and score by id
                score.innerText = '0';
                life.innerText = '5';
                // remove last alphabet backgground-color
                // step1 get the alphabet by id
                const lastAlpha=getElementTextById('currentElement');
                // then remove backgroun bg
                removeBackgroundColorById(lastAlpha);
                hideElementById('endPart');
                showElementById('play');
                continueGame();
               


            })
        }

    }

}
document.addEventListener('keyup', handlekeybordButtonPress)

