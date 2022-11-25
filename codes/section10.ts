import { fromEvent, Observable, Subscriber } from "rxjs";

/**
 * In this coding section, we'll use the 'fromEvent' creation function
 *  ... to make an Observable which will connect to DOM events.
 * We'll also implement an Observable using the 'new Observable' constructor
 *  ... to recreate the result of the 'fromEvent' function, so we can see the general logic of how it works.
 */
const triggerButton = document.querySelector('button#trigger');

// 1 As the first parameter, we provide the event target, which in our case is the 'triggerButton'.
// 2 And, as the second parameter, we provide the event's name, which in our case will be the 'click' event.
// 3 This creates an Observable which will emit the events when we click on our 'Trigger' button.
// 4 Of course, it won't do anything by itself.

const fromEvent$: Observable<MouseEvent> = fromEvent<MouseEvent>(triggerButton, 'click');

// 5 We need to subscribe to it, so it connects this DOM event to our new Subscription.
// 6 So, let's subscribe and let's provide the handler for the next notifications.

fromEvent$.subscribe(event => console.log(event));
fromEvent$.subscribe(event => console.log(event.type, event.x, event.y));
fromEvent$.subscribe(event => console.log(event.type, event.x, event.y));

// 7 So, if we would click on the button, we can see some 'MouseEvent' printed out to the screen

// same ↑↓
const triggerClick1$ = new Observable<Event>(subscriber => {
    triggerButton.addEventListener('click', event => {
        // And that's because our Observable doesn't remove the event listener properly and leaves a memory leak
        console.log('Event callback executed');
        subscriber.next(event);
    });
});

triggerClick1$.subscribe(event => console.log(event));


/**
 * Very often we have a scenario like this:
 
        1. We open some component.
        2. We initialize everything.
        3. We connect the DOM events.
        4. We handle the events if they happen.
        5. and finally, We close the component.
        
        ♫ we should perform a clean up and remove all the event listeners...
        ♫ so we wouldn't have any memory leaks or any unexpected behavior.
 */

/**
 * So far, we've learned how to make our 'click' event driven Observables work by subscribing to it.
 * Now let's see, how can we make them stop and perform a clean up by removing the event listener.

        fromEvent
            → let's say we would like to stop handling the 'click' events after five seconds.
            → To do so, we simply need to unsubscribe.
            → let's keep a reference to this Subscription.
                const subscription = fromEvent$.subscribe(event => console.log(event.type, event.x, event.y));
            → and call 'setTimeout'

            setTimeout(() => {
                console.log('Unsubscribe');
                subscription.unsubscribe();
            }, 5000);
 */

// last chapter
const triggerClick$ = new Observable<MouseEvent>(subscriber => {

    const clickHandlerFn = (event: MouseEvent) => {
        console.log('Event callback executed');
        subscriber.next(event);
    };

    triggerButton.addEventListener('click', clickHandlerFn);

    return () => {
        triggerButton.removeEventListener('click', clickHandlerFn);
    };

});

const subscription2 = triggerClick$.subscribe(event => console.log(event));

setTimeout(() => {
    console.log('Unsubscribe');
    subscription2.unsubscribe();
}, 5000);

