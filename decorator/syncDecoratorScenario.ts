function func2(param: number) {
    return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...params: any[]) => Promise<any>>) => {
        let oldFunc = descriptor.value;
        descriptor.value = async function () {
            var result = await oldFunc.apply(this, arguments);
            await delay(param) //some async operation
            console.log("delay 3");
            return result;
        }
    }
}

class Test {
    @func2(1000)
    async func1(timout: number) {
        await delay(timout) //some async operation
        console.log("delay 1");
        await delay(timout) //some async operation
        console.log("delay 2");
    }
}

new Test().func1(1000);
// Util function 
async function delay(timeout: number) {
    return new Promise<void>((resolve) => setTimeout(() => {
        resolve();
    }, timeout));
}