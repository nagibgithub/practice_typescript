{
    // object destructuring
    const user = { id: 123, name: { firstName: "Nagib", lastName: "Mahfuz" }, age: 32 };
    const { age, id, name: { firstName, lastName } } = user

    // array destructuring
    const fndList = ['fuad', 'ziad', 'nagib', 'mahfuz', 'adib', 'mahmud'];
    const [a, , c, , ...ef] = fndList;
    console.log(a, c, ef); // fuad nagib [ 'adib', 'mahmud' ]

}