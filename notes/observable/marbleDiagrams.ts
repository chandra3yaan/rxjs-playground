/**
 * We will use the marble diagrams, which are a graphical way of presenting the behavior of the Observables and various Subscription scenarios.
 */

/**
 * Let's start with a simple timeline.
 * 
    ________________________________________________________________________

 * It represents the passing time after we subscribe to an Observable.
 * And, as long as the Subscription is active, we might expect some emissions to happen and we are able to picture them on this timeline.
 * If we would have an Observable which never emits anything, we would only see the timeline and nothing else.
 
    ________________________________________________________________________
 */

/**
 * Let's say we have a scenario in which the Observable emits some value 'A' after some time.
   
    _________A_______________________________________________________________

    Then some more time passes and it emits a value 'B'

    _________A_______________B________________________________________________

    And even later, it emits a value 'C'

    _________A_______________B____________C__________________|complete__________________
    _________A_______________B____________C__________________XERROR__________________

                        ♫ once the error or complete notification has been emitted, it's the end of the Subscription.

    Those three marbles represent three next notifications with some values.
    We can easily see the order and approximate time at which each one of them was emitted.
    The Observable might emit any number of next notifications.
 */

/**
        ♫ The source of those emissions might have been some interval counter.

    __1_2_3_4_5_6_7_8_9_10_11_...............

            ♫ Those emissions might have been caused by mouse move events or text input events or some intense clicking on a button.
            ♫ The scenarios so far away, very general and hard to identify.

    __a_____b__c______d___e_f_g...............

                ♫ That could have been an HTTP request

    __a|complete_______________...................

                ♫ That could have been a failed HTTP request.

    __XERROR_______________...................           
 */