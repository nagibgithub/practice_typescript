{
    type ToDo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<ToDo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        return data;
    }
    getTodo();
    // console.log(getTodo());



    type DemoData = { demoData: string };

    // promise
    const createPromise = (): Promise<DemoData> => {

        return new Promise<DemoData>((resolve, reject) => {
            const data: DemoData = { demoData: "demo data" };
            if (data) {
                resolve(data);
            } else {
                reject("Faild to load data");
            }
        });

    };

    // calling create promise function 
    const showData = async (): Promise<DemoData> => {
        const data: DemoData = await createPromise();
        return data;
    };

    showData();

}