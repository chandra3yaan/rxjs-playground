import {
    Observable, of, from,
    fromEvent, timer, interval,
    throwError, forkJoin, combineLatest,
    filter, map, tap, debounceTime,
    catchError, EMPTY
} from 'rxjs';

import {
    ajax, AjaxResponse
} from "rxjs/ajax";

import {
    name$,
    storeDataOnServer,
    storeDataOnServerError
} from './external';


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