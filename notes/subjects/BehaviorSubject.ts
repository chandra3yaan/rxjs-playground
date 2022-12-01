/**
 * One of the variants of Subjects is the BehaviorSubject, which has a notion of "the current value".
 * It stores the latest value emitted to its consumers, and whenever a new Observer subscribes,
 * it will immediately receive the "current value" from the BehaviorSubject.
 */

import { fromEvent, Subject, BehaviorSubject, withLatestFrom } from "rxjs";


// As you can see, I've prepared some elements.
// We have a navigation bar above in which we'll display our login state - true or false, depending on the current state.
// And next, we have the 'Login' and 'Logout' buttons.
// And as you might have predicted, the 'Login' button will change the 'logged in' state to true, and the other will set it to false.
// Also, we'll make a single button appear depending on the state.
// So if we are logged in the 'Logout' button will be presented and vice versa.
// Finally, we'll make this 'Print state' button, print the current login state to the console.
const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

/**
 * Let's start by trying to use a regular Subject for this case.
 * So, let's define a const 'isLoggedIn$' which will be a new Subject emitting boolean values.
 */
//const isLoggedIn$ = new Subject<boolean>();
const isLoggedIn$ = new BehaviorSubject<boolean>(false);
/**
 * Now, let's make our buttons emit the login state changes.
 * Let's use the 'fromEvent' function and the 'Login' button's click event and we'll subscribe to it.
 * And whenever a click event happens, we'll make our 'isLoggedIn$' Subject emit a next notification with value 'true'.
 * Let's copy this once, and for the 'Logout' button, we'll make the 'isLoggedIn$' Subject emit 'false'.
 * OK, we have our buttons connected.
 */
fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));
/**
 * Let's now display the login state in the navigation bar.
 * To do so, we need to use the 'isLoggedIn$' Subject and subscribe to it.
 * So, each time it emits a new 'isLoggedIn' state, we'll update the loggedInSpan's inner text with 'isLoggedIn' boolean converted to string, like so.
 */
isLoggedIn$.subscribe(isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString());
/**
 * However, to show you the power of the Subject, let's say that this navigation bar is a separate component placed in a different place in our code than our 'Login' and 'Logout' buttons...
 * so we need to handle the buttons' logic separately.
 *  
 *      1 Navigation bar
 *      2 Buttons
 */


// So, let's use our 'isLoggedIn$' Subject once again, and subscribe to it.
isLoggedIn$.subscribe(isLoggedIn => {
    logoutButton.style.display = isLoggedIn ? 'block' : 'none';
    loginButton.style.display = !isLoggedIn ? 'block' : 'none';
});
/**
 * However, there is one issue.
 * If I refresh the app, we can see both buttons and we don't see the current login state in the navigation bar.
 * That's due to the nature of the regular Subject.
 * It's good for multicasting some value or some event, but it doesn't have the memory to keep the latest emitted state or the initial value.
 * In our example, the BehaviorSubject would be a better match to what we want to achieve.
 * 
 * ↑ isLoggedIn$ için Subject kullanmayı bırak ve BehaviorSubject kullan
 */

/**
 * The last thing we wanted to achieve in this coding section is to print the state to the console when we click on this 'Print state' button.
 */
fromEvent(printStateButton, 'click')
    .pipe(
        // So what it does is whenever a click event is emitted, the 'withLatestFrom' operator will take the latest value from the BehaviorSubject
        // ... and create an array with that value added.
        // By the way, using 'withLatestFrom' is a very common way of selecting various pieces of the state when using NgRx in Angular projects.
        withLatestFrom(isLoggedIn$)
    )
    .subscribe(
        ([event, isLoggedIn]) => console.log('User is logged in:', isLoggedIn)
    );