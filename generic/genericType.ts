function identity_1<T>(arg: T): T {
    return arg
}

let myIdentity: <U>(arg: U) => U = identity_1
let myIdentity_1: { <T>(arg: T): T } = identity_1

myIdentity(['1', 2, true])


interface GenericIdentityFn {
    <T>(arg: T): T
}

let myIdentity_2: GenericIdentityFn = identity_1