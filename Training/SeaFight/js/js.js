var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,
    ships: [{
        locations: ["06", "16", "26"],
        hits: ["", "", ""]
    }, {
        locations: ["24", "34", "44"],
        hits: ["", "", ""]
    }, {
        locations: ["10", "11", "12"],
        hits: ["", "", ""]
    }],
    fire: function(guess) { //guess  - координаты выстрела (01 например)
        for (i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess); //здесь в свойстве locations (массив), ищем координаты корабля

            if (index >= 0) { //особенность метода indexOf. Если индекс не найден он возвращает -1 если да то возвращает индекс.
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!!! Good Boy");

                if (this.isSunk(ship)) { //если здесь true
                    this.shipSunk++;
                    console.log("Это счетчик того потоплен ли корабль полностью", this.shipSunk);
                    console.log(ship);
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed! Bastard");
        return false;
    },
    isSunk: function(ship) { //проверка потоплен ли корабль полностью
        for (i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,
    processGuess: function(guess) { //здесь получаем и орбрабатываем координаты выстрела
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in" + " " + this.guesses + " guesses");
            }
        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess == null || guess.length !== 2) {
        alert("Attention - wrong coordinates ");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board")
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!")
        } else {
            return row + column;
        }
    }
    return null;
};

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess); //отсюда идет запуск всей этой кухни
    guessInput.value = "";
    return guessInput;
};

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
    }
    return false;
};

function pageReload() {
    location.reload();
};

function startPreventDefault(event) {
    event.preventDefault();
};

function init() {
    var form = document.getElementById('board-form-id'); //отмена события отправки данных формы по умолчанию
    form.addEventListener('submit', startPreventDefault);//если это не сделать не работают другие события

    var fireButton = document.getElementById("fireButton");
    fireButton.addEventListener("click", handleFireButton);

    var guessInput = document.getElementById('guessInput');
    guessInput.addEventListener('keydown', handleKeyPress);

    var reloadButton = document.getElementById("reloadButton");
    reloadButton.addEventListener("click", pageReload);
    guessInput.focus();
};

window.onload = init;
