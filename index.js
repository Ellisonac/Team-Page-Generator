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

  console.log("/nBeginning team creation. Please enter the team manager's information")

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

    employees.push(employee)

  }

  await generateHtml(employees);

}

// On startup copy current style.css to out directory
async function init() {
  fs.copyFile('./src/style.css','./dist/style.css',(err)=>{})
}

// On startup ask for manager information
async function queryManager() {
  let manager = await inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "Enter manager's name:"
    },
    {
      type: "input",
      name: "id",
      message: "Enter manager's ID:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter manager's email:"
    },
    {
      type: "input",
      name: "officeNum",
      message: "Enter manager's office number:"
    },
  ])

  return new Manager(manager.name,manager.id,manager.email,manager.officeNum);
}

// Query an engineer's information
async function queryEngineer() {
  let engineer = await inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "Enter engineer's name:"
    },
    {
      type: "input",
      name: "id",
      message: "Enter engineer's ID:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter engineer's email:"
    },
    {
      type: "input",
      name: "github",
      message: "Enter manager's Github username:"
    },
  ])

  return new Engineer(engineer.name,engineer.id,engineer.email,engineer.github);
}

async function queryIntern() {
  let intern = await inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "Enter intern's name:"
    },
    {
      type: "input",
      name: "id",
      message: "Enter intern's ID:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter intern's email:"
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern's school name:"
    },
  ])

  return new Intern(intern.name,intern.id,intern.email,intern.school);
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
  const baseHtml = fs.readFileSync("./src/base.html","utf8");

  let cardHtml = employees.map((emp) => emp.getCard()).join(' ');

  let modHtml = baseHtml.replace("{{cards}}",cardHtml);

  fs.writeFile("./dist/outHtml.html",modHtml,()=>{})
}

//generateHtml(test);
