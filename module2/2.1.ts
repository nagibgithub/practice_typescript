{
    // type assertion

    let anything: any;

    anything = "Nagib Mahfuz Fuad";

    (anything as number);

    const sumNumber = (num: number | string | null | undefined | ""): number | undefined => {
        if (typeof num === null) {
            return undefined
        }

    };

    const rerult = sumNumber(12) as undefined;
}