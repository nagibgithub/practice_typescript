{
    type User<T, A = null> = {
        name: string;
        age: number;
        company: T;
        carModel: A;
    };

    interface Company1 {
        schoolName: string;
        numberOfTeacher: number;
    }

    interface Company2 {
        companyName: string;
        numberOfEmployee: number;
    }

    const user1: User<Company1> = {
        name: "Nagib Mahfuz Fuad",
        age: 32,
        company: { numberOfTeacher: 10, schoolName: "Ghatarchar Secondary School" },
        carModel: null
    }











}