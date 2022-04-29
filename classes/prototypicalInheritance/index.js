// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype that's why addsubject function can be acquired by each instanitated object inside constructor function

// every object has prototype

// console.log(new Object());
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}
Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];   
}

const student1 = new Student(1, 'Reed');

// console.log(Object.getPrototypeOf(student1).constructor);
console.log(student1.__proto__.__proto__.__proto__);