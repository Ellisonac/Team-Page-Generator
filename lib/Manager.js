const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name,id,email,officeNum=0) {
    super(name,id,email)

    this.officeNum = officeNum;
    this.queryList.push(["officeNum",`Enter ${this.getRole()}'s office number:`,"integer"])
  }

  getOfficeNum() {
    return `Office Number: ${this.officeNum}`;
  }

  // Manager extends employee by implementing getAux for the additional value of Office Number
  getAux() {
    return this.getOfficeNum();
  }

  getRole() {
    return "Manager";
  }

}

module.exports = Manager;