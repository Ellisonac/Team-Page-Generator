const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

await inquirer.prompt(question);

//start -> team manager setup, name, Id, email, office number
//option -> add engineer or intern or finish
//add engineer -> name, id, email, github -> return
//add intern -> name, id, email, school -> return
//finish -> return completed HTML

let test = [
  new Manager("Mark",2,"aaaa@good.com",36),
  new Intern("Annie",1001,"bbb@bad.com","university31"),
  new Engineer("Dave",3,"dave@dave.dave","davedev"),
];





function generateHtml(employees) {
  let response = await fetch("./src/base.html");
  let baseHtml = response.text();

  console.log(baseHtml)

}

generateHtml(test);
