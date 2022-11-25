// let's create our Observable by using the 'timer' creation function. 

import { Observable, interval } from "rxjs";

console.log('App started');

const interval1$ = interval(2000);
/*
const timer2$ = new Observable<number>(suscriber => {
    const timeoutId = setTimeout(() => {
        suscriber.next(0);
        suscriber.complete();
    }, 2000);
    return () => clearTimeout(timeoutId);
});
*/
const subscription1 = interval1$.subscribe({
    next(value) {
        console.log(value);
    },
    error(err) {
        console.log(err);
    },
    complete() {
        console.log('completed');
    },
});

setTimeout(() => {
    const subscription2 = interval1$.subscribe({
        next(value) {
            console.log(value);
        },
        error(err) {
            console.log(err);
        },
        complete() {
            console.log('completed');
        },
    });
}, 4000);

setTimeout(() => {
    subscription1.unsubscribe();
}, 8000);