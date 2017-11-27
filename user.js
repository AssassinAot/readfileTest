class User {
  constructor () {
    this.firstName;
    this.lastName;
  }
  getFullName () {
    return `The Full Name is ${this.firstName} ${this.lastName}`;
  }
  setFirstName (name) {
    this.firstName = name;
  }
  setFirstName (name) {
    this.firstName = name;
  }
}
class Employee extends User {
  constructor () {
    super();
    this.empId;
  }
  getEmployeeId () {
    return this.empId;
  }
  setEmployeeId (id) {
    this.empId = id;
  }
}
const s = new User();
const ge = new Employee();
// console.log(s.getFullName());
// Happen in new syntax is 1.constructor will do first
// constructor best practice using set/get method
s.setFirstName('xxxxx');

console.log(s.getFullName());
ge.setEmployeeId('32131221');
ge.setFirstName('DSADSA');
console.log(ge);
console.log(ge.getFullName());
console.log(ge.getEmployeeId());

