import { Observable, of } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

const heroes$ = of('Kaisa', 'Garen', 'Darius', 'Sett');

// We can see that all values were emitted immediately after subscribing as we've expected.
// We also expect this Observable to emit a complete notification directly after emitting the last value.
heroes$.subscribe({
  next(value) {
      console.log(value);   
  },
  complete() {
      console.log('bak bakalım');
  },
});

function ourOwnOf(...args: string[]): Observable<string> {
  // let's return and a new Observable.
  return new Observable<string>(subscriber => {
      // We'll simply iterate over the arguments using the 'for' loop.
      for (let i = 0; i < args.length; i++)
      {
          subscriber.next(args[i]);
      }

      subscriber.complete();
  });
}

const heroes2$ = ourOwnOf('2 starts','Kaisa', 'Garen', 'Darius', 'Sett');

heroes2$.subscribe({
  next(value) {
      console.log(value);   
  },
  complete() {
      console.log('bak bakalım');
  },
});
 