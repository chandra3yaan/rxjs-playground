import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { concatMap, map } from "rxjs/operators";

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

fromEvent(fetchButton, 'click')
    .pipe(
        // At this point we have this click event as the value.
        // What we need is the value of the endpoint input at the time of this click event.
        map(() => endpointInput.value),
        // Let's now use it and apply the 'concatMap' operator to turn this value into a new HTTP request.
        concatMap(value => ajax(`https://random-data-api.com/api/${value}/random_${value}`))
    )
    .subscribe(
        value => console.log(value)
    );