# Everyday Types in TypeScript Union Types

TypeScript's type system allows you to build new types out of existing
ones using a large variety of operators. Now that we know how to write a
few types, it's time to start combining them in interesting ways.

Defining a Union Type:
The first way to combine types you might see is a union type. A union
type is a type formed from two or more other types, representing values
that my be any one of those types. We refer to each of these types as
the union's members.

```ts
  function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  printId(101);
```

Working with Union Types:
It's easy to provide a value matching a union type - simply provide a
type matching any of the union's members. 

TypeScript will only allow an operator if it is valid for every member
of the union. For example, if you have the union `string | number`, you
can't use methods that are only available on string.

The solution is to narrow the union with code, the same as you would in
JavaScript without type annotations. Narrowing occurs when TypeScript
can deduce a  more specific type for a value based on the structure of
the code. For example, TypeScript knows that only a string value will
have a typeof value of "string".

It might be confusing that a union of types appears to have the
intersection of those types' properties. This is not an accident - the
name union comes from theory. The union number | string is composed by
taking the union of the values from each type. Notice that given two
sets with corresponding facts about each set, only the intersection of
those facts applies to the union of the sets themselves. For example, if
we had a room of tall people wearing hats, and another room of Spanish
speakers wearing hats, after combining those rooms, the only thing we
know about every person is that they must be wearing a hat.

Related:


        #TypeScript #Types #everdayTypes #Union


