/**
 * These are Observable creation operators
 *  ... that also have join functionality -- emitting values of multiple source Observables.
 */

/**
 * Now we'll talk about the 'forkJoin' creation function.
 * It works a little bit differently than the previous ones, as it accepts other Observables as the source, as the input.
 * You can pass an array of Observables to it.
 * Once you subscribe to it, underneath, it will create Subscriptions to all provided input Observables.
 * Then, it will wait for all these Observables to complete.
 * And once this happens, it will emit a set of the latest values from all of them.
 */

/**
 ♫ This can be useful if you'd like to call multiple HTTP endpoints at the same time and wait for all of them to respond before taking further action.
 ♫ In this example, let's say that we have two Observables named A and B, which call some HTTP endpoints when we subscribe to them
 ♫ We'd like to subscribe to both at the same time to start the HTTP requests and take some action after we receive the response from both.
 ♫ We can achieve this easily using the 'forkJoin' creation function.

        1. Let's create a new Observable using the 'forkJoin' function and pass the Observables A and B as the input.
                forkJoin([A, B])
        
        2. Now, let's subscribe to this 'forkJoin' Observable.
                forkJoin([A, B]).subcribe()
        
                3. And this timeline will represent the emissions which will be received by our Subscription to the 'forkJoin' Observable.
                forkJoin([A, B]).subcribe()
                                ...................................................
        
                                4. And the forkJoin's logic will now subscribe to all input Observables, namely the A and B Observables.
            A ___________________________________________________
            B ___________________________________________________
            .....................................................
        
        5. This means that we'll now have two HTTP requests in progress - one for each internal Subscription made by the forkJoin's logic.
           So, let's now wait for some response.
           And the first to arrive is the response for the second request.
            A ___________________________________________________
            B _______q|___________________________________________
            .....................................................

            So, the Subscription B will get the response and a complete notification.
            ♫ At this point, the forkJoin's logic won't emit anything as the first request is still in progress.
            ♫ Let's wait for the other request to finish.
        
        6.  And we can see that it responded,
            so the response value was emitted together with the complete notification.
            At this point, all of the inner Subscriptions created by the forkJoin's logic have completed.
            So the forkJoin's logic is now sure that the values are final.

            A _______________r|___________________________________
            B _______q|___________________________________________
            .....................[q,r]............................

            As it has the final values, the forkJoin's logic will emit an array with these values and complete as it's finished its job.
 */