interface Lengthwise {
    length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    return arg
}

loggingIdentity({ length: 10, value: 2, ddd: 'fff' })