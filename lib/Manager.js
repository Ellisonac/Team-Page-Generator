const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name,id,email,officeNum) {
    super(name,id,email)

    this.officeNum = officeNum;
    this.queryList.push(["officeNum",`Enter ${this.getRole()}'s office number:`])
  }

  getOfficeNum() {
    return `Office Number: ${this.officeNum}`;
  }

  getAux() {
    return this.getOfficeNum();
  }

  getRole() {
    return "Manager";
  }

}

module.exports = Manager;