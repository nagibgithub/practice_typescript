{
    // generic constraint with keyof operator
    type Vehicle = { bike: string; car: string; ship: string; };

    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle;

    const ownerCar: Owner2 = "bike";

    const personOwn: string = "Six";
    const addNewStudent = <T extends { name: string, age: number, isMarried: boolean }>(student: T) => {
        return {
            ...student,
            ownerCar
        };
    };

    const newStu1 = addNewStudent({ name: "Nagib", age: 32, isMarried: false, salary: 2300 });

    const constKeyOfFunction = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const result = constKeyOfFunction(newStu1, "ownerCar");
    console.log(result);

}