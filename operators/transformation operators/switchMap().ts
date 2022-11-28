/**
 * The 'concatMap()' operator queued the values coming from the source Observable and handled each one of them one by one waiting for the previous one to finish.
 */

/**
 * Let's now have a look at how the 'switchMap' operator handles concurrency.
 * Let's now see what will happen when the source starts emitting the values.
 * So first, let's say it emits a value 'A' which reaches the switchMap's logic.
 * And as with all flattening operators a new inner Observable is generated and the switchMap's logic subscribes to this Observable.
 * The response takes some time to finish, so we wait. 
 * And suddenly, a new value 'B' is emitted by the source Observable.
 * So, it reaches the 'switchMap' operator. And what happens next?
  
 *  The 'concatMap' operator waited for the previous inner Subscription to finish.
 *  'switchMap', on the other hand, doesn't wait for that to happen.
 *  Instead, it just cancels the previous Subscription by unsubscribing and immediately starts a new one for the new value.
 *  We can say that it switches to the new one.
 *  And let's say that this new one emits some value, which is passed to the output and then completes.
 * 
 *  ♫ So, if we're not interested in waiting for the previous Subscription to finish and would like to start the new one as quickly as possible, 'switchMap' might be a good choice.
 */

/**
 * However, be careful of an important pitfall it might have when using HTTP request for storing data on the server.
 * 
 *      Imagine a scenario in which we make such call by using 'switchMap' 
 *      and when a Subscription is made,
 *      the HTTP request starts immediately
 *      and our web browser says to the operating system to initialize the HTTP request and send some data
 *      ...
 *      When we cancel such Subscription, we won't receive the response, however, the request might have already been sent and will reach the server anyway.
 *      So, unsubscribing doesn't guarantee that the request won't reach the server.
 *      ...
 *      Also, if the next HTTP request would be sent very quickly, that previous cancelled request might reach the server after our most recent request.
 *      ...
 *      ♫ So, when using 'switchMap' together with HTTP requests, which save something on the server, the outcome might be unpredictable.
 */

/**
 * On the other hand, the 'switchMap' flattening operator is useful if you'd like to fetch something from the server and you just care about the result of the response for the latest value coming from the source Observable.
 * In that case, using 'switchMap' will make your code react the quickest, and you'll also be sure that you get the response for the latest value emitted by the source Observable.
 */