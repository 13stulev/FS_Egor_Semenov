function insert(num) {

    if ((document.form.textview.value == 0) && (num != ".")) {
        document.form.textview.value = num;
    } else if (checkLastNumber()) {
        document.form.textview.value += num;
    } else if (checkForOperators()) {
        document.form.textview.value += num;
    }

    function checkLastNumber() {
        let arrayOfNumbers = document.form.textview.value.split(/[\+\- * \/]/);
        if ((arrayOfNumbers[arrayOfNumbers.length - 1].search(/\./) != -1) && (num == ".")) {
            return false;
        } else {
            return true;
        }

    }

    function checkForOperators() {
        let arrayOfNumbers = document.form.textview.value.split(/[\+\-\*\/]/);
        let regExp = new RegExp(/[\+\-\*\/]/)
        if ((regExp.test(arrayOfNumbers[arrayOfNumbers.length - 1])) && (regExp.test(num))) {
            return true;
        } else {
            return false;
        }
    }


}


function deleteNumber() {
    if (document.form.textview.value.length > 1) {
        var temp = document.form.textview.value;
        document.form.textview.value = temp.substring(0, temp.length - 1);
    } else {
        clean();
    }
}

function pow() {
    document.form.textview.value = Math.pow(eval(document.form.textview.value), 2);
}

function sqrt() {
    document.form.textview.value = Math.sqrt(eval(document.form.textview.value));
}

function equals() {
    document.form.textview.value = eval(document.form.textview.value);
}

function clean() {
    document.form.textview.value = 0;
}
