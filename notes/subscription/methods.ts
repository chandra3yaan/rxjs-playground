/**
 * subscribe()
 * 
 *              → This creates a new Subscription, which executes the Observable with the provided Observer.
 *              → So each time a next notification is emitted by the Observable,
 *                  the next callback is run on the Observer that we've provided when subscribing.
 *              → And this would go on and on as long as the Subscription is active.
 * 
 *              → observable.subscribe() means "give me any amount of values, either synchronously or asynchronously"
 *                 
 */

/**
 * unsubscribe()
 * 
 *              → It's important to make sure that the Subscriptions that we don't use anymore, that we don't need anymore are closed.
 *              → So they won't cause any unwanted side effects or memory leaks.
 *              → It can get closed automatically by
 *                             the Observable's logic itself,
 *                             by emitting error or complete notifications
 *              → We can cancel the Subscription on your own by unsubscribing.
 *              →  And this can be done by using the unsubscribe method on the Subscription.
 */