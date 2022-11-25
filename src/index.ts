import { Observable, of, from, fromEvent, timer, interval, throwError } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
    name$,
    storeDataOnServer,
    storeDataOnServerError
} from './external';

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
