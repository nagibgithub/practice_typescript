{
    // type alias
    type Student = { name: string; age: number; active_status: boolean; };
    const stu1: Student = { active_status: true, name: "nagib", age: 32 };

    type NumberFunFormat = (num1: number, num2: number) => number;
    const addNumber: NumberFunFormat = (a, b) => a + b + 5;

    console.log(addNumber(2, 3));
}