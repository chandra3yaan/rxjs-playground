
/**
 *  In this chapter, we'll talk about another useful RxJS concept, namely, the Subjects.
 *  A Subject allows us to multicast the values to multiple Observers.
 *  It is similar to an event emitter.
 * 
 *  So the Subject is a combination of an Observable and an Observer.
 * 
 *          1. This means that you can subscribe to the Subject the way you did to regular Observables.
 *          2. You can call 'next', 'error' and 'complete' methods on the Subject to emit/multicast these notifications to all active subscribers.
 *  We'll also cover the BehaviorSubject variant, which is a Subject with memory and an initial value.
 */

/**
 *  'The Subject' can be described as a Hot Observable, because 'the Subject' itself is a shared source of the notifications.
 *  We can have multiple Subscriptions to the same Subject and once we call 'next' on this Subject, this next notification will be multicasted to all subscribers
 * 
 *          1. There is a match on TV.
 *          2. Let's call it our Subject.
 *          3. That TV might emit many events: a goal, a red card or injury...
 *          4. So our Subject may emit those events as next notifications.
 *          5.      0       → As we have no Observers, nobody's watching the TV, there will be no reactions.
 *          6.      many    → Let's now say some Observers came and subscribed to this Subject.
 *                          → So, if an event of a goal would be emitted by this Subject, this information will reach all Observers.
 *                          → And this is great because these Observers might be in completely different parts of your app
 *                          → and, by using Subject, you can conveniently multicast the notifications to multiple places.
 *          ♫ So the Subject is like a convenient event emitter, which you can easily incorporate into the RxJS world and mix with other Observables.
 * 
 * 
 *          Match
 */

/**
 *  First, the Subject is an Observable.
 *      → You can subscribe to Subject and use it just as you would a regular Observable.
 *      → You can mix the Subject together with other Observables by, for example, using 'combineLatest' or flattening operators.
 * 
 *  Secondly, as the Subject itself is a source of emissions, it behaves like a Hot Observable.
 *      → This means that each new Subscription will connect to the same source of emissions, which is our Subject.
 *      → So, every Subscription to the same Subject will receive the same notifications at the same time.
 */