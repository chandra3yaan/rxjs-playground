import { forkJoin } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

// ☼ for example  →  Mike is from New Delhi and likes to eat pasta.
// ☼ for example  →  ___ is from ____ and likes to eat ______.

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe((ajaxResponse) => console.log(ajaxResponse));
// randomNation$.subscribe((ajaxResponse) => console.log(ajaxResponse));
// randomFood$.subscribe((ajaxResponse) => console.log(ajaxResponse));


randomName$.subscribe({
    next(ajaxResponse: AjaxResponse<any>) {
        console.log('First Name: ', ajaxResponse.response.first_name)
    },
});

randomNation$.subscribe({
    next(ajaxResponse: AjaxResponse<any>) {
        console.log('Capital: ', ajaxResponse.response.capital)
    },
});

randomFood$.subscribe({
    next(ajaxResponse: AjaxResponse<any>) {
        console.log('Food: ', ajaxResponse.response.dish)
    },
});


/**
 *  Now, let's go back to our main goal.
 *  We'd like to somehow take all of these values and put them together into one sentence.
 *  The important thing here is that the order in which the responses come is ♫unpredictable♫.
 *  We can see the order sometimes is different.
 *  Sometimes we get the food as last, sometimes in the middle.
 *  So we need to take care of two important things.
 *      1. One is to have all the responses available together in one place
 *      2. and to console log the sentence as soon as all the responses are ready.
 * 
 *      ♫ Both of these things are solved by Observable created using the 'forkJoin' creation function.
 */

// Now, the 'forkJoin' function accepts an array of Observables.
// So let's pass all of our sources...
const forkJoin$ = forkJoin([randomName$, randomNation$, randomFood$]);

// Applying that to our example, it will make three HTTP calls, emit an array with all the responses in
forkJoin$.subscribe({
    next([nameAjax, nationAjax, foodAjax]: AjaxResponse<any>[]) {
        console.log(`♫${nameAjax.response.first_name}♫ is from ♫${nationAjax.response.capital}♫ and likes to eat ♫${foodAjax.response.dish}♫.`);
    },
});
