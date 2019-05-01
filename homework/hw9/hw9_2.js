// 9.2

class Figure {

    get perimeter() {
        return 0;
    };

    get square() {
        return 0;
    };
}

class Circle extends Figure {
    constructor(rad) {
        super();
        this._rad = rad;
    }

    get perimeter() {
        return 2 * Math.PI * this._rad;
    };

    get square() {
        return Math.PI * this.rad * this._rad;
    };
}

class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }

    get perimeter() {
        return 2 * (this._width + this._height);
    };

    get square() {
        return this._width * this._height;
    };
}

class Triangle extends Figure {
    constructor(a, b, c) {
        super();
        this._a = a;
        this._b = b;
        this._c = c;
    }

    get perimeter() {
        return this._a + this._b + this._c;
    };

    get square() {
        let p = this.perimeter;
        return Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
    };
}

let c = new Circle(234);
let r = new Rectangle(23, 54);
let t = new Triangle(54, 71, 13);

console.log(
    c.perimeter + " " + c.square + " " +
    r.perimeter + " " + r.square + " " +
    t.perimeter + " " + t.square);