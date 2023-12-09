{
    // spread operator
    const fnds1: string[] = ["adib", "nadib", "khalid"];
    const fnds2: string[] = ["nagib", "sakib", "tamid"];

    const allFriends: string[] = [];
    allFriends.push(...fnds1, ...fnds2);

    const personalInfo: { name: string; age: number; isMarried: boolean; } = { age: 32, isMarried: true, name: "Nagib" };
    const professopnalInfo: { companyName: string; salary: number; position: string; } = { companyName: "Ghatarchar School", salary: 10000, position: "Teacher" };

    const allInfo = { ...personalInfo, ...professopnalInfo };

    const sumAllNumber = (...number: number[]) => {
        let i: number = 0;
        number.forEach((ele: number) => i = i + ele);
        return i;
    };

    console.log(sumAllNumber(1, 2, 3, 4, 10, 20, 50));





}