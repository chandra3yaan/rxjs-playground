import {
    Observable, of, from,
    fromEvent, timer, interval,
    throwError, forkJoin, combineLatest,
    filter
} from 'rxjs';

import {
    ajax, AjaxResponse
} from "rxjs/ajax";

import {
    name$,
    storeDataOnServer,
    storeDataOnServerError
} from './external';


interface NewsItem {
    category: 'Business' | 'Sports';
    content: string;
}

const newsFeed$ = new Observable<NewsItem>(subscriber => {
    setTimeout(() =>
        subscriber.next({ category: 'Business', content: 'A' }), 1000);
    setTimeout(() =>
        subscriber.next({ category: 'Sports', content: 'B' }), 3000);
    setTimeout(() =>
        subscriber.next({ category: 'Business', content: 'C' }), 4000);
    setTimeout(() =>
        subscriber.next({ category: 'Sports', content: 'D' }), 6000);
    setTimeout(() =>
        subscriber.next({ category: 'Business', content: 'E' }), 7000);
});

// The 'pipe' method allows us to provide the Pipeable Operators we want to apply here
// and it will connect all these operators together
// and return the final output Observable with all these operators applied in the provided order.

const sportsNewsFeed$ = newsFeed$.pipe(
    filter(item => item.category === 'Sports')
);

sportsNewsFeed$.subscribe(
    item => console.log(item)
);