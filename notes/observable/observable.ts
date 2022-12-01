import { Observable } from "rxjs";
/** Observable
 *          is the core type of RxJS.
 *          represents the idea of an invokable collection of future values or events.
 *          are like data or event generators with some logic stored inside.
 *          The data that they generate can have
 *                  various sources
 *                  like an array of values
 *                  DOM events
 *                  HTTP requests
 *                  timers.
 *          Actually anything you want can be converted into an Observable.
 */

/**
 * The idea of an Observable is very simple.
 * It's based around a single callback function with a set of rules and guarantees regarding the interface and behavior.
 * In short, once the Observable is executed, it can emit some notifications. And there are three types of notifications:
 * 
 *      1. next
 *                  The next notification allow us to emit values.
 *                  We may want to consume the data emitted by an Observable.
 *                  We may want to provide some logic that we'd like to run for each emitted value.
 *                  In an Observable Execution, zero to infinite Next notifications may be delivered.
 *                  If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.
 *                  next*(error|complete)?
 *      2. error
 *                  We may want to provide some error handling logic if something goes wrong.
 *                  Whenever something unexpected happens or the Observable wants to signal that its data source failed,
 *                  the error notification is emitted.
 *                  and the Subscription will end automatically.
 *      3. complete
 *                  If we would like to signal that the Observable's data source has finished and there are no more values to be emitted,
 *                  we would use the complete notification.
 *                  After a complete notification gets emitted, it means that the Observable has finished its work
 *                  and the Subscription will end automatically.
 */

/*
There are three types of values an Observable Execution can deliver:

    "Next" notification: sends a value such as a Number, a String, an Object, etc.
    "Error" notification: sends a JavaScript Error or exception.
    "Complete" notification: does not send a value.
*/

/**
 * A new Observable can be created by using the 'new Observable' constructor.
 */
const demo1$ = new Observable<string>();

/**
 * The Observable constructor takes one argument: the subscribe function.
 * The 'new Observable' constructor accepts a function which is run when we subscribe to this Observable.
 * Let's try this and implement a function which will be used as this Observable's logic when we subscribe.
 * Most commonly, observables are created using creation functions, like of, from, interval, etc.
 */
const demo2$ = new Observable<string>(function subscribe(subscriber) {});

/**
 * The Observer just describes the reaction to each emitted value.
 * The Observable on its own doesn't run any code.
 * It's just a special object which has some callback function stored inside.
 */


/**
 * The following example creates an Observable to emit the string 'Alice' and 'Ben' to a subscriber.
 * The observable$ will call next on the subscriber twice with values 'Alice' and 'Ben'.
 * The observable$ that pushes the values (Alice, Ben) immediately synchronously when subscribed.
 */
const observable$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
});

/**
 * We need to somehow run the callback inside of this Observable and pass our Observer to it to make it work.
 * How can we make this Observable execute this callback?
 */

/**
 Anatomy of an Observable
        1. Creating Observables
        2. Subscribing to Observables
        3. Executing Observables
        4. Disposing Observable Executions
 */