/**
 * contrary to 'forkJoin', the combineLatest's logic will emit a new set of values each time any of the input Observables emits something new.
 * 
 *  ♫ That's because 'combineLatest' needs at least one value from each source before emitting anything.
 */

/**
 * the 'combineLatest' creation function is useful if you need to keep something constantly updated and
 *  ... be a result of the latest values or events from a few sources which can change over time.
 */