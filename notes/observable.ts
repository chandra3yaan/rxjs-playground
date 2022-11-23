/** Observable
 *      Observable is the core type of RxJS.
 *      represents the idea of an invokable collection of future values or events.
 *      The Observables are like data or event generators with some logic stored inside.
 *      The data that they generate can have
 *          various sources
 *          like an array of values
 *          DOM events
 *          HTTP requests
 *          timers.
 *      Actually anything you want can be converted into an Observable.
 *      Let's say we have an Observable. Now, we need to execute it somehow so that it starts generating the data.
 *      To run the code placed inside of an Observable, we need to subscribe to it.
 *      But before we go further into the Subscription topic...
 *      ... let's see what we can do with the data emitted by the Observables.
 */

/**
 *  1. We may want to consume the data emitted by an Observable. 
 *  2. We may want to provide some logic that we'd like to run for each emitted value.
 *  3. We may want to provide some error handling logic if something goes wrong.
 */