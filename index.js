const inquirer = require("inquirer");
const fs = require("fs");

//Import required classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern");

//start -> team manager setup, name, Id, email, office number
//option -> add engineer or intern or finish
//add engineer -> name, id, email, github -> return
//add intern -> name, id, email, school -> return
//finish -> return completed HTML

let employees = [];

// Main cli functionaility
async function main() {

  console.log("Beginning team creation. Please enter the team manager's information:")

  let manager = new Manager();
  await manager.query();

  // let manager = await queryManager();
  employees.push(manager);

  // console.log(employees)

  // Main user polling loop
  finished = false;
  while (!finished) {

    let choice = await getEmployeeType();

    // Break loop if user selects "Finish" option
    if (choice.employeeType === "Finish") {
      finished = true;
      break
    }

    // Instantiate the chosen employee type
    let employee;
    if (choice.employeeType === "Engineer") {
      employee = new Engineer();
    } else if (choice.employeeType === "Intern") {
      employee = new Intern();
    } else {
      employee = new Employee();
    }

    // Populate employee variables
    await employee.query();

    // Add employee to team list
    employees.push(employee);

  }

  // Generate HTML page based on team employees
  await generateHtml(employees);

}

async function getEmployeeType() {
  return inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "Select an Employee Type to add or finish:",
      choices: ["Engineer","Intern","Finish"]
    }
  ])
}

// Main loop initiation call
main()


async function generateHtml(employees) {
  // Read HTML base template file
  const baseHtml = fs.readFileSync("./src/base.html","utf8");

  // Extract card HTML from each employee and join
  let cardHtml = employees.map((emp) => emp.getCard()).join(' ');

  // Convert {{cards}} placeholder in template to extracted HTML
  let modHtml = baseHtml.replace("{{cards}}",cardHtml);

  fs.writeFile("./dist/outHtml.html",modHtml,(err)=>{
    (err)?console.log(err):'';
  })
}


module.exports = main;