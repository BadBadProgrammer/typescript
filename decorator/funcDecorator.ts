function LogOutput(target: Function, key: string, descriptor: any) {
    let originalMethod = descriptor.value
    let newMethod = function (...args: any[]): any {
        let result: any = originalMethod.apply(this, args)
        if (!this.loggedOutput) {
            this.loggedOutput = new Array<any>()
        }
        this.loggedOutput.push({
            method: key,
            parameters: args,
            output: result,
            timestamp: new Date()
        })
        return result
    }
    descriptor.value = newMethod
}

class Calculator {
    @LogOutput
    double(num: number): number {
        return num * 2
    }
}

let calc = new Calculator()
calc.double(11)

console.log(calc.loggedOutput)