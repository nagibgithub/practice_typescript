{
    // oop -- class
    class Animal {
        name: string;
        sound: string;

        constructor(name: string, sound: string) {
            this.name = name;
            this.sound = sound;
        };

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        };
    };

    const dog = new Animal("German Shepard", "ghew");
    const cat = new Animal("kala bilai", "mew");

    // console.log(dog, cat);
    // dog.makeSound();



    class User {
        constructor(public personName: string, public age: number) { };
        comment() { console.log(`${this.personName} is ${this.age} years old`) };
    };

    (new User("Nagib Mahfuz", 32)).comment();

}