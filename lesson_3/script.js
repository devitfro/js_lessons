// Task 1
// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек),
// и написать следующие функции, для работы с таким объектом.
// 1. Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
// 2. Функция принимает объект-прямоугольник и возвращает его ширину.
// 3. Функция принимает объект-прямоугольник и возвращает его высоту.
// 4. Функция принимает объект-прямоугольник и возвращает его площадь.
// 5. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.

let rectangle = {
    height: 7,
    width: 15,
    leftTop: {x: 5, y: 5},
    rightDown: {x: 10, y: 10},
}

function printRectangleInfo(rectangle) {
    console.log(`Left top point: (${rectangle.leftTop.x}, ${rectangle.leftTop.y})`);
    console.log(`Right down point: (${rectangle.rightDown.x}, ${rectangle.rightDown.y})`);
}

function getRectangleWidth(rectangle) {
    return rectangle.width;
}

function getRectangleHeight(rectangle) {
    return rectangle.height;
}

function changeRectangleWidth(rectangle, width) {
    rectangle.width = width;
}

const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
}

const getRectanglePerimetr = (rectangle) => (rectangle.width + rectangle.height) * 2;

printRectangleInfo(rectangle);
let rectangleWidth = getRectangleWidth(rectangle);
let rectangleHeight = getRectangleHeight(rectangle);

console.log(`Rectangle width is: ${rectangleWidth}`);
console.log(`Rectangle height is: ${rectangleHeight}`);
console.log(`Rectangle perimetr is: ${getRectanglePerimetr(rectangle)}`);
console.log(`Rectangle area is: ${getRectangleArea(rectangle)}`);
changeRectangleWidth(rectangle, 25);
rectangleWidth = getRectangleWidth(rectangle);
console.log(`Rectangle width is: ${rectangleWidth}`);

// Task 2
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.
// 1. Функция принимает массив и выводит его на экран.
// 2. Функция принимает массив и возвращает сумму всех элементов массива.
// 3. Функция принимает массив и возвращает его максимальный элемент.
let countArr = 10;

let numbers = createRandomArray(countArr);

printRandomNumbers(numbers);
console.log(`Sum of numbers is: ${getSum(numbers)}`);
console.log(`Max number is: ${getMaxNumber(numbers)}`);

function createRandomArray(countArr) {
    let randomNumbers = [];
    for(let i = 0; i < countArr; i++) {
        let randomNum = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNum);
    }
    return randomNumbers;
}

function printRandomNumbers(numbers) {
    console.log(numbers);
}

function getSum(numbers) {
    return numbers.reduce((a, b) => a + b);
}

function getMaxNumber(numbers) {
    return Math.max(...numbers);
}

// Task 3
// Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.
// 1. Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li).
// 2. Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден.
// Поиск должен быть не ре­гистро­зависимый.
let fruits = ['Apple', 'Orange', 'Kiwi', 'Banana', 'Pear', 'Grapes', 'Strawberry'];
printFruits(fruits);
sortFruitsAlphabetically(fruits);
printFruits(fruits);

function sortFruitsAlphabetically(fruits) {
    fruits.sort((a, b) => a.localeCompare(b));
}

function printFruits(fruits) {
    document.write('<ul>');
    for (let fruit of fruits) {
        document.write(`<li>${fruit}</li>`);
    }
    document.write('<ul>');
}

console.log(findFruit(fruits, 'banana'));

function findFruit(fruits, fruit) {
    for (let fr of fruits) {
        if (fr.toLowerCase() === fruit.toLowerCase()) {
            return fruits.indexOf(fr);
        }
        else return -1;
    }
}


