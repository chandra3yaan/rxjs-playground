import {
    name$,
    storeDataOnServer,
    storeDataOnServerError
} from '../../src/external';

/**
 * Observables are like functions, which generate some values once we subscribe to them.
 * An Observable is like a function which we can execute and which then runs its logic and can return multiple values at various points of time.
 * let's start with our first Observable...
 * ... and let's try to make our name$ Observable emit some data.
 */

/**
 * Observables onlara abone olduğumuzda bazı değerler üreten functionlar gibidir.
 * Observables, yürütebileceğimiz ve daha sonra kendi mantığını çalıştıran ve çeşitli zaman noktalarında birden çok değer döndürebilen bir function gibidir.
 * name$ isimli Observable'ımızın bazı veriler yaymasını sağlamaya çalışalım.
 */

/**
 * Let's execute this name$ Observable.
 * We can do it by calling the subscribe method on it.
 * and we don't see anything in the console. So what happened?
 * We didn't provide the handler for those values, so we couldn't see any effect, any reaction.
 * We can    for the values to the subscribe method.
 * Let's simply use an arrow function for that.
 * So for each value, we'll console log this value, like so.
 * And now we can see the emitted values in the console.
 * 
 * When we subscribed to this Observable and provided a handler...
 * ... it instantly generated and emitted three values Alice, Ben and Charlie.
 */
name$.subscribe();
name$.subscribe(value => { console.log(value) });

/**
 * Sometimes we need to make an HTTP request to a server to store some data
 * ... and we need to provide the data we want to store.
 * We can also do this using the Observables.
 * Let's use the 'storeDataOnServer' function.
 * The Observable returned by this function will simulate storing some data on this server.
 */

/**
 * This function accepts a string with the data we want to store and returns an Observable.
 * So what would happen if we would call 'storeDataOnServer('falanca')', written like this?
 * Actually, not that much.
 * Calling this function like that will just create and return a new Observable
 *  ... which's logic will be able to store our value on the server.
 * So we still need to execute the observable.
 * So as previously, let's call the subscribe method on it.
 * This will execute the logic stored inside of this returned Observable.
 */

storeDataOnServer("falanca");
// We need to wait some time for the simulated response and then the response gets emitted and printed to the console by our handler.
// So as you can see, the Observables can also be used for asynchronous sources.
storeDataOnServer("falanca2").subscribe(value => { console.log(value) });

/**
 * To show how to handle the errors, I've prepared another function called 'storeDataOnServerError'.
 * It's returning an Observable simulating a failing HTTP request.
 * This function accepts a string and returns an Observable.
 */

// We can see that our app failed. That's because we didn't handle this error in any way.
storeDataOnServerError("some value").subscribe(value => { console.log(value) });
/**
 * rxjs7 → We need to provide an Observer object to the subscribe method instead of providing callbacks as separate arguments.
 * Let's use curly braces over here.
 * And in this Observer object, we can provide the handlers for each notification type.
 */
storeDataOnServerError("some value").subscribe({
    // The most important are the next notifications, which are used to emit the values.
    next: value => { console.log(value) },
    // And right now, we have successfully handled the error and can see a regular console log printed by our error handler.
    error: err => { console.log('Error when saving: ', err.message) },
});

/**
 * We could see that the Observables are like functions with some logic stored inside.
 * The difference is that they can emit any number of the values at various points of time.
 * The Observables on their own don't do anything.
 * We need to call the subscribe method on them to execute them.
 * We can react to the values they emit by providing a handler.
 * And we also saw that we can handle the error notification by using an Observer object.
 */
