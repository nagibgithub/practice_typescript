{
    // union type
    type NameList1 = "Fuad" | "Ziad";
    type NameList2 = "Nagib" | "Adib";
    type Gender = "male" | "female";
    type AllName = NameList1 | NameList2;

    const userDetails: { name: NameList1; gender: Gender; } = { name: "Fuad", gender: "male" };
    const names: AllName = "Nagib";

    type PersonalData = { personName: string; age: number; isMarried: boolean; };
    type ProfessionalData = { personName: string; age: number; designation: string; salary: number };
    type PersonAllInfo = PersonalData & ProfessionalData;

    const person1PersonalData: PersonalData = { age: 32, isMarried: true, personName: "Nagib Mahfuz" };
    const person1ProfessionalData: ProfessionalData = { age: 32, personName: "Nagib Mahfuz", designation: "Teacher", salary: 8000 };
   
    const person1AllInfo: PersonAllInfo = { ...person1PersonalData, ...person1ProfessionalData };
    const person2AllInfo: PersonAllInfo = { age: 28, designation: "teacher", isMarried: false, personName: "Adib Mahmud Ziad", salary: 5000 };

    console.log(person1AllInfo, person2AllInfo);

}