import { Observable } from "rxjs";

const observable$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('David');
    setTimeout(() => subscriber.next('Ben'), 2000);
    setTimeout(() => subscriber.next('Charlie'), 4000);
});

console.log('Subscription 1 starts');
observable$.subscribe(value => console.log('Subscription 1: ', value));
console.log('Subscription 1 ends');

// let's now add another Subscription after 1000 milliseconds.
setTimeout(() => {
    console.log('Subscription 2 starts');
    observable$.subscribe(value => console.log('Subscription 2: ', value));
}, 1000)


/**
 * Now let's create more Subscriptions to see what would happen
 * ... if you would subscribe multiple times to the same Observable.
 */