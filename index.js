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

  //console.log("Beginning team creation. Please enter the team manager's information:")

  init();

  let manager = new Manager();
  await manager.query();

  // let manager = await queryManager();
  employees.push(manager);

  // Main user polling loop
  finished = false;
  while (!finished) {

    let choice = await getEmployeeType();

    if (choice.employeeType === "Finish") {
      finished = true;
      break
    }

    let employee;
    if (choice.employeeType === "Engineer") {
      employee = new Engineer();
    } else if (choice.employeeType === "Intern") {
      employee = new Intern();
    } else {
      employee = new Employee();
    }

    await employee.query();

    employees.push(employee);

  }

  await generateHtml(employees);

}

// On startup copy current style.css to out directory
async function init() {
  fs.copyFile('./src/style.css','./dist/style.css',(err)=>{
    (err)?console.log(err):'';
  })
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

main()

let test = [
  new Manager("Mark",2,"aaaa@good.com",36),
  new Intern("Annie",1001,"bbb@bad.com","university31"),
  new Engineer("Dave",3,"dave@dave.dave","davedev"),
  new Intern("Annie",1001,"bbb@bad.com","university31"),
  new Engineer("Dave",3,"dave@dave.dave","davedev"),
  new Intern("Annie",1001,"bbb@bad.com","university31"),
  new Engineer("Dave",3,"dave@dave.dave","davedev"),
  new Intern("Annie",1001,"bbb@bad.com","university31"),
  new Engineer("Dave",3,"dave@dave.dave","davedev"),
];


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
