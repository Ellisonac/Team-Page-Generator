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

  async queryManager() {
    await this.query()
    let response = await inquirer.prompt([
      {
        type: "input",
        name: "officeNum",
        message: "Enter manager's office number:"
      },
    ])

    this.officeNum = response.officeNum;
  }

}

module.exports = Manager;