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


/*
// start -- the codes of the second section
const document$ = new Observable<number>((subscriber) => {
  console.log('Observable executed!');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
document$.subscribe();
console.log('just before notifications');
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
*/


/*
// start -- the codes of the second section
const observable$ = new Observable<string>(subscriber => {
  subscriber.next('Tristina');
  subscriber.next('Kaisa');
  subscriber.next('Ashe');
  setTimeout(() => subscriber.next('Xayah'), 1000);
  setTimeout(() => subscriber.next('Draven'), 1000);
  setTimeout(() => subscriber.next('Garen'), 1500);
  setTimeout(() => subscriber.next('Darius'), 4000);
  setTimeout(() => subscriber.next('Ornn'), 10000);
});

console.log('Subscription 1 starts');
observable$.subscribe(value => console.log('Subscription 1: ', value));


setTimeout(() => {
  console.log('XOX Subscription 2 starts');
  observable$.subscribe(value => console.log('Subscription 2: ', value));
}, 1000);
// end -- the codes of the third section
*/

/*
// start -- the codes of the second section
const section4a$ = new Observable<any>(function subscribe(subscriber) { });
section4a$.subscribe();
//____________________
const section4b$ = new Observable<any>(function subscribe(subscriber) {
  console.log('Observable executed!');
});
console.log('Before subscribe');
section4b$.subscribe();
console.log('After subscribe');
//____________________
const section4c$ = new Observable<number>(function subscribe(subscriber) {
  subscriber.next(10);
});
section4c$.subscribe({ next(number) { console.log(number) } });
section4c$.subscribe(number => console.log(number));
//____________________
const section4d$ = new Observable<any>(function subscribe(subscriber) {
  subscriber.next('Kaisa');
  subscriber.next('Xayah');
  setTimeout(() => subscriber.next('Tristina'), 2000);
  // setTimeout(() => subscriber.complete(), 2000);
  setTimeout(() => subscriber.error(new Error('Failure')), 8000);

  return () => {
    console.log('teardown logic was run');
  };

});
console.log('Before subscribe');
section4d$.subscribe({
  next(heroes) { console.log(heroes) },
  error(err) { console.log(err.message) },
  complete() { console.log('complete') }
});
console.log('After subscribe');
//____________________
//____________________
// end -- the codes of the fourth section
*/

// start -- the codes of the fifth section
const interval$ = new Observable<number>(subscriber => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 500);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval$.subscribe(value => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
// end -- the codes of the fifth section
