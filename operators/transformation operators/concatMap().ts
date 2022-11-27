/**
 *  The Flattening Operators create new inner Subscriptions to the provided Observables generated based on the next notifications received from the source.
 *  Then, they pass the emitted values from those inner Subscriptions to the output.
 *  This can be useful if we want to, for example, query the server each time the user changes the input values.
 */

/**
 *  In this part, we'll create an Observable which will emit two values spread in time.
 *  And then, we'll use the 'concatMap' Flattening Operator to map the emitted values into another Observable.
 *  Let's start with defining our source Observable.
 *  I'll create a new const 'source$' and use the 'new Observable' constructor.
 *  And as the logic, we'll use 'setTimeout' and call 'subscriber.next' with value 'A' after two seconds.
 *  And let's copy this one more time to emit value 'B' after five seconds.
 */

import { Observable, of } from "rxjs";
import { concatMap } from "rxjs/operators";

const source$ = new Observable(subscriber => {
    setTimeout(() => subscriber.next('A'), 2000);
    setTimeout(() => subscriber.next('B'), 5000);
});

/**
 *  I'll use it here and subscribe to it.
 *  And let's console log every value, like this.
 
    source$.subscribe(value => console.log(value));

 *  And after two seconds, we can see the value 'A',
 *  and after five seconds value 'B' is printed to the screen.
 *  We can see that our source Observable functions properly.
 *  Let's now map each emitted value by this Observable into another Observable.
 *  We can achieve this by using a Flattening Operator, for example, 'concatMap'.
 *  we provide a function to which the value, the emitted value will be passed and which can return an Observable.
 *  So for now, let's make this inner Observable simple.
 *  We'll return here an Observable created by using the 'of' function, which will emit values '1' and '2' and then complete.
 */

source$
    .pipe(
        concatMap(value => of(1, 2))
    )
    .subscribe(
        value => console.log(value)
    );