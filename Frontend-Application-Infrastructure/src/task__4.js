let randomNumber;
while (true) {
    randomNumber = Math.floor(Math.random() * 20);
    if (randomNumber % 15 === +0) {
        alert("FizzBuzz");
    } else if (randomNumber % 5 === +0) {
        alert("Buzz");
    } else if (randomNumber % 3 === +0) {
        alert("Fizz");
    } else {
        alert(randomNumber);
    }
}