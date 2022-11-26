/**
 * Let's now have a look at the 'fromEvent' creation function.
 * The 'fromEvent' function allows us to create an Observable from various event sources.
 * This is useful to create an Observable which will emit events each time the user clicks on a button,
 * ...inputs something into a form field or resizes the window, for example.
 * It supports multiple event targets, including
 *      .the DOM event targets,
 *      .the Node.js EventEmitter,
 *      .jQuery events
 */

/**
 * § The Observables made with 'fromEvent' never complete,
 * § so we need to unsubscribe from them to stop receiving the events.
 */

/**
 * fromEvent(button, 'click')
 * ♫ In our case, the actual source is the DOM element and the click events emitted by it.
 * ♫ Important thing to note here is that the Observable created using the 'fromEvent' is Hot.
 * ♫ This is because the actual source, the actual producer of the data, is placed outside of the Observable itself.
 */

/**
 * Let's now consider that we create an Observable using the 'fromEvent' function,
 * ... which binds to the click event on a button DOM element. 
 * 
 *      1. And subscribing to this Observable will work similarly to using the 'addEventListener()'
 *      2. And unsubscribing will work like 'removeEventListener'.
 *      ♫ Actually, underneath, RxJS will use those methods for us.
 */