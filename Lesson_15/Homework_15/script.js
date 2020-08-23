var chessTableBody = document.getElementById('table-body');
var tableCreateButton = document.getElementById('create-button');
var x = document.getElementById('x');
var y = document.getElementById('y');
var buttonStateChange = function () {
    tableCreateButton.disabled = y.value === '' || x.value === '';
}
var colorToggle = function () {
    tdList=document.getElementsByTagName('TD');
    for (var key in tdList){
        tdList[key].classList.toggle('black-cell');
    }
}


document.addEventListener('keyup', buttonStateChange, false);
chessTableBody.addEventListener('click', colorToggle, false);

tableCreateButton.onclick = function () {
    if (x.value > 0 && x.value <= 10 && y.value > 0 && y.value <= 10) {
        chessTableBody.innerHTML = null;
        var tableRow;
        for (var i = 0; i < x.value; i++) {
            tableRow = document.createElement('tr');
            for (var j = 0; j < y.value; j++) {
                tableRow.append(document.createElement('td'));
                if (j % 2 === 0 && i % 2 === 0 || j % 2 === 1 && i % 2 === 1) {
                    tableRow.lastElementChild.classList.add('black-cell');
                }
            }
            chessTableBody.append(tableRow);
        }
    } else {
        alert('incorrect value');
    }
}