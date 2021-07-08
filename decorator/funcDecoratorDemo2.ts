/**
 * method decorator:
 * 
 * type MethodDecorator = <T>(
 *      target: object,
 *      propertykey: string | symbol
 *      descriptor: TypedPropertyDescriptor<T>
 *  ) => TypedPropertyDescriptor<T> | void
 * @param target As static member, it is class constructor; as instance member, it is class prototype chain
 * @param propertyKey property name
 * @param descriptor 
 */

function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value

    descriptor.value = function (...args) {
        console.log('params: ', ...args)
        const result = original.call(this, ...args)
        console.log('result: ', result)
        return result
    }
}

class F {
    @logger
    add(x: number, y: number) {
        return x + y
    }
}
let a = new F()
a.add(1, 2)