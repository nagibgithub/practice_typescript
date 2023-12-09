{
    // oop - inheritence

    class Parant {
        userName: string;
        age: number;
        address: string;

        constructor(userName: string, age: number, address: string) {
            this.userName = userName;
            this.age = age;
            this.address = address;
        };

        getSleep(numOfHour: number) {
            console.log(`${this.userName} will sleep for ${numOfHour} hours.`);
        };
    }



    class Student extends Parant {

        constructor(userName: string, age: number, address: string) {
            super(userName, age, address);
        };

    };

    const stu1 = new Student("Nagib Mahfuz Fuad", 32, "Ghatarchar, Dhaka-1310");
    stu1.getSleep(7);

    class Teacher extends Parant {

        designation: string;

        constructor(userName: string, age: number, address: string, designation: string) {
            super(userName, age, address);
            this.designation = designation;
        };

        takeClass(numOfClass: number) {
            console.log(`${this.userName} will take ${numOfClass} classes.`);
        };

    };

    const teacher1 = new Teacher("Adib Mahmud Ziad", 25, "Ghatarchar, Keraniganj, Dhaka", "Teacher");
    teacher1.getSleep(6);








}