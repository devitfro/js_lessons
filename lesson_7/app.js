const bttn = document.getElementById('bttn-generate');
const randomNumberContainer = document.getElementById('number');

bttn.addEventListener('click', () => {
    randomNumberContainer.innerText = generateRandomNumber();
})

function generateRandomNumber() {
    return  Math.floor(Math.random() * 100) + 1;
}