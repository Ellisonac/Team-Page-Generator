const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")


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





async function generateHtml(test) {
  const baseHtml = fs.readFileSync("./src/base.html","utf8");

  console.log(baseHtml)

  console.log(test[0].getCard())

  let cardHtml = test.map((emp) => emp.getCard()).join(' ');

  let modHtml = baseHtml.replace("{{cards}}",cardHtml);

  fs.writeFile("./dist/outHtml.html",modHtml,()=>{})

}

generateHtml(test);
