function identity<T>(arg: T): T {
    return arg
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg,length)
    return arg
}