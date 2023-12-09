{
    // Pick
    type User = {
        uerName: string;
        age?: number;
        isMarried: boolean;
        readonly companyName: "Ghatarchar School"
    };

    const user1: Pick<User, "age" | "uerName"> = {
        uerName: "Nagib Mahfuz",
        age: 32,
    };

    // Omit
    const user2: Omit<User, "age" | "isMarried"> = {
        companyName: "Ghatarchar School",
        uerName: "Adib Mahmud"
    };

    // Required
    type UserRequired = Required<User>;

    // Partial
    type UserPartial = Partial<User>;

    // Readonly
    type UserReadOnly = Readonly<User>;

    // Record
    type UserRecord = Record<number, boolean>;
    const user4: UserRecord = {
        1: true,
        2: false,
        3: true
    };

}