// Task 1
// Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
let a = 10;
let b = -10;
let minNumber = (a, b) => a < b ? a : b;
console.log("Min number is:", minNumber(a, b));

// Task 2
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.
let numberArr = [1, 3, 5];

let getNumber = function (numberArr) {
    return Number(numberArr.join(''));
}
console.log(getNumber(numberArr));

// Task 3
// Написать функцию, которая вычисляет факториал переданного ей числа.
let number = 12;
let factorial = getFactorial(number);
console.log("Factorial of", number, "is", factorial);

function getFactorial(number) {
    let result = 1;
    while(number >= 1) {
        result *= number;
        number--;
    }
    return result;
}

// Task 4
// Написать функцию, которая принимает от 1 до 5 чисел чисел и возвращает их сумму.
let arr = [1, 2, 3, 4, 5];
let sum = getSum(...arr);

console.log(sum);
console.log(getSumRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function getSum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

function getSumRest(...args) {
    return args.reduce((a, b) => a + b);
}

// Task 5
// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
let arr2 = [1, 2, 500, 4, 5, -10, 150, 20];
let maxNumber = getMaxNumber(arr2);
console.log(maxNumber);

function getMaxNumber(arr) {
    let max = arr[0];

    for (let n of arr) {
        if (n > max) max = n;
    }
    return max;
}

// Task 6
// Написать функцию, которая выводит все четные или нечетные числа в указанном пользователем диапазоне.
// Какие числа выводить определяется третьим параметром типа bool (true — четные, false — нечетные).
let userAnswer;
let stop = "stop";
let userArr = [];

while (true) {
    userAnswer = prompt("Enter numbers:");

    if (userAnswer.trim().toLowerCase() === stop) break;

    userArr.push(Number(userAnswer));
}
let flag = true;
printNum(userArr, flag);

function printNum(numbers, flag) {
    for (let num of numbers) {
        if ((num % 2 === 0) === flag) {
            console.log(num);
        }
    }
}