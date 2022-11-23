import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

const ajax$: Observable<AjaxResponse<any>> = ajax<any>('https://random-data-api.com/api/nation/random_nation');

ajax$.subscribe({
  next(ajaxResponse) {
    // console.log(ajaxResponse)
    // console.log(ajaxResponse.response)
    console.log('sub 1. ', ajaxResponse.response.nationality)
  },
});

ajax$.subscribe({
  next(ajaxResponse) {
      console.log('sub 2: ', ajaxResponse.response.nationality)
  },
});

ajax$.subscribe({
  next(ajaxResponse) {
      console.log('sub 3: ', ajaxResponse.response.nationality)
  },
});

