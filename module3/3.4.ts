{
    // instance of guard
    class Animal {
        name: string;
        species: string;
        constructor(name: string, spacies: string) {
            this.name = name;
            this.species = spacies;
        };

        makeSound() {
            console.log(`${this.name} is making sound.`);
        };

    };

    class Dog extends Animal {
        constructor(name: string, spacies: string) {
            super(name, spacies);
        };
        makeBark() {
            console.log(`${this.name} is barking.`);
        };
    };

    class Cat extends Animal {
        constructor(name: string, spacies: string) {
            super(name, spacies);
        };
        makeMew() {
            console.log(`${this.name} is mewing.`);
        };
    };

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    };

    // const getAnimal = (animal: Animal) => {
    //     if (animal instanceof Dog) {
    //         animal.makeBark();
    //     } else if (animal instanceof Cat) {
    //         animal.makeMew();
    //     } else {
    //         animal.makeSound();
    //     }
    // };

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMew();
        } else {
            animal.makeSound();
        }
    };

    const dog = new Dog("Tony", "Dog");
    const cat = new Cat("Cutiy", "Cat");

    getAnimal(cat);

























    // 
}