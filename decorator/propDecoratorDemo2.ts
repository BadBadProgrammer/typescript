/**
 * property decorator:
 * type PropertyDecorator = (target:Object,propertyKey: string|symbol) => void
 * @param target As static member, it is class constructor; as instance member, it is class prototype chain
 * @param propertyKey: property name
 * @returns ignore
 */

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function observable(target: any, key: string): any {
    // prop -> onPropChange
    const targetKey = "on" + capitalizeFirstLetter(key) + "Change";

    target[targetKey] = function (fn: (prev: any, next: any) => void) {
        let prev = this[key];
        Reflect.defineProperty(this, key, {
            set(next) {
                fn(prev, next);
                prev = next;
            }
        })
    };
}

class E {
    @observable
    foo = -1;

    @observable
    bar = "bar";
}

const e = new E();

e.onFooChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`))
e.onBarChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`))

e.foo = 100; // -> prev: -1, next: 100
e.foo = -3.14; // -> prev: 100, next: -3.14
e.bar = "baz"; // -> prev: bar, next: baz
e.bar = "sing"; // -> prev: baz, next: sing