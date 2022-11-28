import {
    Observable, of, from,
    fromEvent, timer, interval,
    throwError, forkJoin, combineLatest,
    filter, map, tap, debounceTime,
    catchError, EMPTY, concatMap
} from 'rxjs';

import { ajax, AjaxResponse } from "rxjs/ajax";
import { name$, storeDataOnServer, storeDataOnServerError } from './external';


const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

/**
 *  In this example, we'll query the Random Data API using an HTTP request.
 *  In this case, the user will be able to provide the endpoint which will be used for this query.
 
 *  For example, the user can type in 'food' into this input field and click 'Fetch'.
 *  In result, the app will call the 'random food' endpoint and print the response to the console.
 *  If the user would type in 'name', the endpoint for random name will be called.
 
 *  We'd like our HTTP requests to be triggered by clicking on this 'Fetch' button.
 *  So let's start with that.
 *  Let's use the 'fromEvent' creation function
 *  We'll now use the 'pipe' method on the Observable to apply some operators.
 */
/*
fromEvent(fetchButton, 'click')
    .pipe(
        // At this point we have this click event as the value.
        // What we need is the value of the endpoint input at the time of this click event.
        map(() => endpointInput.value),
        // Let's now use it and apply the 'concatMap' operator to turn this value into a new HTTP request.
        // ♫ ♫ ♫ Bir hata yönetimi olmadan burada bir hatayla karşılaşıldığında ana Observable da kendini sonlandırır.
        concatMap(value => ajax(`https://random-data-api.com/api/${value}/random_${value}`))
    )
    .subscribe({
        next(value) { console.log(value) },
        error(err) { console.log('Error: ', err) },
        complete() { console.log('completed') },
    });
*/
/**
 * This is important to remember as the error will also end our main/outer Subscription, so everything will stop working.
 * As a side note, the Flattening Operator will also unsubscribe from the source Observable at this point,
 *  ... as it's no longer relevant to keep it because nothing more will happen there.
 *  Let's now see how can we prevent this error from stopping our main Subscription?
 *  So, let's try to apply the 'catchError' operator after the 'concatMap' operator to catch the error notification
 *  ... so it doesn't reach our Observer.
 */

fromEvent(fetchButton, 'click')
    .pipe(
        // At this point we have this click event as the value.
        // What we need is the value of the endpoint input at the time of this click event.
        map(() => endpointInput.value),
        // Let's now use it and apply the 'concatMap' operator to turn this value into a new HTTP request.
        // ♫ ♫ ♫ Bir hata yönetimi olmadan burada bir hatayla karşılaşıldığında ana Observable da kendini sonlandırır.
        concatMap(value => ajax(`https://random-data-api.com/api/${value}/random_${value}`)
            .pipe(
                //catchError(() => EMPTY)
                catchError(error => of(`Could not fetch data: ${error}`))
            )),
        /**
         *   ♫ ♫ ♫ We can see that our main Subscription completes.
         *   In this example, we'd like our app to continue working after we try to fetch the data from some incorrect endpoint.
         *   Let's now have a look at how could we change things to hide the error and keep the main, the outer Subscription working further.
         *   So, even after an error gets emitted by the inner Observable, the main/outer Subscription wouldn't stop
         *    ... and would be able to handle further notifications emitted by the source Observable.
         *   catchError() operatörünü contactMap içine taşıyoruz
         *   ↑
         */
        /**
         *  So we have successfully handled the error, so it's not ending the main/outer Subscription
         *   ... and our app keeps on working even after the Ajax call failed. 
         */
        // catchError(() => EMPTY)
    )
    .subscribe({
        next(value) { console.log(value) },
        error(err) { console.log('Error: ', err) },
        complete() { console.log('completed') },
    });


// concatMap()  → I've stopped clicking and the responses kept on coming for quite a long time.
//              → It's not because my Internet connection or the server is very slow. It's because of the behavior specific to the 'concatMap()' operator.
//              → In the case we just saw when we quickly emitted a ton of values by clicking, they were actually queued by the 'concatMap' operator and there was only one request in progress at once.
//              → Each Flattening Operator has a different way of handling concurrency 
//              → The difference is in how they handle concurrency.