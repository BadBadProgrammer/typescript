/**
 * class decorator
 * 1.type declaration code:
 * type ClassDecorator = <TFunction extends Function>
    (target: TFunction) => TFunction | void;
 * @param target  class constructor
 * @returns if class decorator return a value, it replace the original class constructor declaration. 
 */

type Consturctor = {
    new(...args: any[]): any
}

function toString<T extends Consturctor>(BaseClass: T) {
    return class extends BaseClass {
        toString() {
            return JSON.stringify(this)
        }
    }
}

@toString
class D {
    public foo = "foo"
    public num = 24
}

console.log(new D().toString())