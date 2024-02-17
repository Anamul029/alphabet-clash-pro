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
// hide element by id

function hideElementById(id){
    const element=document.getElementById(id);
    element.classList.add('hidden');
}
// show element by id
function showElementById(id){
    const element=document.getElementById(id);
    element.classList.remove('hidden');
}

// get element text by id
function getElementTextById(id){
    const element=document.getElementById(id);
    const alpha=element.innerText;
    return alpha;
}