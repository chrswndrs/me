# Everyday Types in TypeScript Lieteral Types

In addition to the general types string and number, we can refer to
specific strings and numbers in type positions.
One way to think about this is to consider how JavaScript comes with
different ways to declare a variable. Both var and let allow for
changing what is held inside the variable, and const does not. This is
reflected in how TypeScript creates for literals.

```ts
  let changingString = "Hello World";
  changingString = "Olà Mundo";
  // Because `cahngingString` can represent any possible string, that is
  // how TypeScript describes it in the type system
  changingString;
  let cahngingString: string

  const constantString = "Hello World";
  // Because `constantString` can only represent 1 possible string, it
  // has a literal type representation
  constantString;
  const constantString: "Hello World"
```
By themselves, literal types aren't very valuable. It's not much use to
have a variable that can only have on value! But by combining literals
into unions, you can express a much more useful concept - for example,
functions that only accept a certain set of known values:

```ts
  function printText(s: string, alignment: "left" | "right" | "center")
  {
    // ...
  }
```
Numeric literal types work the same way.
There's one more kind of literal type: boolean literals. There are only
two boolean literal types, and as you might guess, they are the types
true and false. The type boolean itself is actually just an alias for
the union true | false.

Related:

      #TypeScript #Types #everydayTypes #literalTypes

