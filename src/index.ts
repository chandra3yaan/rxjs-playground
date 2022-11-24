import { Observable, of, from } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

// array section
const heroes$ = from(['Kaisa', 'Garen', 'Darius']);

heroes$.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('bak bakalım');
  },
});


// promise section
const first = new Promise((resolve, reject) => {
  resolve('Resolved!');
  //reject('Rejected!');
});

const observableFromPromise$ = from(first);
const observableFromPromise2$ = of(first);

// for from
observableFromPromise$.subscribe({
  next(value) {
      console.log('from: ', value);
  },
  error(err) {
      console.log('Error: ', err);
  },
  complete() {
      console.log('from → bak bakalım');
  },
});

// for of
// promise'ın kendisini ham olarak yayınlar
observableFromPromise2$.subscribe({
  next(value) {
      console.log('of: ', value);
  },
  error(err) {
      console.log('Error: ', err);
  },
  complete() {
      console.log('of → bak bakalım');
  },
});
