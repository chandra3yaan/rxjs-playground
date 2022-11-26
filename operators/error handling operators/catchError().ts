/**
 *  It can be used to provide a fallback source in case the original source fails.
 *  This operator is interested in the error notifications only.
 *  This operator won't change the emitted values and complete notifications.
 *  It will just pass them through in an unchanged form.
 * And all notifications received by this new inner Subscription will be passed to the output.
 */

/**
 *  Let's say we have some source Observable which can emit some data and might also emit an error.
 *  We'd like to hide this error from our Observer and provide some fallback value instead.
 *  We'll apply a 'catchError' operator here and pass a fallback Observable to it.
 * 
 *      1. First, value 'A' is emitted by the source Observable, so it reaches the operator and 'catchError' passes it through.
 *      2. The same happens for the next value 'B'.
 *      3. And now, the source Observable failed and emitted an error.
 *      4. This error reaches catchError's logic, and 'catchError' won't pass this error through.
 *      5. Instead, it will use the fallback Observable we provided and create an inner Subscription to this Observable.
 *      6. At this point, everything that gets emitted by this fallback Observable will be passed to the output, including an error or complete notification.
 *      7. So if the fallback Observable would error, it will be the final error ending the main Subscription.
 */

/**
 * We'll simulate a failed HTTP request and then use 'catchError' to provide a fallback Observable so the error won't reach our Subscription.
 */

import { EMPTY, Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";


const failingHttpRequest$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.error(new Error('Timeout'));
    }, 3000);
});

console.log('App started');

failingHttpRequest$
    .pipe(
        catchError(error => of('fallback value')),
    )
    .subscribe(value => console.log(value));


// EMPTY    → So once you subscribe to it, it doesn't emit any values.
//          → It will immediately complete instead.
//          → This is useful if you would like to hide the error notification from your Observer,
//          → but don't want to provide any fallback values.


failingHttpRequest$
    .pipe(
        catchError(error => EMPTY)
    )
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('Completed')
    });