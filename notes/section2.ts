/**
 *      1. We'll use the 'new Observable' constructor to create a new Observable.
 *      2. We'll define an Observer object with the handler for the next notifications.
 *      3. And then, we'll create a new Subscription by subscribing to our Observable.
 *      4. And finally, we'll unsubscribe from it.
 */

/**
 * The following is an Observable that pushes the values (1, 2, 3) immediately synchronously when subscribed,
 * and the value (4) after one second has passed since the subscribe call, then completes.
 * To invoke the Observable and see these values, we need to subscribe to it:
 */

import { Observable, Subscription } from "rxjs";

const document$ = new Observable<number>((subscriber) => {
    // It's a generic type and it allows us to provide the type of the emitted values by the Observable.
    // subscribe olunduğunda Observable uygulanır yani çalışır
    // ama yayınladığımız değerlerle iligi bir şey yapmaz
    console.log('Observable executed!');
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
    subscriber.next(4); // Is not delivered because it would violate the contract
});


console.log('just before subscribe');
document$.subscribe();
console.log('just before notifications');


const subscription: Subscription = document$.subscribe({
    // To provide some reaction, we need to create a handler for those next ↑ notifications.
    next(number) {
        console.log('got value ' + number);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    },
});

console.log('just after subscribe');


subscription.unsubscribe();