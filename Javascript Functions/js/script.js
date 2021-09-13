function insert(num) {
    let regExp = new RegExp(/[\+\-\*\/]/)
    if ((document.form.textview.value == 0) && (num != ".") && !(regExp.test(num))) {
        document.form.textview.value = num;
    } else if (checkForOperators()) {
        document.form.textview.value += num;
        return;
    } else if (checkLastNumber()) {
        document.form.textview.value += num;
        return;
    }

    function checkLastNumber() {
        let regExp = new RegExp(/[\+\-\*\/]/)
        let arrayOfNumbers = document.form.textview.value.split(/[\+\- \* \/]/);
        if ((arrayOfNumbers[arrayOfNumbers.length - 1].search(/\./) == -1) && (num === ".")) {
            return true;
        } else if (!(regExp.test(num)) && (num !== ".")){
            return true;
        }else {
            return false;
        }

    }

    function checkForOperators() {
        let regExp = new RegExp(/[\+\-\*\/]/)
        if (!(regExp.test(document.form.textview.value[document.form.textview.value.length - 1])) && (regExp.test(num))) {
            return true;
        } else {
            return false;
        }
    }


}

function deleteNumber() {
    if (document.form.textview.value.length > 1) {
        let temp = document.form.textview.value;
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
    let regExp = new RegExp(/\./);
    document.form.textview.value = eval(document.form.textview.value);
    if(regExp.test(document.form.textview.value)) {
        let temp = parseFloat(document.form.textview.value);
        document.form.textview.value = temp.toPrecision(3);
    }
}

let clean = () => document.form.textview.value = 0;

