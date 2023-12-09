{
    // type guard
    type StringNumber = string | number;

    const add = (num1: StringNumber, num2: StringNumber): StringNumber => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        } else {
            return num1.toString() + num2.toString();
        }
    };

    const result = add(2, 5);
    console.log(result);

    // in guard
    type NormarUser = {
        userName: string;
    };

    type AdminUser = {
        userName: string;
        isAdmin: true;
    };

    const getUser = (user: NormarUser | AdminUser) => {
        if ("isAdmin" in user) {
            console.log(`${user.userName} is admin`);
        } else {
            console.log(`${user.userName} is not admin`);
        };
    };

    const adminUser: AdminUser = {
        isAdmin: true,
        userName: "Nagib Mahfuz Fuad"
    };

    getUser(adminUser);




}