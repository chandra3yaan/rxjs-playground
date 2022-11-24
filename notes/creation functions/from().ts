/**
 * Now we will cover the 'from' creation function.
 * It is used to convert other types into an Observable.
 * For example, it can convert an array into an Observable.
 *  from([A, B, C])
 * 
 * ♫ It works the same way as the 'of' creation function
 *      → however, in the case of 'from', you provide an array with the values instead of providing multiple arguments.
 * 
 * ♫ Another popular usage of 'from' is to create an Observable from Promise.
 *      → Once we subscribe to such Observable, the Promise's resolve value will be emitted as a next notification and then it will complete.
 * 
 *  1. from([A, B, C])
 *  2. from(promise)
 *  3. from(an observable)
 *  3. from(...other sources)
 */

/**
 * ♫ Another popular usage of 'from' is to create an Observable from Promise.
 * It is useful when we already have some code or API exposed as a Promise
 * ... and we'd like to use this Promise in the Observable world to be able to use all of the tools provided by RxJS.
 */