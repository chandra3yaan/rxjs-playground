/**
 * So far, we've created the Observables manually by using the 'new Observable' constructor and passing our logic of the Observable as a callback.
 * Often the logic of the Observable can get quite complicated
 *  ... and defining it each time we'd like to create a new one might not be the best idea.
 */

/**
 * Even with a simple logic like the one in this code,
 *  ...there's a lot of boilerplate which we need to repeat each time we would like to create a similar Observable.
 */

import { Observable } from "rxjs";

const document$ = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete();
});

/**
 * RxJS comes here with a lot of help.
 * For all the popular and common scenarios, RxJS has an extensive set of Creation Functions.
 * A Creation Function provides an easy way to create a new Observable with certain popular behavior.
 * RxJS provides many Creation Functions.
 * We have already seen the 'ajax' function, which allows us to create Observables making HTTP calls.
 */

/**
 * First, the 'of' creation function, which just emits the values provided as arguments and completes.
 * Next will be the 'from' function, it can convert things like arrays, promises, iterables into an Observable.
 * The 'fromEvent' creation function allows us to create an Observable from some event target. 
 * 'interval' and 'timer' functions will generate an Observable which emits notifications with some delay or in intervals.
 * 'forkJoin' accepts an array of Observables as input. 
 * 'combineLatest' also accepts multiple input Observables. Each time any of them emits something new, a combined set of the latest values will be emitted as an array.
 */