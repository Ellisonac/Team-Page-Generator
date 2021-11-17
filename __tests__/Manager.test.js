const Manager = require("../lib/Manager");
const inquirer = require("inquirer");

jest.mock("inquirer")

describe('Initialization', () => {
  it('Should set class variables when constructed', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.name).toBe('Andrew');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('a@a.com');
    expect(manager.officeNum).toBe(3);
  });

  it('Should input default values when constructed without input', () => {
    const manager = new Manager();

    expect(manager.name).toBe("");
    expect(manager.id).toBe(0);
    expect(manager.email).toBe("");
    expect(manager.officeNum).toBe(0);
  });

  it('Should create a default query list + manager query when constructed', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.queryList[0]).toEqual(["name",`Enter ${manager.getRole()}'s name:`,"string"],);
    expect(manager.queryList[1]).toEqual(["id",`Enter ${manager.getRole()}'s ID number:`,"integer"],);
    expect(manager.queryList[2]).toEqual(["email",`Enter ${manager.getRole()}'s email:`,"string"],);
    expect(manager.queryList[3]).toEqual(["officeNum",`Enter ${manager.getRole()}'s office number:`,"integer"],);
  });
});

describe('Getters', () => {
  it('Should return the Manager name', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.getName()).toEqual('Andrew');
  })

  it('Should return the Manager ID', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.getId()).toEqual('ID: 1');
  })

  it('Should return the Manager email', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.getEmail()).toEqual('Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a>');
  })

  it('Should return the Manager office number', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.getOfficeNum()).toEqual('Office Number: 3');
  })

  it('Should return the Manager role', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.getRole()).toEqual("Manager");
  })

  it('Should return the Manager auxiliary value of getOfficeNum() for a Manager', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    expect(manager.getAux()).toEqual("Office Number: 3");
  })

  it('Should return the Manager card html', () => {
    const manager = new Manager('Andrew',1,'a@a.com',3);

    let expectedCard = `<div class="card m-2 flex-fill">
  <div class="card-header bg-info">
    <h2>Andrew</h2>
    <h3>Manager</h3>
  </div>
  <div class="card-body p-3 bg-light">
    <ul class="list-group">
      <li class="list-group-item">ID: 1</li>
      <li class="list-group-item">Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a></li>
      <li class="list-group-item">Office Number: 3</li>
    </ul>
  </div>
</div>`;

  expect(manager.getCard()).toEqual(expectedCard);

  })

});

describe('Queries', () => {

  it('Should populate Manager values from query', async () => {
    //'Andrew',1,'a@a.com'
    
    const manager = new Manager();

    inquirer.prompt = jest.fn().mockReturnValue({name: "Andrew", id: 1, email: 'a@a.com', officeNum: 3});

    await manager.query()

    expect(manager.name).toBe('Andrew');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('a@a.com');
    expect(manager.officeNum).toBe(3);
  });

  // TODO: how to test invalid user input types?

});