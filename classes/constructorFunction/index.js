// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }
// constructor function
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];   
}

const student1 = new Student(1, 'Reed');
const student2 = new Student(2, 'Doug');

student1.addSubject('Math');
student2.addSubject('Physics');
console.log(student2.subjects);