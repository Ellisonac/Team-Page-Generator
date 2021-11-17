const Intern = require("../lib/Intern");
const inquirer = require("inquirer");

jest.mock("inquirer")

describe('Initialization', () => {
  it('Should set class variables when constructed', () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    expect(intern.name).toBe('Andrew');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('a@a.com');
    expect(intern.school).toBe('UCSD');
  });

  it('Should input default values when constructed without input', () => {
    const intern = new Intern();

    expect(intern.name).toBe("");
    expect(intern.id).toBe(0);
    expect(intern.email).toBe("");
    expect(intern.school).toBe("");
  });

  it('Should create a default query list + intern query when constructed', () => {
    const intern = new Intern('Andrew',1,'a@a.com',3,'UCSD');

    expect(intern.queryList[0]).toEqual(["name",`Enter Intern's name:`,"string"],);
    expect(intern.queryList[1]).toEqual(["id",`Enter Intern's ID number:`,"integer"],);
    expect(intern.queryList[2]).toEqual(["email",`Enter Intern's email:`,"string"],);
    expect(intern.queryList[3]).toEqual(["school",`Enter Intern's school name:`,"string"],);
  });
});

describe('Getters', () => {
  it('Should return the Intern name', () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    expect(intern.getName()).toEqual('Andrew');
  })

  it('Should return the Intern ID', () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    expect(intern.getId()).toEqual('ID: 1');
  })

  it('Should return the Intern email', () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    expect(intern.getEmail()).toEqual('Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a>');
  })

  it('Should return the Intern school name', () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    expect(intern.getSchool()).toEqual('School: UCSD');
  })

  it("Should return the Intern role", () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    expect(intern.getRole()).toEqual("Intern");
  })

  it('Should return the Intern auxiliary value of getOfficeNum() for a Intern', () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    expect(intern.getAux()).toEqual("School: UCSD");
  })

  it('Should return the Intern card html', () => {
    const intern = new Intern('Andrew',1,'a@a.com','UCSD');

    let expectedCard = `<div class="card m-2 flex-fill">
  <div class="card-header bg-info">
    <h2>Andrew</h2>
    <h3>Intern</h3>
  </div>
  <div class="card-body p-3 bg-light">
    <ul class="list-group">
      <li class="list-group-item">ID: 1</li>
      <li class="list-group-item">Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a></li>
      <li class="list-group-item">School: UCSD</li>
    </ul>
  </div>
</div>`;

  expect(intern.getCard()).toEqual(expectedCard);

  })

});

describe('Queries', () => {

  it('Should populate Intern values from query', async () => {
    //'Andrew',1,'a@a.com'
    
    const intern = new Intern();

    inquirer.prompt = jest.fn().mockReturnValue({name: "Andrew", id: 1, email: 'a@a.com', school: 'UCSD'});

    await intern.query()

    expect(intern.name).toBe('Andrew');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('a@a.com');
    expect(intern.school).toBe('UCSD');
  });

  // TODO: how to test invalid user input types?

});