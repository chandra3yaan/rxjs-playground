/**
 * In this example, we'll create an Observable which will connect to the click event of an existing HTML button in the DOM.
 * I have already prepared a button with the ID 'hello', which we have available as the 'helloButton' const.
 * We'll connect multiple Subscriptions to the same Observable to show how Hot Observables work.
 * But first, let's create our Observable. Let's call it 'helloClick$'.
 * And let's use the 'new Observable' constructor.
 */

import { Observable } from "rxjs";

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>(function subscribe(subscriber) {
    // Let's also provide the callback, which will be used as the handler for the click event.
    helloButton.addEventListener('click', (event: MouseEvent) => {
        subscriber.next(event);
    })
});

// let's now add a Subscription to our new Observable
helloClick$.subscribe(event => console.log(event));

// We can see that each time I click the button, the same exact click is passed to all Subscriptions.
// We can say that it's multicasted.
// So a Hot Observable is the one which has the actual source of the emissions placed outside of it.
helloClick$.subscribe(event => console.log('Sub 1:', event.type, event.x, event.y));
helloClick$.subscribe(event => console.log('Sub 2:', event.type, event.x, event.y));

// Before we continue, let's try one more thing and let's move the third Subscription further in time.
// We'll add 'setTimeout' and we'll provide a five second delay.

setTimeout(() => {
  console.log('Subscription 3 starts');
  helloClick$.subscribe(
    event => console.log('Sub 3:', event.type, event.x, event.y)
  );
}, 5000);