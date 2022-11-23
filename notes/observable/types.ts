/** 
 * Types Of Observable
 
 * Let's now talk about the types of the Observables, depending on the source of emissions.
 */

/**
 * We had an Observable which when we subscribed, produced and emitted values, sometimes immediately, sometimes with a time delay.
 * We have even created an Observable which used intervals.
 * All those Observables produced the values independently for each Subscription.
 * 
 
    _________A_______________B____________C______________
                    _________A_______________B____________C______________

 * The Cold Observables don't always need to emit the exact same values at the same points of time after subscribing. 
 * All values were produced independently for each Subscription, and this is what describes them as Cold Observables.
 */

/**
 * In this example, we'll see a Cold Observable which will produce different results for each subscription.
 * Let's imagine an Observable, which would call an HTTP endpoint each time we subscribe.
 * It would still be a Cold Observable as each Subscription would produce a separate HTTP request.
 * Now, let's say we create three Subscriptions to such Observable at the same time.
 * This means that each Subscription will run the Observable's logic independently.
 * So, there will be a separate request made for each one of them.
 * The Observable's logic will wait for the HTTP response and then emit it as a next notification and complete.
 * And as we know, the servers sometimes respond very quickly, sometimes slowly,
 * ... and there might also be some timeout or other failure.
 * 
        1. Let's say the first to receive the response is the second Subscription.
                And the Observable also emits a complete notification, ending the Subscription as it has nothing more to do.
        2. Then, after some more time, the first call gets the response, so the Observer for the first Subscription would receive the response
                ...and the complete notification.
        3. And lastly, let's say the third response timed out or there was some server error.
        _________B|c_______________________________________
        __A|c______________________________________________
        ____________________________________Xerr___________

 * A value with the response is emitted.
 * So as you can see, a Cold Observable can also emit different values for each Subscription.
 * This Observable produced a separate, independent HTTP call for each Subscription.
 * 
 * 
 */