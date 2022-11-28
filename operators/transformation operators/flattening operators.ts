/**
 *  concatMap(), mergeMap(), switchMap(), and exhaustMap().
 */

/**
 *  That 'concatMap' operator will queue the incoming values, and as soon as the previous inner Subscription completes
 *  ... it will handle the next value in its buffer and create a new inner Subscription.
 *  Thanks to that, this operator is the safest as far as memory leaks are concerned.
 *  Because if we would forget to make sure that the inner Observable completes the second value coming from the source would never be handled
 *  ... and we would notice this issue immediately.
 
 *  Also, it's 100 percent safe as far as the order in which everything gets done is concerned.
 *  'concatMap' makes sure that all of the values emitted by the source Observable are handled one by one in the order they were emitted
 *  ... and also makes sure that the previous inner Subscription gets completed before starting a new one.
 * 
 *  ♫ So summarizing, this is the safest choice if you are not sure what to choose.
 *  ♫ It might not be the perfect fit in all situations, but it will definitely be the safest one.
 *  ☼ This operator has one disadvantage. Due to all of this safety and handling all values one by one, it might be slow and inefficient in some scenarios.
 */


/**
 *   'switchMap' operator cancels the previous inner Subscription if a new value comes from the source.
 *   So, it unsubscribes from it and creates a new Subscription for the new value immediately.
 *   So, if the inner Observable would be about making a request to the server, the 'switchMap' would unsubscribe from this Observable and would not care about the result
 *   ... and start a new Subscription, a new request for the new value coming from the source.
 * 
 *  From the memory leak perspective, if the inner Observable wouldn't complete,
 *  ...that's not a problem because each new value emitted by the source Observable cancels the previous inner Subscription.
 *  In other words, 'switchMap' unsubscribes from it so everything is cleaned up.
 * 
 *  'switchMap' has only one active inner Subscription at the same time, and it's always the one for the latest value emitted by the source.
 *   So if we receive something from the 'switchMap' operator, we are sure that it's the result of the latest value emitted by the source Observable.
 * 
 *   This operator is good for its responsiveness as it doesn't wait for the previous inner Subscription to finish before starting a new one for the latest value emitted by the source Observable.
 * 
 *   The order is predictable in most cases in a way that the values emitted by the 'switchMap' operator are always a result of the most recent value emitted by the source.
 * 
 *   There are a few cases, though, related to, for example, storing something on the server where the request from those previous cancelled Subscriptions might actually
 *   ... reach the server after the requests made later due to Internet's unpredictable latency.
 *   
 *   If you just want to read something from the server, for example, fetch autocomplete search ideas, 'switchMap' is a great choice.
 */

/**
 *   'mergeMap' operator can have multiple inner Subscriptions at the same time.
 *   It starts a new one as soon as a new value comes from the source Observable.
 *   So, it doesn't wait for the previous one to complete and it also doesn't cancel the previous Subscriptions.
 *   So we can say that those Subscriptions happen concurrently.
 *   There can be any number of those concurrent inner Subscriptions.
 *   ☼ This operator is the least safe from the memory leak perspective.
 *   You need to make sure that the inner Observables complete at some point.
 *   If they wouldn't, there might be a lot of unused Subscriptions hanging in the memory.
 * 
 *  Also, as these Subscriptions are concurrent, every time any of them receive some value, this value will be flattened to the output, so we'll get this value immediately.
 *  However, we are not able to make any strong assumptions based on the order in which we receive the notifications.
 */







/**
 * Let's start with describing how they handle concurrency
 *      → in other words, means what happens if the Flattening Operator is already having an active inner Subscription and the new value comes from the source.
 */
