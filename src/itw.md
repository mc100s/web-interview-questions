# General

## What is a class? What is an object?

- level: 1
  Many people get confused by the difference between class and object. The difference is simple and conceptual. A class is a template for objects, it let's you creating objects. For example the class could be a factory and the objects the cars created by that factory, that can have different properties (colors, engine, ...).

```js
// Class
class Car {
  constructor(color) {
    this.color = color
    this.kmCounter = 0
  }
  drive(km) {
    this.kmCounter += km
  }
}

// Objects
let c1 = new Car('red')
let c2 = new Car('blue')

c1.drive(42)
c1.drive(50)

console.log(c1)
```

## What is Object Oriented Programming?

- level: 1
  In OOP everything is considered to be modeled as an object. This abstraction can be taken all the way down to nuts and bolts for a car, or as broad as simply a car type with a year, make, and model.

```js
// Class
class Book {
  constructor({ title }) {
    this.title = title;
  }
}

class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
  
  growOlder (years = 1) {
    this.age += years;
  }
  
  sayAge () {
    console.log(this.age);
  }
}

class Student extends Person {
  constructor({ name, age, course }) {
    super({ name, age });
    this.course = course;
    this.books = [];
  }
  
  aquireBook({ title }) {
    this.books.push(new Book({ title }));
  }
}

// Objects
const jane = new Student({ name: 'Jane', age: 21, course: 'web-dev' });

jane.growOlder();
jane.sayAge();
// Logged to console: 22

jane.growOlder(5);
jane.sayAge();
// Logged to console: 27

console.log(jane.books);
// Logged to console: []

jane.aquireBook({ title: 'Web Development Best Practices' });

console.log(jane.books);
// Logged to console: [ Book { title: 'Web Development Best Practices' } ]

console.log(jane.books[0].title);
// Logged to console: 'Web Development Best Practices'

console.log(jane instanceof Student);
// Logged to console: true
console.log(jane instanceof Person);
// Logged to console: true
console.log(jane instanceof Book);
// Logged to console: false
console.log(jane.books[0] instanceof Book);
// Logged to console: true
```

## What is CORS?

- level: 1

CORS stands for _Cross-Origin Resource Sharing_

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORShttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

# CSS

## What is CSS selector specificity? How to calculate the specificity?

- level: 1

- Specificity determines which CSS rule is applied by the browsers.
- Specificity is usually the reason why your CSS-rules don’t apply to some elements, although you think they should.
- Every selector has its place in the specificity hierarchy.
- If two selectors apply to the same element, the one with higher specificity wins.
- There are four distinct categories which define the specificity level of a given selector: inline styles, IDs, classes, attributes, and elements.
- You can understand specificity if you love Star Wars: CSS Specificity Wars.
- You can understand specificity if you love poker: CSS Specificity for Poker Players
- When selectors have an equal specificity value, the latest rule is the one that counts.
- When selectors have an unequal specificity value, the more specific rule is the one that counts.
- Rules with more specific selectors have a greater specificity.
- The last rule defined overrides any previous, conflicting rules.
- The embedded style sheet has a greater specificity than other rules.
- ID selectors have a higher specificity than attribute selectors.
- You should always try to use IDs to increase the specificity.
- A class selector beats any number of element selectors.
- The universal selector and inherited selectors have a specificity of 0, 0, 0, 0.
- You can calculate CSS specificity with CSS Specificity Calculator.

Answer from https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/

## Which one is more specific between the two: "h1" and ".carrot"?

- level: 1

`h1` has a specifity of (0,0,1)

`.carrot` has a specifity of (0,1,0)

So `.carrot` is more specific.

## Which one is more specific between the two: "#a" and ".b.c .d"?

- level: 1

`#a` has a specifity of (1,0,0)

`.b.c .d` has a specifity of (0,3,0)

So `#a` is more specific.

# DOM Manipulation

## How to select the element with the id "tomato"?

- level: 1

Different solutions:

- `document.getElementsById("tomato")`
- `document.querySelector("#tomato")`
