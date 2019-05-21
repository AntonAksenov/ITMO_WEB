function Apple(garden) {
    this.garden = garden;
    this.age = 0;
    this.onGround = false;
    this.treeBorn = false;
    this.spoiled = false;
    this.color = "red";
    this.size = 1;

    this.passDay = function () {
        this.age++;
        if (!this.onGround && (this.age >= 32 || this.age >= 28 && Math.random() > 0.75)) {
            this.onGround = true;
        }
        if (this.onGround) {
            this.spoiled = true;
            if (!this.treeBorn && this.age > 100 && Math.random() > 0.05) {
                this.garden.addTree();
                this.treeBorn = true;
            }
        }
    }
}

function Tree(apples, garden) {
    this.apples = [];

    this.addApple = function () {
        this.apples.push(new Apple(garden));
    };

    for (let i = 0; i < apples; i++) {
        this.addApple();
    }
    this.age = 0;

    this.passDay = function () {
        for (let i = 0; i < this.apples.length; i++) {
            this.apples[i].passDay();
        }
        this.age++;
        if (this.age % 30 === 0) {
            this.addApple();
        }
    }
}

function Garden(trees, apples) {
    this.trees = [];

    this.addTree = function () {
        this.trees.push(new Tree(apples, this));
    };

    for (let i = 0; i < trees; i++) {
        this.addTree();
    }

    this.passDay = function () {
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].passDay();
        }
    };

    this.passDays = function (num) {
        for (let i = 0; i < num; i++) {
            this.passDay();
            // console.log(garden.getCountApples());
        }
    };

    this.getCountApples = function () {
        let cnt = 0;
        for (let i = 0; i < this.trees.length; i++) {
            for (let j = 0; j < this.trees[i].apples.length; j++) {
                let apple = this.trees[i].apples[j];
                if (!apple.onGround) {
                    cnt++;
                }
            }
        }
        return cnt;
    };


    this.logEverything = function () {
        let string = "";
        for (let i = 0; i < this.trees.length; i++) {
            string += "\napples: ";
            for (let j = 0; j < this.trees[i].apples.length; j++) {
                string += this.trees[i].apples[j].age + " ";
            }
        }
        console.log(string)
    }
}

garden = new Garden(1, 1);
garden.passDay();
garden.passDay();
garden.passDay();
garden.logEverything();
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(28);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
garden.passDays(20);
console.log(garden.getCountApples());
garden.logEverything();
