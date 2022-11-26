/**
 * The 'filter' operator passed the value or not.
 * The 'map' operator modified the value.
 * The 'debounceTime' operator introduces the time dimension.
 *      It is about debouncing the incoming values.
 *      The error and complete notifications are not delayed and are passed through immediately in an unchanged form.
 */

/**
 *  1. So if we would provide two seconds as the debounce time
 *  2. and our source Observable would emit quickly three values.
 * 
 
        The 'debounceTime' operator would wait for the emissions to settle down,
          and after two seconds of no new emissions, it would reemit just the latest value.

 * This is useful to avoid putting excessive pressure on some recalculation logic to avoid performance issues.
 * or to reduce the frequency of HTTP requests sent to the server.
 */

/**
* We'll make an Observable which will emit the value of this slider each time the user moves it.
* We'll also use the 'debounceTime' operator to emit the value after the users stop sliding and the value settles for a short time.
* This is useful if the logic which we would like to run for the updated value would require a lot of calculations and might cause slowdowns.
* 
* Another case is when we would like to store the setting of this slider on the server.
* Without debouncing every minor movement of the slider would trigger a new HTTP request,
* so in the short while, dozens of new HTTP requests might be generated.
*/

import { fromEvent, debounceTime, map } from "rxjs";

/**
 * console.log(sliderInput);
 *      → input id="slider" class="form-control" type="range" min="0" max="100">
 */

const sliderInput: HTMLInputElement = document.querySelector('input#slider');

const slider$ = fromEvent(sliderInput, 'input')
  .pipe(
    debounceTime(2000),
    map(event => (event.target as HTMLInputElement)['value'])
  );

slider$.subscribe(value => console.log(value));