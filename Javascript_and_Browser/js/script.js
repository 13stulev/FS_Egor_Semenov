function sendMessage() {
    if(checkName() && checkTelephone() && checkMail() && checkMessage() && (getCookie("name") !== document.getElementsByName('name')[0].value)){
        document.cookie = "name="+document.getElementsByName('name')[0].value;
        alert(document.getElementsByName('name')[0].value + " спасибо за обращение!");

    } else {
        let fields = "";
        if (!checkName()) {
            fields += "имя, ";
        }
        if (!checkTelephone()) {
            fields += "телефон, ";
        }
        if (!checkMail()) {
            fields += "почта, ";
        }
        if (!checkMessage()) {
            fields += "письмо, ";
        }
        if(getCookie("name") === document.getElementsByName('name')[0].value && fields === ""){
            alert("Ваше обращение обрабатывается");
        }else {

            alert("Поля " + fields + "заполнены неверно");
        }
    }
}
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

function checkName(){
    return (document.getElementsByName('name')[0].value) !== "";
}

function checkTelephone(){
    if(document.getElementsByName('telephone')[0].value !== "") {
        let testNumber = new RegExp(/\w/g);
        let number = document.getElementsByName('telephone')[0].value.match(testNumber).join('');
        return number.length === 11 && parseInt(number) != null;
    } else {
        return true;
    }
}

function checkMail(){
    let regExp = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    return regExp.test(document.getElementsByName('mail')[0].value);
}

function checkMessage(){
    return (document.getElementsByName('name')[0].value) !== "";
}

function saveName(){
    if(localStorage.getItem("name") != null){
        localStorage.name = document.getElementsByName('name')[0].value;
    } else {
        localStorage.setItem("name", document.getElementsByName('name')[0].value);
    }

}

function saveTelephone(){
    if(localStorage.getItem("telephone") != null){
        localStorage.telephone = document.getElementsByName('telephone')[0].value;
    } else {
        localStorage.setItem("telephone", document.getElementsByName('telephone')[0].value);
    }
}

function saveMail(){
    if(localStorage.getItem("mail") != null){
        localStorage.mail = document.getElementsByName('mail')[0].value;
    } else {
        localStorage.setItem("mail", document.getElementsByName('mail')[0].value);
    }
}

function saveMessage(){
    if(localStorage.getItem("message") != null){
        localStorage.message = document.getElementsByName('message')[0].value;
    } else {
        localStorage.setItem("message", document.getElementsByName('message')[0].value);
    }
}

if(localStorage.getItem("message") != null){
    document.getElementsByName('message')[0].value = localStorage.getItem("message");
}
if(localStorage.getItem("name") != null){
    document.getElementsByName('name')[0].value = localStorage.getItem("name");
}
if(localStorage.getItem("mail") != null){
    document.getElementsByName('mail')[0].value = localStorage.getItem("mail");
}
if(localStorage.getItem("telephone") != null){
    document.getElementsByName('telephone')[0].value = localStorage.getItem("telephone");
}
