/**
 * For each emitted value, the 'map' operator can provide a new value.
 * The new value can be calculated based on the value emitted by the source or just a new unrelated value.
 * As it was with the 'filter' operator, the 'map' operator also isn't interested in the error and complete notifications,
 *  ... which are also reemitted to the output in an unchanged form.
 */

import { map, forkJoin } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

/**
 * Let's now see some scenario in a diagram.
 * Our source will emit a few next notifications with some numeric values.
 * We'll use the 'map' operator to take each of these values and multiply it by 2, before reemitting it further.
 * 
 * map(x => x.2)
 * 3    → 6
 * 4    → 8
 * 1    → 2
 * 2    → 4
 * 9    → 18
 */

// const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomFirstName$ = ajax<any>('https://random-data-api.com/api/name/random_name')
    .pipe(
        map(ajaxResponse => ajaxResponse.response.first_name)
    );

// const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');

const randomCapital$ = ajax<any>('https://random-data-api.com/api/nation/random_nation')
    .pipe(
        map(ajaxResponse => ajaxResponse.response.capital)
    );

// const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

const randomDish$ = ajax<any>('https://random-data-api.com/api/food/random_food')
    .pipe(
        map(ajaxResponse => ajaxResponse.response.dish)
    );

// const forkJoin$ = forkJoin([randomName$, randomNation$, randomFood$]);
const forkJoin2$ = forkJoin([randomFirstName$, randomCapital$, randomDish$]);

/*
forkJoin$.subscribe({
    next([nameAjax, nationAjax, foodAjax]: AjaxResponse<any>[]) {
        console.log(`♫${nameAjax.response.first_name}♫ is from ♫${nationAjax.response.capital}♫ and likes to eat ♫${foodAjax.response.dish}♫.`);
    },
});
*/
forkJoin2$.subscribe({
    next([firstName, capital, dish]: AjaxResponse<any>[]) {
        console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
    },
});