export class QueryArrayResult<T> {
    constructor(public message?: string, public result?: Array<T>) {}
}
export class QuerySingleResult<T> {
    constructor(public message?: string, public result?: T) {}
}
