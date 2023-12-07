

const user: {
    companyName: "Ghatarchar School"; // type --> literal types
    readonly nickName: string; // readonly type
    personName: string;
    personAge?: number; // optional typw
    married: boolean;
} = {
    companyName: "Ghatarchar School",
    nickName: "Fuad",
    personName: "Nagib",
    personAge: 32,
    married: true
}

user.companyName = "Ghatarchar School";