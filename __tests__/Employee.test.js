const Employee = require("../lib/Employee");
const inquirer = require("inquirer");

jest.mock("inquirer")

describe('Initialization', () => {
  it('Should set class variables when constructed', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    expect(emp.name).toBe('Andrew');
    expect(emp.id).toBe(1);
    expect(emp.email).toBe('a@a.com');
  });

  it('Should input default values when constructed without input', () => {
    const emp = new Employee();

    expect(emp.name).toBe("");
    expect(emp.id).toBe(0);
    expect(emp.email).toBe("");
  });

  it('Should create a default query list when constructed', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    expect(emp.queryList[0]).toEqual(["name",`Enter ${emp.getRole()}'s name:`,"string"],);
    expect(emp.queryList[1]).toEqual(["id",`Enter ${emp.getRole()}'s ID number:`,"integer"],);
    expect(emp.queryList[2]).toEqual(["email",`Enter ${emp.getRole()}'s email:`,"string"],);
  });
});

describe('Getters', () => {
  it('Should return the employee name', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    expect(emp.getName()).toEqual('Andrew');
  })

  it('Should return the employee ID', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    expect(emp.getId()).toEqual('ID: 1');
  })

  it('Should return the employee email', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    expect(emp.getEmail()).toEqual('Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a>');
  })

  it('Should return the employee role', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    expect(emp.getRole()).toEqual("Employee");
  })

  it('Should return the employee auxiliary value of "" for a base employee', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    expect(emp.getAux()).toEqual("");
  })

  it('Should return the employee card html', () => {
    const emp = new Employee('Andrew',1,'a@a.com');

    let expectedCard = `<div class="card m-2 flex-fill">
  <div class="card-header bg-info">
    <h2>Andrew</h2>
    <h3>Employee</h3>
  </div>
  <div class="card-body p-3 bg-light">
    <ul class="list-group">
      <li class="list-group-item">ID: 1</li>
      <li class="list-group-item">Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a></li>
      <li class="list-group-item"></li>
    </ul>
  </div>
</div>`;

  expect(emp.getCard()).toEqual(expectedCard);

  })

});

describe('Queries', () => {

  it('Should populate employee values from query', async () => {
    //'Andrew',1,'a@a.com'
    
    const emp = new Employee();

    inquirer.prompt = jest.fn().mockReturnValue({name: "Andrew", id: 1, email: 'a@a.com'});

    await emp.query()

    expect(emp.name).toBe('Andrew');
    expect(emp.id).toBe(1);
    expect(emp.email).toBe('a@a.com');
  });

  // TODO: how to test invalid user input types?

});