{
    // conditional type
    type A1 = null;
    type B1 = undefined;

    type X = A1 extends null ? true : false;
    type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;

    type Vehicles = { car: string; bike: string; ship: string; };

    type CheckVehicle<T> = T extends keyof Vehicles ? true : false;

    type HasBike = CheckVehicle<"bike">


}