# What is Dependency Injection in Angular?

DI is wired into Angular framework and used everywhere to provide new
components with the services or other things they need. Components
consume services; that is, you can inject a service into a component,
giving the component access to that service class.

To define a class as a service in Angular, use the `@Injectable()`
decorator to provide the metadata that allows Angular to inject it into
a component as a dependency. Similarly, use the `@Injectable()`
decorator to indicate that a component or other class (such as another
service, a pipe, or an `NgModule`) has a dependency.

The injector is the main mechanism. Angular creates an application-wide
injector for you during the bootstrap process, and additional injectors
as needed. You don't have to create injectors.

*Hierarchical Injector*:
- Highest Level:
- Mid-Level

The injector is the main mechanism. Angular creates an application-wide
injector for you during the bootstrap process, and additional injectors
as needed. You don't have to create injectors.

*Hierarchical Injector*:
- Highest Level:
  `AppModule`: Same Instance of Service is available Application-wide.
- Mid-Level:
  `AppComponent`: Same as Instance is available for all Components (but
  not for other Services). Does not go up to `AppModule`, only down to
  children of Components.
- Lowest Level:
  `Any other Component`: Same Instance of Service is available for the
  Component and all its child components. Component with no Children.

`@Injectable()`: An Injector creates dependencies, and maintains a
container of dependency instances that it reuses if possible.

A provider is an object that tells an injector how to obtain or create a
dependency.
For any dependency that you need in your app, you must register a
provider with the application's injector, so that the injector can use
the provider to create new instances. For a service, the provider is
typically the service class itself.
Service is a broad category encompassing any value, function, or feature
that an application needs. A service is typically a class with a narrow,
well-defined purpose.
A dependency doesn't have to be a service - it could be a function, for
example, or a value.
When Angular creates a new instance of a component class, it determines
which services or other dependencies that component needs by looking at
the *constructor* parameter types, e.g. the constructor of
`HeroListComponent` needs `HeroService`.

```typescript
constructor(private service: HeroService) {}
```
Related: 
- https://angular.io/guide/dependency-injection-overview  
- 20220902162011/README.md 

      #Angular #dependencyInjection #@Injectable
