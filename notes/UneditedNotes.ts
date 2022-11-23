/*
It ended up with a lot of memory leaks, unpredictable behavior and other hard to trace bugs.
We'll have a look at the concepts of streams and reactive programming which are used by the Observables.
I'll show you how to easily create new Observables by using Creation Functions
the Pipeable Operators, which allows us to transform the emitted values in countless ways.
You can map or filter the emitted values.
The Subjects are an extension of Observables and they can be used to emit events or other values to multiple places in our code.
*/