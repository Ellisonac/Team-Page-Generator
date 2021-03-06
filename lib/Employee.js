const inquirer = require("inquirer");

class Employee {
  constructor(name="",id=0,email="") {
    this.name = name;
    this.id = id;
    this.email = email;

    // This queryList contains all queries needed by the query() constructor function that will be used by this code
    // This allows for easy extension of the query() method for child classes by pushing to the query list for new values
    this.queryList = [
      ["name",`Enter ${this.getRole()}'s name:`,"string"],
      ["id",`Enter ${this.getRole()}'s ID number:`,"integer"],
      ["email",`Enter ${this.getRole()}'s email:`,"string"],
    ];
  }

  getName() {
    return this.name;
  }

  getId() {
    return `ID: ${this.id}`;
  }

  getEmail() {
    return `Email: <a href="mailto:${this.email}?Subject=Hello%20Employee">${this.email}</a>`;
  }

  getRole() {
    return "Employee";
  }

  //This is an abstract function in the parent class that allows for easy extension of the getCard() method in child classes
  getAux() {
    return "";
  }

  // Return template card for employee. getAux will be implemented by each employee type individually
  getCard() {
    return `<div class="card m-2 flex-fill">
  <div class="card-header bg-info">
    <h2>${this.getName()}</h2>
    <h3>${this.getRole()}</h3>
  </div>
  <div class="card-body p-3 bg-light">
    <ul class="list-group">
      <li class="list-group-item">${this.getId()}</li>
      <li class="list-group-item">${this.getEmail()}</li>
      <li class="list-group-item">${this.getAux()}</li>
    </ul>
  </div>
</div>`
  }

  //For this application, a non-standard query based constructor is more effective and can be extended in subclasses more easily.
  async query() {
    // Query required input for the current class. Each extended class adds to this question list in the default constructor
    let questions = this.queryList.map(question => {
      return {
        type: "input",
        name: question[0],
        message: question[1],
      };
    })

    // Query the user for employee data
    let response = await inquirer.prompt(questions);

    // Set class variables to received response
    for (const key in response) {
      this[key] = response[key];
    }
  }

}

module.exports = Employee;