/**
 * In this coding section, we'll try the 'from' creation function and we'll use it in two ways.
 * 
 *      1. First, we'll use it to convert an array into an Observable.
 *      2. And second, we'll convert a Promise into an Observable.
 */

import { from} from "rxjs";

// 1
const heroes$ = from(['Kaisa', 'Garen', 'Darius']);

heroes$.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('bak bakalım');
    },
});

// 2
// let's add a const 'first' and use the 'new Promise' constructor.
// And this constructor accepts a function to which resolve and reject callbacks will be passed.
// Let's now provide the logic of this Promise.
const first = new Promise((resolve, reject) => {
    resolve('Resolved!');
    //reject('Rejected!');
});

// The newly created Observable's logic will use the 'then' method on the Promise once we subscribe to it
// ...and emit its resolve value, once it's available, as a next notification and then complete.
const observableFromPromise$ = from(first);

observableFromPromise$.subscribe({
    next(value) {
        console.log(value);
    },
    error(err) {
        console.log('Error: ', err);
    },
    complete() {
        console.log('bak bakalım');
    },
});