import {
    Observable, of, from,
    fromEvent, timer, interval,
    throwError, forkJoin, combineLatest,
    filter, map, tap, debounceTime,
    catchError, EMPTY, concatMap
} from 'rxjs';

import { ajax, AjaxResponse } from "rxjs/ajax";
import { name$, storeDataOnServer, storeDataOnServerError } from './external';


const source$ = new Observable(subscriber => {
    setTimeout(() => subscriber.next('A'), 2000);
    setTimeout(() => subscriber.next('B'), 5000);
});

console.log('App has started');

// source$.subscribe(value => console.log(value));
source$
    .pipe(
        concatMap(value => of(1, 2))
    )
    .subscribe(
        value => console.log(value)
    );