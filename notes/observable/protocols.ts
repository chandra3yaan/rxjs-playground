/** Pull and Push Protocols
 
 * ♫ Producer → üretici
 * ♫ Consumer → tüketici
 * 
 * Pull and Push are two different protocols that describe how 'a data Producer' can communicate with 'a data Consumer'.
 * What is Pull? 
 *              In Pull systems, the Consumer determines when it receives data from the data Producer.
 *                      ♫ Tüketici, veri üreticisinden veriyi ne zaman alacağını belirler.
 *                      ♫ Üretici, verilerin Tüketici'ye ne zaman iletileceğinin farkında değildir.
 *              The Producer itself is unaware of when the data will be delivered to the Consumer.
 *              Every JavaScript Function is a Pull system.
 *                  The function is a Producer of data.
 *                  and the code that calls the function is consuming it
 *                  by "pulling" out a single return value from its call.
 * What is Push?
 *              In Push systems, the Producer determines when to send data to the Consumer.
 *                      ♫ Üretici, Tüketiciye verinin ne zaman gönderileceğini belirler.
 *                      ♫ Tüketici, bu verileri ne zaman alacağının farkında değildir.
 *              The Consumer is unaware of when it will receive that data.
 *              Promises are the most common type of Push system in JavaScript today.
 *                      A Promise is a data producer.
 *                      A Promise delivers a resolved value to registered callbacks.
 *                      ♫ ancak işlevlerin aksine, söz konusu değerin tam olarak ne zaman geri aramalara "itildiğini" belirlemekten sorumlu olan Promise'dir.
 *              RxJS introduces Observables, a new Push system for JavaScript.
 *                      An Observable is a Producer of multiple values.
 *                      Observers are data consumers.
 */

/**
 * A Function is a lazily evaluated computation that synchronously returns a single value on invocation.
 * 
 * A generator is a lazily evaluated computation that synchronously returns zero to (potentially) infinite values on iteration.
 * 
 * A Promise is a computation that may (or may not) eventually return a single value.
 * 
 * An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.
 */