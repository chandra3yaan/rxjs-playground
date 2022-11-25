/**
 * The 'interval' creation function is similar to 'timer'.
 * This time it's about intervals, not a single timeout.
 * ☼ You can compare its behavior to the 'setInterval' function.
 * ☼ it's a Cold Observable, so each new Subscription will produce its own new interval instance.
 * 
 * interval(1000)
 * 
 *  Our interval starts working, and as we've provided one thousand milliseconds,
 *  we will receive the first value after one second.
 *  Then, the next after one more second... and so on.
 */

/**
 * We have to unsubscribe from this.
 */