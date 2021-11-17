class Employee {
  constructor(name="",id="",email="") {

    //TODO add validation

    this.name = name;
    this.id = id;
    this.email = email;
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

  getAux() {
    return ""
  }

  // Return template card for employee. getAux will be implemented by each employee type individually
  getCard() {
    let card = 
`<div class="card">
  <div class="card-header">
    <h2>${this.getName()}</h2>
    <h3>${this.getRole()}</h3>
  </div>
    <ul>
      <li>${this.getId()}</li>
      <li>${this.getEmail()}</li>
      <li>${this.getAux()}</li>
    </ul>
  <div class="card-body">
</div>`
  }
}

module.exports = Employee;