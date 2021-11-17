const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name,id,email,school) {
    super(name,id,email)

    this.school = school;
  }

  getSchool() {
    return `School: ${this.school}`;
  }

  getRole() {
    return "Intern";
  }

  getAux() {
    return this.getSchool();
  }

}

module.exports = Intern;