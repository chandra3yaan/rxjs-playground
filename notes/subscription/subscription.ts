/**
 * The Subscription is what executes the Observable.
 * We can say that it runs the callback inside of the Observable and passes our Observer object to it.
 * Subscribing to an Observable is analogous to calling a Function.
 * A Subscription is an object that represents a disposable resource, usually the execution of an Observable.
 * A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription.
 *      → A Subscription essentially just has an unsubscribe() function to release resources or cancel Observable executions.
 *      → Subscriptions also have a remove(otherSubscription) method, in order to undo the addition of a child Subscription.
 */

/**
 * If we do not put some thought into how we manage and clean up the subscriptions we create, we can cause an array of problems in our applications.
 */

/**
 * To start a new Subscription, we simply call the subscribe method on the Observable
 *  ... and we can pass the Observer as an argument.
 */

/**
 * How can we get a reference to the Subscription object?
 *      → When we call subscribe on the Observable, the Subscription object is returned.
 */

import { interval, Subscription } from 'rxjs';

const observable = interval(1000);
const subscription: Subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();

// Subscriptions can also be put together, so that a call to an unsubscribe() of one Subscription may unsubscribe multiple Subscriptions.
const observable1 = interval(400);
const observable2 = interval(300);

const subscription1: Subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription: Subscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    subscription.unsubscribe();
}, 1000);

