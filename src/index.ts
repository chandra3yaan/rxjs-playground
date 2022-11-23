import { Observable } from 'rxjs';
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

/*
// start -- the codes of the first section

name$.subscribe();
name$.subscribe(value => { console.log(value) });

storeDataOnServer("falanca");

storeDataOnServer("falanca2").subscribe(value => { console.log(value) });

storeDataOnServerError("anything").subscribe(value => { console.log(value) });


storeDataOnServerError("anything").subscribe({

  next: value => { console.log(value) },

  error: err => { console.log('Error when saving: ', err.message) },

});
// end -- the codes of the first section
*/

// start -- the codes of the second section
const document$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
document$.subscribe({
  next(x) {
      console.log('got value ' + x);
  },
  error(err) {
      console.error('something wrong occurred: ' + err);
  },
  complete() {
      console.log('done');
  },
});
console.log('just after subscribe');
// end -- the codes of the second section