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
    return `<div class="card m-2">
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
}

module.exports = Employee;