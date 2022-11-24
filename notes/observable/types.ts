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
 */

/**
 * Hot Observables
 * 
 * In the case of Cold Observables, each Subscription had the values produced independently from other subscriptions.
 * With Hot Observables, all Subscriptions share the same source.
 * This is done by writing the Observable's logic in a way that it just connects to some existing source.
 * 
 * For example, we all know the DOM events, which are emitted when we click on a button, resize the window and so on.
 */


/**
 * There are two types of observables: hot and cold.
 * The main difference is that a cold observable creates a data producer for each subscriber,
 * ... whereas a hot observable creates a data producer first,
 *      ... and each subscriber gets the data from one producer, starting from the moment of subscription.


        * The first line represents the passing time and the DOM events each time the user clicks on a button.
        * So it doesn't represent any Observable or Subscription.
        * We'll just show on it when the user clicks on a button and when a regular DOM event is dispatched.

                ________________________________________________


        * At this point, if the user would click on a button, nothing would happen, as nothing is listening to this event.

                __A________B______C______________________________
                ...................................................................subscribe1

        * Let's now say we have an Observable, which when we subscribe, connects to this DOM event and each time a click event comes, its value is emitted as a next notification.

                  A     ___B____C______________________________________
                        ...................................................................subscribe2
                  A        B    C______________________________________
                                ...........................................................subscribe3           

        * So now let's subscribe to this Observable. And, as soon as we subscribe to this Observable, it will connect to the DOM event.
        * Now, this is the most important part of the Observable being Hot.
        * If we would create another Subscription to this Observable, this Subscription will also run this Observable's logic, making another connection to the same DOM event.
        * This means that if we would click on our button once more, all Subscriptions will be notified about this fact at the same time.
        * And in our case, the actual source of emissions is placed outside of the Observable's logic.
 */

/**
 * Let’s compare watching a movie on Netflix to going into a movie theater.
 * Think of yourself as an observer. Anyone who decides to watch Mission: Impossible on Netflix will get the entire movie, regardless of when they hit the play button.
 * Netflix creates a new producer to stream a movie just for you. This is a cold observable.
 * 
 * Cold observables are ones that start pushing only when you subscribe, and they start over if you subscribe again.
 */

/**
 * If you go to a movie theater and the showtime is 4 p.m., the producer is created at 4 p.m., and the streaming begins.
 * If some people (subscribers) are late to the show, they miss the beginning of the movie and can only watch it starting from the moment of arrival.
 * This is a hot observable.
 */


/**
      cold => produces the data inside => new subscriber  ...new data
	        .Each time we subscribe, the Observable emits the same set of values instantly and then completes
      hot  => from common source 	 => all subscribers ...common data
 */