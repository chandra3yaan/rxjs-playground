// We'll use the 'ajax' function from the RxJS library to call the API.
// The 'ajax' function is a helper function provided by RxJS.
// Such helper functions are called Creation Functions or Creation Operators.
// In short, these functions create a new Observable for us, so we don't have to use the 'new Observable' constructor
// ... and provide the whole logic every time we'd like to create a new Observable.
// For example, this 'ajax' function will create an Observable which will send an HTTP request to the endpoint provided as an argument.

import { Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

// So, let's provide the URL

const ajax$: Observable<AjaxResponse<any>> = ajax<any>('https://random-data-api.com/api/nation/random_nation');

// Now we can subscribe to our new AJAX Observable.
// and let's provide the handler for the data we will receive.
ajax$.subscribe({
    next(ajaxResponse) {
        // console.log(ajaxResponse)
        // console.log(ajaxResponse.response)
        console.log('sub 1: ', ajaxResponse.response.nationality)
    },
});

// ? what would happen if we would subscribe to this Observable multiple times.
//  ♫ So, each Subscription should make a separate HTTP call.
ajax$.subscribe({
    next(ajaxResponse) {
        console.log('sub 2: ', ajaxResponse.response.nationality)
    },
});

ajax$.subscribe({
    next(ajaxResponse) {
        console.log('sub 3: ', ajaxResponse.response.nationality)
    },
});