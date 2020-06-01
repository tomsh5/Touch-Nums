'use strict';
var gNums;
var gNumsAmont = 16;
var gCounter = 1;

function init() {
    gNums = addNmbers(gNumsAmont);
    shuffle(gNums);
    createTable(gNums, 4);
}

function addNmbers(amount) {
    var nums = [];
    for (var i = 0; i < amount; i++) {
        nums.push(i + 1);
    }
    return nums
}

function createTable(nums, perRow) {
    var strHTML = '';
    var btn = 0;
    for (var i = 0; i < perRow; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < perRow; j++) {
            strHTML += `<td class="btn btn${btn++}"onclick="cellClicked(this)">${nums.pop()}</td>`
        }
        strHTML += '</tr>'
    }
    document.querySelector('table').innerHTML = strHTML;
}

function cellClicked(eBtn) {
    if (eBtn.innerText == gCounter) {
        eBtn.style.background = 'red';
        gCounter++
        document.querySelector('h1 span').innerText = gCounter
    }
    if (gCounter === gNumsAmont + 1){
        document.querySelector('h1 span').innerText = 'Done!'
    }
}
  