# Everyday Types in TypeScript Type Assertions

Sometimes you will have information about the type of a value that
TypeScript can't know about.
For example, if you're using `document.getElementById`, TypeScript only
knows that this will return some kind of `HTMLElement`, but you might
know that your page will always have an `HTMLCanvasElement` with a given
ID.
In this situation, you can use a type assertion to specify a more
specific type.

```ts
  const myCanvas = document.getElementById("main_canvas") as
  HTMLCanvasElement;

  // You can also use angle-bracket syntax
  const myCanvas =
  <HTMLCanvasElement>document.getElementById("main_canvas");
```

Like a type annotation, type assertion are removed by the compiler and
won't affect the runtime behavior of your code.
TypeScript only allows type assertions which convert to a more specific
or less specific version of a type. This rule prevents "impossible"
coercions.

Related:

      #TypeScript #Types #everydayTypes #typeAssertion

