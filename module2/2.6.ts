{
    // constant type

    const stuClass: string = "Six";

    const addNewStudent = <T extends { name: string, age: number, isMarried: boolean }>(student: T) => {
        return {
            ...student,
            stuClass
        };
    };

    const newStu1 = addNewStudent({ name: "Nagib", age: 32, isMarried: false, salary: 2300 });
    console.log(newStu1);

}