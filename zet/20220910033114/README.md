# Everyday Types in TypeScript Interfaces

An interface declaration is another way to name an object type.

```ts
  interface Point {
    x: number;
    y: number;
  }
```
Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can
choose between them freely. Almost all features of an interface are
available in type, the key distinction is that a type cannot be
re-opened to add new properties vs an interface which is always
extendable.

  - Type aliases may not participate in declaration merging, but
    interfaces can.
  - Interfaces may only be used to declare the shapes of objects, not
    rename primitives.
  - Interface names will always appear in their original form in error
    messages, but only when they are used by name.

Related:

      #TypeScript #Types #everydayTypes #Interfaces

