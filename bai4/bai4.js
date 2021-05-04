function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
    this.setName = function (name) {
        this.name = name;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    };
    this.getName = function () {
        return this.name;
    }
    this.getWeight = function () {
        return this.weight;
    };
    this.toString = function () {
        return " name " + this.getName() + " weight " + this.getWeight();
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal("name", 2);
objAnimal2.setName("Mouse");
console.log(objAnimal2.toString());