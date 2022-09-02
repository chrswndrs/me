# What are Observables in Angular?

Everything you see with a `.subscribe()` is an observable.
To prevent memory leaks you have to unsubscribe form observables.
Angular will handle that with build in observables like `params` from
routing. YOU have to manage this with custom observables.

*Subscription* has tree arguments:
- `error`: throws an error
- `complete`: halts an observable


