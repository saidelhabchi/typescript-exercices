interface GenericIdentityFn<T> {
    (arg: T): T;
    identity<T>(arg: T): T ;
}

interface GenericArray<T> {
    (arg : T[]) : T[]
}