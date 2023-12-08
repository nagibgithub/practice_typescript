{
    // function with generics


    const createArray = <T>(param: T): T[] => {
        return [param]
    };

    const res1 = createArray(true);

    const res2 = createArray<string>('bangladesh');
    const res3 = createArray<number>(222);
    const res4 = createArray<boolean>(true);


    type User = { name: string; age: number; isMarried: boolean; };
    const res5 = createArray<User>({ age: 32, isMarried: true, name: "Nagib" });



    // tuple

    const createArrayTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
        return [param1, param2]
    };

    const resTuple1 = createArrayTuple<string, string>("", "");

    const resTuple2 = createArrayTuple<string, number>('bangladesh', 1971);
    const resTuple3 = createArrayTuple<number, string>(222, "Twohundred and Twenty Two");
    const resTuple4 = createArrayTuple<boolean, number>(true, 1);


    // type User = { name: string; age: number; isMarried: boolean; };
    const resTuple5 = createArrayTuple<User, User>({ age: 32, isMarried: true, name: "Nagib" }, { age: 25, isMarried: false, name: "Adib" });

    // console.log(resTuple1);
    // console.log(resTuple2);
    // console.log(resTuple3);
    // console.log(resTuple4);
    // console.log(resTuple5);







    // add extra element

    const stuClass: string = "Six";

    const addNewStudent = <T>(student: T) => {
        return {
            ...student,
            stuClass
        };
    };

    const newStu1 = addNewStudent<User>({ name: "Nagib", age: 32, isMarried: false });
    console.log(newStu1);





}