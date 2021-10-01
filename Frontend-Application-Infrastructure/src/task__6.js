alert("Начать игру?");
do {
    let answer = Math.floor(Math.random() * 1000 + 1),
        number, i = 0;
    do {
        number = prompt(" Введите значение ");
        number = Number(number);
        if (number < answer) {
            alert("Искомое число больше!")
        } else if (number > answer) {
            alert("Искомое число меньше!");
        }
        i++;
    } while (!(answer === number));
    alert("Вы угадали! Количество попыток: " + i + ". Начать заново?");
} while (confirm("Продолжить?"));