import { Observable, of, from, fromEvent } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

// button
const triggerButton = document.querySelector('button#trigger');

// fromEvent
const fromEvent$: Observable<MouseEvent> = fromEvent<MouseEvent>(triggerButton, 'click');

// addEventListener
const addEventListener$ = new Observable<MouseEvent>(subscriber => {
  triggerButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

// fromEvent$.subscribe(event => console.log(event)); // PointerEvent 
fromEvent$.subscribe(event => console.log('fromEvent: ', event.type, event.x, event.y));
fromEvent$.subscribe(event => console.log('fromEvent: ', event.type, event.x, event.y));
// addEventListener$.subscribe(event => console.log(event)); // PointerEvent 
addEventListener$.subscribe(event => console.log('addEventListener: ', event.type, event.x, event.y));
addEventListener$.subscribe(event => console.log('addEventListener: ', event.type, event.x, event.y));


// removeEventListener önemi
const triggerClick$ = new Observable<MouseEvent>(subscriber => {

  const clickHandlerFn = (event: MouseEvent) => {
    console.log('Event callback executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickHandlerFn);
  /*
    return () => {
      triggerButton.removeEventListener('click', clickHandlerFn);
    };
  */
});

const subscription2 = triggerClick$.subscribe(event => console.log(event));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription2.unsubscribe();
}, 5000);
