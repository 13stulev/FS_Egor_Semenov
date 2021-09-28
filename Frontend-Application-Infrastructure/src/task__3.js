function compAsc(a, b) {
    return a - b;
}

function compDesc(a, b) {
    return b - a;
}

function arraySort(array, check) {
    if (check === "asc") {
        array.sort(compAsc);
    } else if (check === "desc") {
        array.sort(compDesc);
    }
}

function squareSum(array) {
    let ans = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            ans += array[i] * array[i];
        }
    }
    return ans;
}

let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 20);
}
alert("Начальное положение элементов " + array);
let choice = prompt("Выберите направление сортировки (asc, desc)");
arraySort(array, choice);
alert("Конечное положение элементов " + array);
alert("Сумма квадратов нечетных элементов " + squareSum(array));