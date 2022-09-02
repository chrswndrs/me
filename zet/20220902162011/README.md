# What are Observables in Angular?

Observables provide support for passing messages between parts of your
application. They are used frequently in Angular and are a technique for
event handling, asynchronous programming, and handling multiple values.

The observer pattern is a software design pattern in which an object,
called the subject, maintains a list of its dependents, called
observers, and notifies them automatically of state changes. This
pattern is similar (but not identical) to the publish/subscribe design
pattern.

Everything you see with a `.subscribe()` is an observable.
To prevent memory leaks you have to unsubscribe form observables.
Angular will handle that with build in observables like `params` from
routing. YOU have to manage this with custom observables.

*Subscription* has tree arguments:
- `next`: Required! A handler for each delivered value. Called zero or
  more times after execution starts. Continues an observable. Can be
  called from inside and outside an observable.
- `error`: throws an error
- `complete`: halts an observable

*Operators* you want to use have to be imported from `rxjs`.
Operators are functions that build on the observables foundation to
enable sophisticated manipulation of collections. For example, `RxJS`
defines operators such as `map()`, `filter()`, `concat()`, and
`flatMap()`.Operators are functions that build on the observables
foundation to enable sophisticated manipulation of collections. For
example, `RxJS` defines operators such as `map()`, `filter()`,
`concat()`, and `flatMap()`.
The `pipe()` function is also a method on the `RxJS` Observable.

*Subjects* can be replacements for `EventEmitters`. Make sense for cross
component `EventEmitters`? 

Related: 
 - 20220902154721/README.md
 - https://angular.io/guide/observables

    #Angular #dependencyInjection #observables
