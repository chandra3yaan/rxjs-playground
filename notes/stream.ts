/**
 * The Observables are based around the idea of streams,
 *  → which means that the data can come at various points of time
 *  → and the number of emitted values might be theoretically infinite.
 */

/**
 * Most of us are used to working with arrays where all the data is already known and available to us.
 * When we have an array, we immediately have the access to all of the data inside.
 * In this array, we can see a few numbers, which can represent some IDs, some scores or anything else.
 *      [1, 24, 37, 43, 56]
 * We can see how many items does it have or, for example, what is the third item's of value.
 * However, in the world of Observables, which allows us to emit the values at any point of time,
 * ... we have to change our approach and think in a stream-like way.
 */

/**
 * First, the items in a stream can come at various points of time.
 * let's draw a timeline.
 *  ________________________________________________________>
 *      As the time passes, some data might show up in our stream.
 *      For example, let's say we've just entered a local grocery store and we go further and see some products.
 *      First, we see a lemon.
 *      We can react somehow to it or not.
 *      For example, we can take this lemon and put it into our shopping basket
 *      Then we move further, time passes, we see a coconut.
 *      Again, we can take it or not.
 *      We can take the action at the time we see this product.
 *      Later, we might find an onion. 
 *      Again, we can do something with it or not.
 *      And if we would like to name this particular stream, we could say it's a stream of the products which we see.
 *      Each time we would enter the grocery store, we would notice different products at different points of time.
 *      As you can see, the stream approach is more about reacting to the things as they show up.
 *      We don't know the next value and whether it will appear at all.
 *      We just provide some code which will react to the emitted data in case it shows up.
 *      This approach is called reactive programming, and the Observables are based around this idea.
 */

/**
 * We might have a stream, which would emit the latest mouse position every time it changes.
 * So let's say we move the mouse a little bit and a new position would be emitted by this stream.
 * If we move the mouse a tiny bit more, a new position would be emitted again.
 * And it can go on and on.
 */

/**
 * We could have a stream representing the latest value of the text input data.
 *  For example, at first the field might be empty,
 *  then the user might start typing,
 *  and as the time passes and the user continues to type,
 *  the value of the input data might change
 *  and the stream would keep on emitting those updated values.
 */

/**
 * The last example I'll show you here is an HTTP request.
 * The HTTP request can also be represented by a stream.
 * When we call some server, we have to wait some time and then the response will come.
 */