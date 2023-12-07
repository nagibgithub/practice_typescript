{
    // ternary operator
    const age: number = 15;

    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }

    age >= 120 ? console.log("adult") : console.log("not adult");

    // nullish coaliescing operator
    // null / undefined 

    const isAdmin = "";
    const result1 = isAdmin ?? "visitor";
    const result2 = isAdmin ? "admin" : "not admin";
    console.log({result1, result2});





    // 


























    // 
}