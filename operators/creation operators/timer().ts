/**
 * The 'timer' creation function allows us to create an Observable which will wait some time, emit a value and complete.
 * 
 *  ♫ This observable is useful for creating delays in code, or racing against other values for ad-hoc timeouts.
 *  ♫ The delay is specified by default in milliseconds. 
 *  ☼ Unsubscribing actually cancelled the timer.
 */

/**
 * Creates an observable that will wait for a specified time period, or exact date, before emitting the number 0.
 * and complete.
 */


/**
 * 
 * Our new timer starts counting and after the provided time,
 *      ...in our case, two thousand milliseconds, which is two seconds,
 * a next notification will be emitted with the value '0'.
 * 
        ____2000ms...A:0|______________________________
        ............................................

        ♫ Also, a complete notification is emitted which ends the Subscription as the timer has completed its objective.
 */