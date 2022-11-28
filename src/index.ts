import {
    Observable, of, from,
    fromEvent, timer, interval,
    throwError, forkJoin, combineLatest,
    filter, map, tap, debounceTime,
    catchError, EMPTY, concatMap,
    Subject
} from 'rxjs';

import { ajax, AjaxResponse } from "rxjs/ajax";
import { name$, storeDataOnServer, storeDataOnServerError } from './external';


const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

/**
 * In this coding section, we'll use a Subject to see how it can be used to multicast values to all active Subscriptions.
 */

// I'll create a const 'value$' and use the constructor 'new Subject' which we need to import from 'rxjs'.
// Let's also provide the type of the emitted values which in our case will be 'string'.
// Now, we can add new Observers by creating new Subscriptions to it.
const value$ = new Subject<string>();


fromEvent(emitButton, 'click')
    .pipe(
        map(() => inputElement.value)
    )
    .subscribe({
        next(value) { value$.next(value) },
    });
    //.subscribe(value$);


fromEvent(subscribeButton, 'click').subscribe({
    next() {
        console.log('New Subscription');
        value$.subscribe(value => console.log(value));
    },
});
