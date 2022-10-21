let board1 = document.getElementById('board1');
let board2 = document.getElementById('board2');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');

let homeScore = 0;
let guestScore = 0;
board1.textContent = homeScore;
board2.textContent = guestScore;

button1.onclick = function add1PointHome() {
    homeScore += 1;
    board1.textContent = homeScore;
}

button4.onclick = function add1PointGuest() {
    guestScore += 1;
    board2.textContent = guestScore;
}

button2.onclick = function add2PointsHome() {
    homeScore += 2;
    board1.textContent = homeScore;
}

button5.onclick = function add2PointsGuest() {
    guestScore += 2;
    board2.textContent = guestScore;
}

button3.onclick = function add3PointsHome() {
    homeScore += 3;
    board1.textContent = homeScore;
}

button6.onclick = function add3PointsGuest() {
    guestScore += 3;
    board2.textContent = guestScore;
}












