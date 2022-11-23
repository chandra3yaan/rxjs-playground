/**
 * I want to bring up the word responsibility.
 * We constantly need to ask ourselves a series of questions before writing a single line of code.
    1. What type of action does our code need to perform?
    2. What does our code need?
    3. What does our code provide?

 * Here is one question we need to ask ourselves before sending data to a component.
 * Should components be responsible for handling raw data from asynchronous operations?
 * The answer is no! Components shouldn't have to worry about handling raw data.
 * We need a solution for acting as a middleman between the response from an asynchronous operation and a component.
 * This is where our RxJS comes into play.
 */

/** Reactive Extensions Library for JavaScript
 * RxJS is a library for reactive programming...
 * ... to make it easier to compose asynchronous or callback-based code by using observable sequences.
 * RxJS's main purpose is to conveniently handle asynchronous code and RxJS provides lots of tools to do so.
 * It provides one core type, the Observable, satellite types(Observer, Schedulers, Subjects)
 * ... and operators inspired by Array methods(map, filter, reduce, every, etc) to allow handling asynchronous events as collections.
*/