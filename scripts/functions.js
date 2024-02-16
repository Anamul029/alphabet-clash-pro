function getRandomAlphabet() {
    // creat an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // take a random alphabet between index 0 to 25
    const RandomNumber = Math.random() * 25;
    const index = Math.round(RandomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

// add background color by id of keybord
function addBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    
}
// remove backgroundCOlor by id

function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}