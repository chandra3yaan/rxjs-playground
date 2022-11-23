/**
 * Sometimes this logic can be very simple, for example, it can emit a few static values after we subscribe and complete.
 * On the other hand, we can have much more complicated Observables.
 */

import { Observable } from "rxjs";

// 1 => We'll create an Observable which won't emit any values.
const section4a$ = new Observable<any>(function subscribe(subscriber) { });
// 2 => Let's add a couple of console logs to have more feedback about what's happening.
const section4b$ = new Observable<any>(function subscribe(subscriber) {
    console.log('Observable executed!');
});

// 3 => Now, let's emit a single value, which in other words, means emitting a single next notification.
const section4c$ = new Observable<number>(function subscribe(subscriber) {
    console.log('Observable executed!');
    subscriber.next(10);
});

/**
 * 4
 * Let's emit two more values.
 * We'll do it in a way that the first two values will be emitted immediately after subscribing
 * ... and the third value will be emitted two seconds after that.
 */
const section4d$ = new Observable<any>(function subscribe(subscriber) {
    subscriber.next('Kaisa');
    subscriber.next('Xayah');
    setTimeout(() => subscriber.next('Tristina'), 2000);
    setTimeout(() => subscriber.complete(), 2000);
    setTimeout(() => subscriber.error(new Error('Failure')), 8000);

    return () => {
        console.log('teardown logic was run');
    };
});




// 1 => We are not sure what happened and we are not even sure that anything happened at all.
section4a$.subscribe();
// 2 => So let's add a couple of console logs to have more feedback about what's happening. ↑
console.log('Before subscribe');
section4b$.subscribe();
console.log('After subscribe');

/*
Before subscribe
Observable executed!
After subscribe
*/


/**
 * 3
 * Now, let's add a handler for the next notifications. We could create an Observer object with the next
 * We can create an Observer object with the next method defined.
 * The new thing is that we've emitted a value, which we've then console logged in the next notification handler.
 */
section4c$.subscribe({ next(hero) { console.log(hero) } });

// 4
console.log('Before subscribe');
section4d$.subscribe({
    next(heroes) { console.log(heroes) },
    //error(err) { console.log(err) },
    complete() { console.log('complete') }
});
console.log('After subscribe');