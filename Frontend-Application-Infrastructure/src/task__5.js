let word = prompt("Введите слово");
let i = 0,
    j = word.length - 1,
    check = true;
while (i < j) {
    if (!(word[i] === word[j])) {
        check = false;
        break;
    }
    i += 1;
    j -= 1;
}
check ? alert(word + " палиндром") : alert(word + " не палиндром");