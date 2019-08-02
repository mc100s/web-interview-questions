const interviewQuestions = [
  {
    category: 'General',
    questions: [
      {
        title: 'What is a class? What is an object?',
        answer: `Many people get confused by the difference between class and object. The difference is simple and conceptual. A class is a template for objects, it let's you creating objects. For example the class could be a factory and the objects the cars created by that factory, that can have different properties (colors, engine, ...). 
        
\`\`\`js
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
let c1 = new Car("red")
let c2 = new Car("blue")

c1.drive(42)
c1.drive(50)

console.log(c1)
\`\`\`
        `,
      },
      {
        title: 'What is Object Oriented Programming?',
        answer: `Lorem `,
      },
    ],
  },
]

export default interviewQuestions
