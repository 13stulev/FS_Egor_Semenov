let countRows = 0;

function addButtons() {
    document.body.getElementsByTagName("div")[0].append(document.createElement('button'));
    document.getElementsByTagName('button')[0].textContent = "Create row";
    document.getElementsByTagName('button')[0].addEventListener("click", createRow);
    document.body.getElementsByTagName("div")[0].append(document.createElement('button'));
    document.getElementsByTagName('button')[1].textContent = "delete row";
    document.getElementsByTagName('button')[1].addEventListener("click", deleteRow);
}
function createRow(){
    document.body.getElementsByTagName("table")[0].append(document.createElement('tr'));
    let elementName;
    for (let i = 0; i < 5; i++) {
        document.body.getElementsByTagName("tr")[countRows + 1].append(document.createElement('td'));
        document.getElementsByTagName('td')[i + ((countRows + 1) * 5)].setAttribute("id", "td"+countRows+i);
        elementName = document.getElementsByTagName('td')[i + ((countRows + 1) * 5)].getAttribute("id");
        document.body.getElementsByTagName("td")[i + ((countRows + 1) * 5)].append(document.createElement('input'));
    }
    document.getElementsByTagName('td')[((countRows + 1) * 5)].textContent = countRows + 1;
    let curDate = new Date();
    document.getElementsByTagName('td')[1 + ((countRows + 1) * 5)].textContent = curDate.getFullYear() + "-" + (curDate.getMonth()) + "-" + curDate.getDate();
    document.getElementsByTagName('input')[countRows * 3].setAttribute('type', 'date');
    document.getElementsByTagName('input')[countRows * 3].setAttribute('min', curDate.getFullYear() + "-" + "0" + (curDate.getMonth()) + "-" + curDate.getDate());

    countRows++;
}
function deleteRow(){
    if (countRows !== 0) {
        let row = document.body.getElementsByTagName("tr")[countRows];
        let child = row.firstChild;
        for (let i = 0; i < 4; i++) {
            row.removeChild(row.firstChild);
        }
        row.remove();
        countRows--;
    }
}

addButtons();