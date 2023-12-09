{
    // mapped types
    const arrNumber: number[] = [1, 2, 3];
    const arrString: string[] = ['1', '2', '3']; // manually

    const arrStringMap: string[] = arrNumber.map(element => element.toString());

    // console.log(arrStringMap);

    type ObjRandom = { height: string; width: number; depth: boolean; };

    type ObjString = {
        [key in keyof ObjRandom]: boolean;
    }
    type AreaNumber<T> = {
        [key in keyof T]: number;
    }

    const area: AreaNumber<ObjRandom> = {
        depth: 23,
        height: 23,
        width: 45
    }




}