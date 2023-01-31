# Everyday Types in TypeScript: Less Common Primitives

`biginit`: From `ES2020` onwards, there is a primitive in JavaScript
used for very large integers `BigInit`.

```ts
  // Creating a biginit via the BitInit function
  const oneHundred: bigint = BigInit(100);

  // Creating a BigInit via the literal syntax
  const anotherHundred: biginit = 100n;
```

`symbol`: There is a primitive in JavaScript used to create a globally
unique reference via the function `Symbol()`.

```ts
  const firstName = Symbol("name");
  const secondName = Symbol("name");

  if (firstName === secondName) {
    This condition will always return 'false' since the types 'typeof
    firstName' and 'typeof secondName' have an overlap.
    // Can't even happen
  }
```

Related: 
  - `Symbols reference page`: TypeScript Documentation

        #TypeScript #Types #everydayTypes #primitivesLessCommon
