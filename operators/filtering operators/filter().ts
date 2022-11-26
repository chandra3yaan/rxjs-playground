/**
 * Operators allow us to transform the notifications emitted by an Observable in countless ways.
 * Operators enable us to write complex asynchronous logic with just a few lines of code.
 
    1. We can filter emitted values.
    2. We can map emitted values.
    3. We can provide a fallback for error scenario
    4. We can start new inner subscriptions to some other Observables.
 */

/**
 * Let's start with the 'filter' operator.
 * If a value gets emitted by the source, this operator will either pass it through to the output or not.
 */

/**
 * In this coding part, we'll simulate an Observable connecting to some news feed and emitting some news posts.
 * This news feed will emit two types of items: business and sports news.
 * We'll subscribe to this Observable and, most importantly, we'll use the 'filter' operator
 *  ... to pass through only the news from the category we're interested in.
 */

import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

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

const sportsNewsFeed$ = newsFeed$.pipe(
   filter(item => item.category === 'Sports')
);

newsFeed$.subscribe(
   item => console.log(item)
);