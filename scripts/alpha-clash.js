function play() {
    // hide the home screen
    const home = document.getElementById('home');
    home.classList.add('hidden')
    const play = document.getElementById('play');
    play.classList.remove('hidden')
    isgamePlay = true;
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
// initially is gameplay is false
isgamePlay = false;
// captured keybord key press
function handlekeybordButtonPress(event) {
    const playerPressed = event.key;
    //press the 'esc' button to stop the game
    if (playerPressed === 'Escape') {
        //  go to the end section of this game
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
            const lastAlpha = getElementTextById('currentElement');
            // then remove backgroun bg
            removeBackgroundColorById(lastAlpha);
            hideElementById('endPart');
            showElementById('play');
            continueGame();

        })
    }

//    if game is not started that time sound is not provided
    if(isgamePlay===false){
        return;
    }


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
        //    play audio
        playAudio('right');

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {

        // play audio wrong
        playAudio('wrong');

        // console.log('you miss and you loss a life')
        const life = document.getElementById('current-life');
        const totalLife = (life.innerText)--;
        const Totallife = parseInt(totalLife);
        if (Totallife === 0) {
            //  go to the end section of this game
            const currentSec = document.getElementById('play');
            currentSec.classList.add('hidden')
            const endGame = document.getElementById('endPart');
            endGame.classList.remove('hidden')
            // showing final score by id
            const finalScore = document.getElementById('final-score');
            //  current score by id
            const score = document.getElementById('current-score');
            finalScore.innerText = score.innerText;
            // isgameplay is false
            isgamePlay=false;
            // play again
            document.getElementById('play-again-btn').addEventListener('click', function () {
                // set the initial life and score by id
                // isgameplay is true
                isgamePlay=true;
                score.innerText = '0';
                life.innerText = '5';
                // remove last alphabet backgground-color
                // step1 get the alphabet by id
                const lastAlpha = getElementTextById('currentElement');
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

