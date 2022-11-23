/*
It ended up with a lot of memory leaks, unpredictable behavior and other hard to trace bugs.
We'll have a look at the concepts of streams and reactive programming which are used by the Observables.
I'll show you how to easily create new Observables by using Creation Functions
the Pipeable Operators, which allows us to transform the emitted values in countless ways.
You can map or filter the emitted values.
The Subjects are an extension of Observables and they can be used to emit events or other values to multiple places in our code.
*/


// Let's now see how to create a new Observable and subscribe to it to make it work.

const observer = { next: (value: string) => console.log(value) }

/**
 * The Subscription is what executes the Observable.
 *  → We can say that it runs the callback inside of the Observable and passes our Observer object to it.
 * 
 * Each Observable exposes the subscribe method.
 * So to start a new Subscription, we simply call the subscribe method on the Observable
 * and we can pass the Observer as an argument.
 */

/**
 * subscribe()  → This creates a new Subscription, which executes the Observable with the provided Observer.
 *              → So each time a next notification is emitted by the Observable,
 *                  the next callback is run on the Observer that we've provided when subscribing.
 *              → And this would go on and on as long as the Subscription is active.
 *              → It's important to make sure that the Subscriptions that we don't use anymore, that we don't need anymore are closed.
 *              → So they won't cause any unwanted side effects or memory leaks.
 *              → It can get closed automatically by the Observable's logic itself, by emitting error or complete notifications,
 *                  or you can cancel the Subscription on your own by unsubscribing.
 *                  And this can be done by using the unsubscribe method on the Subscription.
 */

/**
 * How can we get a reference to the Subscription object?
 *      → When we call subscribe on the Observable, the Subscription object is returned.
 */