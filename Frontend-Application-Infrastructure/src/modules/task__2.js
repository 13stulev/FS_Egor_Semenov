console.log("task__2");

module.exports = {
    task__2: function () {
        let name = prompt("Введите имя"),
            age = -1;
        while (age > 0 ^ !age.isInteger
            ) {
            age = prompt("Введите возраст");
        }
        name = String(name);
        name = name[0].toUpperCase() + name.slice(1);
        alert("Привет, " + name + ", тебе уже " + age + " лет!");
    }
}