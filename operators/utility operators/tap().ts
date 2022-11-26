/**
 * We all know and love the mighty console.log.
 * Every time we need to see certain value at certain stage of our function we eagerly put it in every other line.
 * How can we achieve such behavior in the RxJS world of Observables?
 * Here comes the tap() operator.
 */

/**
 * It does not influence the Observable stream in any way and just passes all notifications through without modifying them.
 * ? You might ask why would we use such operator if it does not do anything?
 * It can be used to provide side-effects at any stage of the operators pipeline,
 *  ...which is what we need if we want to spy on our Observable and see what happens inside.
 * You can put the tap() operator at any stage of the pipeline.
 */

/**
 * The 'tap' operator works like a spy and allows us to cause some side effects without interacting with the notifications.
 * It is useful if we have multiple operators stacked and we would like to be able to observe the notifications at any stage of this operator's pipeline.
 */

/*

    1. This puts our, let’s call it, spy inside of this Observable’s pipeline.
    2. Each time some value passes through the filter() operator,
    3. it will get logged to the console just before the value reaches the map() operator.
    4. This is very useful for debugging, and also learning about Observable streams.

 someObservable$.pipe(
    filter(value => value > 5),
    tap(value => {
      console.log('Spy:', value);
    }),
    map(value => value * 2)
  ).subscribe(
    ...
  );
*/


/**
 * Starting from RxJS 7.3.0, the tap() operator can do even more.
 * You can see when the Subscription starts and ends at the level of the tap() operator.
 * 
 
  tap({
    subscribe: () => { console.log('New Subscription'); },
    unsubscribe: () => { console.log('Unsubscribed'); },
    finalize: () => { console.log('Subscription ended'); }
  }),

 */