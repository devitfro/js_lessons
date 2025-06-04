// Task 1
let count = 0;
const likesCount = document.getElementById('likesCount');
const likesBttn = document.getElementById('likesBttn');

likesBttn.addEventListener('click', () => {
    count++;
    likesCount.innerText = count;
})
//     Task 2
const header = document.getElementById('header');
header.firstElementChild.style.userSelect = 'none';

header.addEventListener('contextmenu', (e) =>{
    e.preventDefault();
})

// Task 3
const colorBox = document.getElementById('colorBox');
const titleColorBox = document.getElementById('titleColorBox');

const initialColor = titleColorBox.dataset.color;
titleColorBox.style.color = initialColor;

colorBox.addEventListener('input', (e) =>{
    const newColor = e.target.value;
    titleColorBox.style.color = newColor;
    titleColorBox.dataset.color = newColor;
})

// Task 4
const userIdBttn = document.getElementById('userIdBttn');
const tbody = document.querySelector('tbody');

userIdBttn.addEventListener('click', () => {
    let rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const idA = parseInt(a.querySelector('.userId').innerText);
        const idB = parseInt(b.querySelector('.userId').innerText);
        return idA - idB;
    });

    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
})

let userIdArray = document.querySelectorAll('.userId');
userIdArray.forEach(userId => {
    console.log(userId.innerText);
});