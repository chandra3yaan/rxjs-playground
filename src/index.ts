import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>(function subscribe(subscriber) {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  })
});

// helloClick$.subscribe(event => console.log(event));

// We can see that each time I click the button, the same exact click is passed to all Subscriptions.
// We can say that it's multicasted.
// So a Hot Observable is the one which has the actual source of the emissions placed outside of it.
helloClick$.subscribe(event => console.log('Sub 1:', event.type, event.x, event.y));
helloClick$.subscribe(event => console.log('Sub 2:', event.type, event.x, event.y));

// Before we continue, let's try one more thing and let's move the third Subscription further in time.
// We'll add 'setTimeout' and we'll provide a five second delay.

// ilk 5 saniyeden öncesi bu abi de yok
setTimeout(() => {
  console.log('Subscription 3 starts');
  helloClick$.subscribe(
    event => console.log('Sub 3:', event.type, event.x, event.y)
  );
}, 5000);
