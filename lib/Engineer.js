const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name,id,email,github) {
    super(name,id,email)

    this.github = github;
    this.queryList.push(["github",`Enter ${this.getRole()}'s Github username:`])
  }

  getGithub() {
    return `Github: <a href="https://github.com/${this.github}/" target="_blank" rel="noopener noreferrer">${this.github}</a>`;
  }

  getRole() {
    return "Engineer";
  }

  getAux() {
    return this.getGithub();
  }

}

module.exports = Engineer;