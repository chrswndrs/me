# What is a Factory Method in TypeScript

Factory method is a creational design pattern which solves the problem
of creating product objects without specifying their concrete classes.

The Factory Method defines a method, which should be used for creating
objects instead of using a direct constructor call (new operator).
Subclasses can override this method to change the class of objects that
will be created.

**Usage example**: The Factory Method pattern is widely used in TypeScript
code. It's very useful when you need to provide a high level of
flexibility for your code.

**Identification**: Factory methods can be recognized by creation
methods that construct objects from concrete classes. While concrete
classes are used during the object creation, the return type of the
factory methods is usually declared as either an abstract class or an
interface.

        #OOP #Pattern #TypeScript #Factory 

