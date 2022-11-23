import { Observable } from "rxjs";

/**
 * The task is to create an Observable
 *  ...which will emit increasing values in 500-millisecond intervals after subscribing.
 * 
 * Then a Subscription should be made to this Observable immediately when the app starts
 *  ...and all emitted values should be console logged.
 * 
 * Finally, the Subscription should be ended by unsubscribing
 *   ...after seven seconds after the app starts.
 */

const interval$ = new Observable<number>(subscriber => {
    let counter = 1;

    const intervalId = setInterval(() => {
        console.log('Emitted', counter);
        subscriber.next(counter++);
    }, 500);

    // ? What is the purpose of the Teardown logic?
    // It can be used to perform a clean-up or cancellation if the Observable initialize some resources.
    // ? Let's assume that an Observable has some Teardown logic provided. When will it be executed?
    // Whenever the Subscription  ends
    return () => {
        clearInterval(intervalId);
    };
});

const subscription = interval$.subscribe(value => console.log(value));

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 7000);