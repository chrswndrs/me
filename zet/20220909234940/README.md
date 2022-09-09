# Everyday Types in TypeScript Type aliases

We've been using object types and union types by writing them directly
in type annotations. This is convenient, but it's common to want to use
the same type more than once and refer to it by a single name.

A type alias is a name for any type. 

```ts
  type Point= {
    x: number;
    y: number;
  };
```

Related:

      #TypeScript #Types #everydayTypes #typeAliases
