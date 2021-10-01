let firstNumber = 1,
    secondNumber = 6,
    temp;
alert('Переменные до: ' + firstNumber + " " + secondNumber);
temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
alert('Переменные после: ' + firstNumber + " " + secondNumber);
// Повторим
firstNumber = 1;
secondNumber = 6;
alert('Новые переменные до: ' + firstNumber + " " + secondNumber);
firstNumber = firstNumber ^ secondNumber;
secondNumber = firstNumber ^ secondNumber;
firstNumber = firstNumber ^ secondNumber;
alert('Новые переменные после: ' + firstNumber + " " + secondNumber);