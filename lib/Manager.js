const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name,id,email,officeNum) {
    super(name,id,email)

    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return `Office Number: ${this.officeNum}`;
  }

  getAux() {
    return this.getOfficeNum();
  }

  getRole() {
    return "<i class='fas fa-coffee'></i>Manager";
  }

}

module.exports = Manager;