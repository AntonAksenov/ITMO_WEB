// 1.1
{
    let x = prompt("Ведите ширину:");
    let y = prompt("Ведите высоту:");
    let z = prompt("Ведите длину:");

    console.log("площадь: ", 2 * (x * y + x * z + y * z));
    if (x > y) {
        console.log("ширина больше высоты");
    } else if (x < y) {
        console.log("высота больше ширины");
    } else {
        console.log("ширина равна высоте");
    }
}
// 1.2
{
    console.log("осталось: ", ((10 * 100) % (15 * 25)), " квадратныхх метров");
}
// 1.3
{
    console.log("новая площадь равна ", (15 * 10 * 10 - 600), " квадратныхх сантиметрам");
}
// 1.4
{
    let x = prompt("Введите X");
    let y = prompt("Введите Y");
    if (x > y) {
        let t = x;
        x = y;
        y = t;
        console.log("X: ", x, ", Y: ", y);
    } else if (y > x) {
        console.log("X: ", x, ", Y: ", y);
    } else {
        console.log("Это сделатьневозможно");
    }
}
// 1.5
{
    let m = prompt("Введите m");
    let n = prompt("Введите n");
    if (Math.abs(m - 10) > Math.abs(n - 10)) {
        console.log("n ближе к 10");
    } else if (Math.abs(m - 10) > Math.abs(n - 10)) {
        console.log("m ближе к 10");
    } else {
        console.log("Они одинаково близки к 10");
    }
}
// 2.1
{
    let arr = [];
    let num = [];
    let flag = false;
    for (let i = 0; i < 100; i++) {
        arr[i] = Math.floor(Math.random() * (20) - 10);

        num[7 - arr[i]] = true;

        if (num[arr[i]]) {
            console.log("Это числа ", arr[i], " ", 7 - arr[i]);
            flag = true;
            break;
        }
    }
    if (!flag) {
        console.log("Таких нет");
    }
}
// 2.2
{
    for (let i = 1; i <= 100; i++) {
        let str = "";
        if (i % 3 == 0) {
            str += "Three"
        }
        if (i % 5 == 0) {
            str += "Five"
        }
        if (str.length == 0) {
            str += i;
        }
        console.log(str);
    }
}
// 2.3
{
    let a = prompt("Ведите a:");
    let b = prompt("Ведите b:");
    let c = prompt("Ведите c:");

    if (a + b > c && b + c > a && a + c > b) {
        console.log("Можно");
        let a1, b1, c1;
        if (a > b) {
            if (b > c) {
                a1 = a;
                b1 = b;
                c1 = c;
            } else {
                c1 = b;
                if (a > c) {
                    a1 = a;
                    b1 = c;
                } else {
                    a1 = c;
                    b1 = a;
                }
            }
        } else {
            if (a > c) {
                a1 = b;
                b1 = a;
                c1 = c;
            } else {
                c1 = a;
                if (b > c) {
                    a1 = b;
                    b1 = c;
                } else {
                    a1 = c;
                    b1 = b;
                }
            }
        }
        if (a * a > b * b + c * c) {
            console.log("Тупоугольный");
        } else if (a * a < b * b + c * c) {
            console.log("Остроугольный");
        } else {
            console.log("Прямоугольный");
        }
    } else {
        console.log("Нельзя");
    }
}
// 2.4.1
{
    let n = prompt("Ведите длинну массива:");
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    for (let i = arr.length; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// 2.4.2
{
    for (let i = 0, j = 2; i < 20; i++, j *= 2) {
        console.log(j);
    }
}
// 2.4.3
{
    for (let i = 0; i < 10; i++) {
        let str = "";
        for (let j = 0; j < i + 1; j++) {
            str += "*";
        }
        console.log(str);
    }
}
//  2.5
{
    let a = prompt("Введите число тарелок");
    let b = prompt("Ведите количество моющего вещества");
    for (let i = a, j = b; i >= 1 && j >= 0.5; i--, j -= 0.5) {
    }
    if (i == 0) {
        console.log("всё помыли, ", j, " моющего средства осталось");
    } else {
        console.log(i, " тарелок помыть не удалось");
    }
}
// 2.6.1
{
    let ans = 0;
    for (let h1 = 0; h1 < 6; h1++) {
        for (let h2 = 0; h2 < 10; h2++) {
            for (let m1 = 0; m1 < 6; m1++) {
                for (let m2 = 0; m2 < 10; m2++) {
                    if (h1 == m2 && h2 == m1) {
                        ans++;
                    }
                }
            }
        }
    }
    console.log(ans);
}
// 3.1
{
    function f(a, b) {
        if (a.length == b.length) {
            for (let i = 0; i < a.length; i++) {
                if (a[i] != b[i]) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }

    console.log(f([1, 2, 3], [1, 2, 3]));
    console.log(f([1, 1, 3], [1, 2, 3]));
    console.log(f([1, 2, 3], [1, 2, 3, 4]));
}
// 3.2
{
    function f(n) {
        if (n == 0)
            return 0;
        return n % 10 + f(Math.floor(n / 10));
    }

    console.log(f(2354345));
    console.log(f(9863943));
}
// 3.3
{
    function f(a, b, c = 1) {
        arr = [a];

        if (a < b && c < 0 || a > b && c > 0 || a != b && c == 0) {
            return null;
        }

        for (let i = 0; ; i++) {
            if (a < b && arr[i] + c > b || a >= b && arr[i] + c < b) {
                break;
            }
            arr.push(arr[i] + c);
        }

        return arr;
    }

    console.log(f(1, 10, 2));
    console.log(f(5, -10, -3));
    console.log(f(1, 5));
}
// 3.4
{
    function f(n) {
        if ((Math.floor(n / 10)) % 10 == 1) {
            return n + " товаров";
        }
        switch (n % 10) {
            case 1:
                return n + " товар";
            case 2:
            case 3:
            case 4:
                return n + " товара";
            default:
                return n + " товаров";
        }
        if (n % 10 == 1) {
            return n + " товар";
        }
    }

    console.log(f(2));
    console.log(f(1111));
    console.log(f(1124));
    console.log(f(1127));
}
// 4.1
{
    function f(s, s1, s2) {
        return s.split(s1).join(s2);
    }

    let x = prompt("Ведите строку в которой заменяем:");
    let y = prompt("Ведите строку которую заменяеи:");
    let z = prompt("Ведите строку на которую заменяем:");
    console.log(f(x, y, z));
}
// 4.2
{
    function f(s) {
        return s.match(new RegExp('\\d+', 'g'));
    }

    let x = prompt("Ведите строку в которой ищем числа:");
    console.log(f(x));
}
// 4.3
{
    function f(s) {
        return s.split(" ").sort();
    }

    let x = prompt("Ведите названия городов через пробел:");
    console.log(f(x));
}

{
    // 5.1
    function inRange(obj, from, to) {
        let ans = [];
        for (let i in obj) {
            if (i.price >= from && i.price <= to) {
                ans.push(i);
            }
        }
    }

    // 5.2
    function addToCart(obj, title, countToCart) {
        for (let i in obj) {
            if (i.title === title && i.count >= countToCart) {
                i.count -= countToCart;
                console.log("Товар добавлен в корзину");
            } else {
                console.log("Товара в наличии недостаточно");
            }
        }
    }

    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };
}
// 5.3
{
    function bookSort(books) {
        books.sort((a, b) => {
            a.title < b.title ? -1 : a.title > b.title ? 1 : 0
        });
    }


    let books = [
        {author: 'Толстой', title: 'Война и мир'},
        {author: 'Гончаров', title: 'Обломов'},
        {author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];
}
// 5.4
{
    let week = {
        1: "понедельник",
        2: "вторник",
        3: "понедельник",
        4: "понедельник",
        5: "понедельник",
        6: "понедельник",
        7: "понедельник",
    }

    console.log("сегодня " + week[new Date().getDay()]);
}

