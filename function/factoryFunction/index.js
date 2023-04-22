/** 
What is factory function?
 A JavaScript factory function is a function that creates an object and returns it. 
 It's a way to create multiple instances of objects that share similar properties and methods without having to create each object individually.
 */


 //eg.1
 function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
}
const person1 = createPerson("John", 30);
const person2 = createPerson("Jane", 25);

person1.sayHello(); // logs "Hello, my name is John and I am 30 years old."
person2.sayHello(); // logs "Hello, my name is Jane and I am 25 years old."

/* 
This factory function takes two parameters, name and age, and returns an object with those properties as well as a sayHello method. 
You can use this factory function to create multiple instances of the Person object:

*/



//e.g2
/*

Let's say you're building a web application that needs to manage a list of tasks. Each task will have a title, description, 
and a completion status. You want to create a factory function that will allow you to create task objects easily,
 without having to repeat the code for each task.

*/

function createTask(title, description) {
  let isCompleted = false;

  return {
    title: title,
    description: description,
    isCompleted: function() {
      return isCompleted;
    },
    toggleCompleted: function() {
      isCompleted = !isCompleted;
    }
  };
}
const task1 = createTask("Complete project", "Finish the web application by Friday.");
const task2 = createTask("Go to the gym", "Work out for an hour.");

console.log(task1.title); // logs "Complete project"
console.log(task2.description); // logs "Work out for an hour"
console.log(task1.isCompleted()); // logs "false"

task1.toggleCompleted();
console.log(task1.isCompleted()); // logs "true"



// create afactory function that creates html elements and append it to the dom

function createElement(tagName, attributes, text) {
  const element = document.createElement(tagName); // Create the element
  
  // Add any attributes to the element
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  
  // Add any text content to the element
  if (text) {
    element.textContent = text;
  }
  
  // Append the element to the DOM
  document.body.appendChild(element);
  
  return element; // Return the created element
}

createElement("div", {class: "my-class"}, "Hello, world!");