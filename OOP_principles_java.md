# OOP Principles, Java

## Pillars of OOP
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

Abstraction - Hiding implementation details 
Abstracted ex: Using a coffee machine, push the start button
Non-abstracted: Get water, add coffee, grind coffee, etc...

Encapsulation - Hiding details making certain things private
Eg: Create an object and have its properities used in a method, 
but are inaccessible by itself.

Inheritance - Sub-class acquiring Super-class's methods and properties

Polymorphism - an object taking on many forms.
Eg: a parent (super) and child (sub) class can have a method with the same name, 
but they will perform different actions



## Constructor Overloading
In Java, a class can have multiple constructors with different list/# of args.
Based on the # of args provided when creating/instiating an instance/object, 
the constructor will perform differently

## Method Overloading
When a class has more than one method with the same name, then that method is `overloaded`
Similar to `constructor overloading`, one method with the same name, but diff
list of args, then it's method overloading.


Note: a method has a "signature" consisting of 3 things:
1. Method name
2. Number of args
3. Types of args
If all 3 are the same in any 2 methods in a class, then compiler gives `duplicate method error`

## Method Overriding
When a super class method is overridden in the sub class

## Multiple Inheritance
Ok through interfaces. However, only one class can be extended

## Constructor vs Method
Constructor is a special member of a class, used to create the class' objects.
Does not have a return type.
Methods implement a behavior of the class, has its own name and return type.

## Exception handling
Try, Catch, and Finally blocks