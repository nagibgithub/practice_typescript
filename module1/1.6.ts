{
    const numberSum = (num1: number, num2: number): number => num1 + num2;
    numberSum(1, 2);

    const details = {
        name: "nagib",
        salary: 123,
        addBalance(salary: number): string {
            return `My balance is ${this.salary + 500}`;
        }
    }

    const numberArray: number[] = [1, 2, 3, 4, 5, 6];
    const newArray: number[] = numberArray.map((ele: number): number => ele * ele);

}