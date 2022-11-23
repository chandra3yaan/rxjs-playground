import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

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