/**
 *  RxJS throwError() operator is a creation operator used to create an observable
 *  ... that returns no items to the observer
 *  ... and immediately emits an error notification.
 * Creates an observable
 *  ... that will create an error instance and push it to the consumer as an error immediately upon subscription.
 * 
 * ♫ It just emits 'error' and nothing else.
 * ♫ This creation function is useful for creating an observable that will create an error and error every time it is subscribed to.
 * ♫ In most cases, such as in the inner return of concatMap, mergeMap, defer, and many others, you can simply throw the error, and RxJS will pick that up and notify the consumer of the error.
 * 
 * ♫ Hiçbir öge barındırmayan ve bir hata fırlatan observable oluşturan operatördür.
 * returns → Observable<never>
 * 
 */

import { throwError } from 'rxjs';

let errorCount = 0;

const errorWithTimestamp$ = throwError(() => {
    const error: any = new Error(`This is error number ${++errorCount}`);
    error.timestamp = Date.now();
    return error;
});

errorWithTimestamp$.subscribe({
    error: err => console.log(err.timestamp, err.message)
});

errorWithTimestamp$.subscribe({
    error: err => console.log(err.timestamp, err.message)
});

// Logs the timestamp and a new error message for each subscription