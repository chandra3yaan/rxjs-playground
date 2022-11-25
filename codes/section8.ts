// We'll use the 'of' creation function and pass a few arguments to it.

import { of, Observable } from "rxjs";

// We can pass all values that will be emitted by this Observable created using the 'of' creation function.
// Let's use the string values:
const heroes$ = of('Kaisa', 'Garen', 'Darius', 'Sett');

// same ↑↓
const names$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
    subscriber.complete();
});

// We can see that all values were emitted immediately after subscribing as we've expected.
// We also expect this Observable to emit a complete notification directly after emitting the last value.
heroes$.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('bak bakalım');
    },
});


/**
 * ? Let's now see how does a Creation Function work?
  
 * Let's implement a Creation Function, which will work like 'of' creation function.
 *          1. So, it will accept multiple arguments with the values
 *          2. and create and return an Observable
 *          3. which will emit those values and complete.
 * Let's try to implement it.
 */
// We'll call this function 'ourOwnOf'.
// Let's say it will accept 'string' values only.
//  it will return an Observable returning string values.
function ourOwnOf(...args: string[]): Observable<string> {
    // let's return and a new Observable.
    return new Observable<string>(subscriber => {
        // We'll simply iterate over the arguments using the 'for' loop.
        for (let i = 0; i < args.length; i++)
        {
            subscriber.next(args[i]);
        }

        subscriber.complete();
    });
}

const heroes2$ = ourOwnOf('Kaisa', 'Garen', 'Darius', 'Sett');