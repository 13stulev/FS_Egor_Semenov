console.log("task__0");
let firstNumber = 1,
    secondNumber = 6,
    temp;
console.log('Переменные до: ' + firstNumber + " " + secondNumber);
temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
console.log('Переменные после: ' + firstNumber + " " + secondNumber);
// Повторим
firstNumber = 1;
secondNumber = 6;
console.log('Новые переменные до: ' + firstNumber + " " + secondNumber);
firstNumber = firstNumber ^ secondNumber;
secondNumber = firstNumber ^ secondNumber;
firstNumber = firstNumber ^ secondNumber;
console.log('Новые переменные после: ' + firstNumber + " " + secondNumber);