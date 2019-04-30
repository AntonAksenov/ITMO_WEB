// 7.1
let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];

let createTBody = function (array, element) {
    let tBody = element.createTBody();
    tBody.id = 'tBody';
    for (let i = 0; i < array.length; i++) {
        let row = tBody.insertRow();
        for (let key in articles[i]) {
            row.insertCell().innerText = articles[i][key];
        }
    }
};

let createTable = function (array, element) {
    element.setAttribute('border', '1');
    let caption = element.createCaption();
    caption.innerText = 'Статьи';

    let tHead = element.createTHead();
    let row = tHead.insertRow();
    for (let key in array[0]) {
        let cell = row.insertCell();
        cell.innerText = key;
        cell.className = 'caption';
    }

    createTBody(array, element);
};

createTable(articles, document.getElementById('table'));

Array.from(document.getElementsByClassName('caption'))
    .forEach(item => {
        item.addEventListener("click", filter);
    });

function filter(event) {
    let column = event.target.innerHTML;

    articles.sort((a, b) => {
        if (a[column] < b[column]) return -1;
        else return 1;
    });
    console.log(articles);

    let element = document.getElementById('table');
    element.removeChild(document.getElementById('tBody'));
    createTBody(articles, element);
}


// 7.2
let table = document.getElementById('table');

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        let t = array[i].prize;
        array[i].prize = array[randomIndex].prize;
        array[randomIndex].prize = t;
    }
    return array;
}

function createGame(n, k, attempt_count, gameElement) {
    let attempts = document.createElement('div');
    let gameField = document.createElement('table');

    attempts.innerText = `Попыток сталось: ${attempt_count}`;

    gameElement.appendChild(attempts);
    gameElement.appendChild(gameField);

    let allCells = [];
    for (let i = 0; i < n; i++) {
        let row = gameField.insertRow(i);
        for (let j = 0; j < n; j++) {
            allCells.push({
                prize: false,
                cell: row.insertCell()
            });
        }
    }
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].prize = i < k;
    }
    shuffle(allCells);
    allCells.forEach(val => {
        val.cell.innerText = 'BOX';
        val.cell.className = val.prize ? 'hidden-present' : 'hidden-lose';
    });

    gameField.addEventListener('click', openCell);

    let updateInfo = function (cell, className, innerText) {
        cell.className = className;
        cell.innerText = innerText;
        if (--attempt_count === 0) {
            gameField.removeEventListener('click', openCell);
            attempts.innerText = `Попыток больше не осталось`;
        } else {
            attempts.innerText = `Попыток сталось: ${attempt_count}`;
        }
    };

    function openCell(event) {
        let cell = event.target;
        switch (cell.className) {
            case 'hidden-present':
                updateInfo(cell, 'found-present', 'YES');
                break;
            case 'hidden-lose':
                updateInfo(cell, 'found-lose', 'NO ');
                break;
            default:
                break;
        }
    }
}

createGame(4, 3, 5, document.getElementById('game'));
