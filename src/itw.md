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

Lorem Ipsum Dolor Sit Amet

## What is CORS?

CORS stands for _Cross-Origin Resource Sharing_

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORShttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

# DOM Manipulation

## How to select the element with the id ...?

- level: 1

Lorem Ipsum Dolor Sit Amet
