# Everyday Types in TypeScript Type Functions

Functions are the primary means of passing data around in JavaScript.
TypeScript allows you to specify the types of both the input and output
values of functions.

Parameter Type Annotations:

When you declare a function, you can add type annotations after each
parameter to declare what types of parameters the function accepts.
Parameter type annotations go after the parameter name:

```ts
  function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }
```
When a parameter has a type annotation, arguments to that function will
be checked. Even if you don't have type annotations on your parameters,
TypeScript will still check that you passed the right number of
arguments.

Return Type Annotations:

You can also add return type annotations. Return type annotations appear
after the parameter list:

```ts
  function getFavoriteNumber(): number {
    return 13;
  }
```
Much like variable type annotations, you usually don't need a return
type annotation because TypeScript will infer the function's return type
based on its return statements. The type annotations in the above
example doesn't change anything. Some codebases will explicitly specify
a return type for documentation purposes, to prevent accidental changes,
or just for personal preference.

Anonymous Functions:

Anonymous functions are a little bit different from function
declarations. When a function appears in a place where TypeScript can
determine how it's going to be called, the parameters of that function
are automatically given types.

```ts
  // No type annotations here, but TypeScript can spot the bug
  const names = ["Alice", "Bob", "Eve"];

  // Contextual typing for function
  name.forEach(function (s) {
    console.log(s.toUppercase());
    // Property 'toUpperCase' does not exist on type 'string'. Did you
    mean 'toUpperCase'?
    });
```
Even though the parameter s didn't have a type annotation, TypeScript
used the types of the `forEach` function, along with the inferred type
of the array, to determine the type s will have.
This process is called contextual typing because the context that the
function occured within informs what type it should have.

Related:
 - 
 - 
 - 
 - 
 - 

    #TypeScript #Types #everdayTypes #Functions #anonymousFunctions
