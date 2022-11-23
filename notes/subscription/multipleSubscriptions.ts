import { Observable } from "rxjs";

const observable$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('David');
    setTimeout(() => subscriber.next('Ben'), 2000);
    setTimeout(() => subscriber.next('Charlie'), 4000);
});

/**
 * Multiple Subscriptions
 * 
 *         What would happen if we would call the subscribe method on the same Observable multiple times?  
 */

/**
 * We have created a new Subscription and it's running, just as previously.
 */
observable$.subscribe(value => console.log('Subscription 1: ', value));
/**
 * Now, what would happen if we would create one more Subscription to the same Observable and use the same Observer?
 * ♫ In this case, the new Subscription will run the Observable's logic once more
 * ♫ and it will produce the data, the emissions independently from the first Subscription.
 * ♫ Each Subscription is a separate execution of the Observable.
 * ♫ The logic of the Observable will be run independently for each new Subscription.
 */
observable$.subscribe(value => console.log('Subscription 2: ', value));
/**
 * So, if you would create another Subscription to the same Observable but with a different Observer provided,
 *  ♫ the logic inside of the Observable would be run once more, again, independently from the other executions.
 *  ♫ And the only difference here is that the reaction to the emitted values might be different as we've provided a different Observer.
 */