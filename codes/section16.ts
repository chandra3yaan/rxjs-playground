import { map, forkJoin } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

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