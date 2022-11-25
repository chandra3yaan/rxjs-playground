// let's create our Observable by using the 'timer' creation function. 

import { Observable, timer } from "rxjs";

console.log('App started');

const timer1$ = timer(2000);
const timer2$ = new Observable<number>(suscriber => {
    const timeoutId = setTimeout(() => {
        suscriber.next(0);
        suscriber.complete();
    }, 2000);
    return () => clearTimeout(timeoutId);
});

timer1$.subscribe({
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

timer2$.subscribe({
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