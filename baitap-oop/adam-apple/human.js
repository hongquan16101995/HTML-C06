class Human {
    name
    weight

    constructor(name, weight) {
        this.name = name
        this.weight = weight
    }

    getWeight() {
        return this.weight
    }

    checkApple(apple) {
        return apple.getWeight() > 0;
    }

    creaseWeight() {
        this.weight += 1
    }

    eatApple(apple) {
        if (this.checkApple(apple)) {
            apple.decreaseWeight()
            this.creaseWeight()
        } else {
            console.log("Hết táo rồi")
        }
    }
}
