{
    // nullable types
    const serarchName = (value: string | null) => value ? console.log("searching") : console.log("not searching");
    // serarchName(null);


    // unknown types
    const getSpeedInMeter = (value: unknown) => {
        if (typeof value === 'number') {
            const result = (value * 1000) / 3600
            console.log(`${result} number`);
        } else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            console.log(`${result} string`);
        } else {
            console.log("wrong input");
        }
    };
    // getSpeedInMeter(null); // --> wrong input


    // never
    const errMessage = (msg: string): never => {
        throw new Error(msg);
    }

    // errMessage("testing");



}


