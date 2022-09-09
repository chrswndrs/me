# Everyday Types in TypeScript any

`any`:

TypeScript also has a special type, `any`, that you can use whenever
you don't want a particular value to cause typechecking errors.
The `any` type is useful when you don't want to write out a long type just 
to convince Typescript that a particular line of code is okay.


`noImplicitAny`: 
When you don't specify a type, and TypeScript can't infer it from
context, the compiler will typically default to `any`. You usually want
to avoid this, though, because `any` isn't type-checked. Use the
compiler flag `noImplicitAny` to flag any implicit `any` as an error.

Related:
 - 20220909023815/README.md
 - 20220909030424/README.md
 - 20220909030721/README.md

    #TypeScript #Types #everydayTypes
