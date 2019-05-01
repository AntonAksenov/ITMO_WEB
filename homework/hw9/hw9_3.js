// 9.3
class Cat {
    constructor(name, age, weight, strength) {
        this._name = name;
        this._age = age;
        this._weight = weight;
        this._strength = strength;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get weight() {
        return this._weight;
    }

    get strength() {
        return this._strength;
    }

    fight(enemyCat) {
        console.log(this._name, "напал на кота по имени",
            enemyCat.name);
        return this._strength * this._weight * (20 - this._age) >
            enemyCat.strength * enemyCat.weight * (20 - enemyCat.age);
    }
}

let a = new Cat("A", 7, 4, 5);
let b = new Cat("B", 3, 5, 7);
let c = new Cat("C", 5, 6, 6);


console.log(
    c.fight(b),
    b.fight(a));