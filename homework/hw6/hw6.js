'use strict';

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: '../img/1.jpg'
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: '../img/2.jpg'
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: '../img/3.jpg'
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: '../img/4.jpg'
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: '../img/5.jpg'
    }
};

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

// 6.1
let createGoodsTable = function (object, element) {
    for (let key in object) {
        let div = document.createElement('div');

        div.setAttribute('class', 'container');

        let title = document.createElement('h2');
        title.innerText = object[key].title;

        let img = document.createElement('img');
        img.setAttribute('src', object[key].img);

        let price = document.createElement('p');
        price.innerText = 'Цена: ' + object[key].price;

        element.appendChild(div);
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(price);
    }
};

createGoodsTable(goods, document.getElementById('goods'));

// 6.2
let createTable = function (array, element) {
    element.setAttribute('border', '1');
    let caption = element.createCaption();
    caption.innerText = 'Статьи';

    let row = element.insertRow();
    for (let key in array[0]) {
        let cell = row.insertCell();
        cell.innerText = key;
        cell.className = 'caption';
    }

    for (let i = 0; i < array.length; i++) {
        row = element.insertRow();
        for (let key in articles[i]) {
            row.insertCell().innerText = articles[i][key];
        }
    }

};

createTable(articles, document.getElementById('table'));