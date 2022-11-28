/**
 * 'mergeMap' allows us to have multiple inner Subscriptions going on at the same time.
 * 
 * So first, the value 'A' gets emitted by the source Observable, which reaches the 'mergeMap' operator.
 * And this creates a new Subscription to the inner Observable.
 * And during the course of this inner Subscription made by 'mergeMap', let's say the source Observable emits one more value 'B'.
 * At this point, even though we already have one ongoing inner Subscription, 'mergeMap' will create a new concurrent one.
 * 
 *      And as the time goes on, let's say the first inner Subscription receives a value and completes.
 *          This value will, of course, be reemitted to the output.
 * 
 * As we wait for the second inner Subscription to receive some values, let's say the source Observable emits another value 'C'.
 * And this also creates a new Subscription immediately. Let's say that this time the response was quick.
 * 
 *      So, the value will be reemitted to the output and also, as previously, a complete notification was emitted, which ended this inner Subscription.
 *      Lastly, let's say the second inner Subscription receives the value, which gets reemitted by our Flattening Operator to the output.
 *      And also this inner Subscription received a complete notification which ends this Subscription and leaves everything clean without any memory leaks.
 * 
 *      çıktılar        → A, C, B
 */

/**
 *   As you can see, 'mergeMap' emits the values to the output whenever any of the inner Subscriptions receive some value.
 *   Everything is instant and concurrent.
 */