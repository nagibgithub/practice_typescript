{
    // access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _pin: number;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number, _pin: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
            this._pin = _pin;
        };

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        };

        getBalance() {
            return this._balance;
        };
    };

    // class StudentAccount extends BankAccount {
    //     test() {
    //         this._balance = 
    //     }
    // }

    const userAcc1 = new BankAccount(111, "Nagib Mahfuz Fuad", 1000, 111);
    userAcc1.addDeposit(321);
    const result = userAcc1.getBalance();
    console.log(result);







    // 
}