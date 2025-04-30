# Basic Types Of Typescript

GitHub Link: [Module-1](https://github.com/Apollo-Level2-Web-Dev/Apollo-Level2-Web-Dev-batch-5-be-a-typescript-technocrat/tree/main/module1)

Are you ready to dive into the world of TypeScript? 🔥

This module introduces the power of TypeScript, a supercharged version of JavaScript that helps you write cleaner, more reliable code. Here's a sneak peek at what you will learn:

1. Intro to the TypeScript Technocrat Mission: We'll kick things off by introducing TypeScript and explaining how it empowers you to become a web development "Technocrat"—someone who builds robust and efficient web applications.

2. Introduction to TypeScript: You'll learn what TypeScript is, why we use it, the benefits of using TypeScript, and how it builds upon your existing JavaScript knowledge.

3. Install typescript and node version manager: We'll guide you through setting up the necessary tools, including how to install TypeScript and introduce you to Node Version Manager.

4. Your First TypeScript Program: Then the exciting part begins! You'll write your first TypeScript program!

5. Mastering Basic Data Types: TypeScript helps you manage different types of data. You'll learn about numbers, strings, Booleans, and other data types that make your code more organized.

6. Object Power, Optional and Literal Types: Explore the world of objects in TypeScript—how to structure them, define optional properties, and even use literal types for greater control.

7. Function in TypeScript: Functions are the building blocks of any program. We'll teach you how to write functions in TypeScript! You'll learn about features like parameter typing and return type definition.

8. Destructuring in TypeScript: Simplify working with complex objects using destructuring—a powerful technique that allows you to extract specific data with ease.

9. Type Aliases in TypeScript: Learn how to create type aliases, which are like nicknames for complex types. This will make your code cleaner, more readable, and easier to maintain.

10. Union and Intersection Types: Imagine being able to define variables that can hold different types of data. That's the power of union and intersection types in TypeScript!

11. Ternary, Optional Chaining & Nullish Coalescing: Discover special operators like ternary operators, optional chaining, and nullish coalescing. These operators make your code more concise and safer to work with.

12. Unveiling Never, Unknown & Nullable Types: TypeScript offers advanced type concepts like "never," "unknown," and nullable types. These advanced concepts give you more flexibility when dealing with unexpected or nullable values.

By conquering these topics, you'll be well on your way to becoming a TypeScript whiz and crafting superior web applications! 💥

## 1-0 Intro To Typescript Technocrat Mission

![alt text](<WhatsApp Image 2025-04-30 at 18.53.43_0c73a48f.jpg>)

## 1-1 Introduction To Typescript

### What is Typescript?

- Typescript Is An Object Oriented Programming Language That Is Built On Top Of Javascript With Extra Features.
- Typescript is extended version of javascript loaded with extra features

### Why Typescript?

- Problem of Javascript
  1. Dynamically Typed Language, For this reason we can declare any kind of variable any time, this is a problem, In small scale project we may catch but in large scale project we cant check the type checking error so easily.
  2. In js if we do not go in run time we are not able to catch the error in run time
  3. Js do not support object oriented by default, we use syntactic sugar

![alt text](<WhatsApp Image 2025-04-30 at 19.05.28_034d2ca0.jpg>)

- When the situation is like we need to work on a project that should be supported in older version browser, in this situation typescript helps us to choose in which version of js we want to work. Since at the end of the day typescript is converted in javascript and Typescript can be transpiled into older versions o0f javascript

![alt text](<WhatsApp Image 2025-04-30 at 19.09.58_04f07054.jpg>)

#### Can Browser Recognize Typescript?

- Browser can not run typescript code, at the end of the day we need to transpile Typescript code to javascript code and the js code is run by browser/ node.js

### Benefits Of Typescript?

- Supports older Browser
- Type safety ( we can not declare any type of variable any time this solves the problems of dynamically typed problems of js )
- Js Types in Ts
  1. Number
  2. String
  3. Boolean
  4. Null
  5. Undefined
  6. Object
  7. Symbol
- Ts has its own types including the js types
  1. Interface
  2. Void
  3. Array
  4. Tuple
  5. Enum
  6. Union
  7. Intersection

![alt text](<WhatsApp Image 2025-04-30 at 19.16.45_5c376f26.jpg>)

- Increases Productivity (if we declare any utility function and import any other file we do not need to go to the file and check what types we have to use or what parameter we have to send )
- Less Bug and Less Testing

### Drawbacks Of Typescript?

- Type Complexity : Even its a simple code still we need to declare type
- Limited Library Support : Some libraries do not support typescript
- Over Engineering
- Migration Challenge in converting js to ts
