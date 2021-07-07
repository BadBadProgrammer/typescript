function Log(target: Function, key: string, parameterIndex: number) {
    let functionLogged = key || target.prototype.constructor.name
    console.log(`the parameter in position ${parameterIndex} at ${functionLogged} has been decorated`)
}

class Greeter {
    greetring: string
    p1: number
    constructor(@Log phrase: string, p1v: number) {
        this.greetring = phrase
        this.p1 = p1v
    }
}