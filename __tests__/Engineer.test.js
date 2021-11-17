const Engineer = require("../lib/Engineer");
const inquirer = require("inquirer");

jest.mock("inquirer")

describe('Initialization', () => {
  it('Should set class variables when constructed', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    expect(engineer.name).toBe('Andrew');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('a@a.com');
    expect(engineer.github).toBe('ellisonac');
  });

  it('Should input default values when constructed without input', () => {
    const engineer = new Engineer();

    expect(engineer.name).toBe("");
    expect(engineer.id).toBe(0);
    expect(engineer.email).toBe("");
    expect(engineer.github).toBe("");
  });

  it('Should create a default query list + engineer query when constructed', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com',3,'ellisonac');

    expect(engineer.queryList[0]).toEqual(["name",`Enter Engineer's name:`,"string"],);
    expect(engineer.queryList[1]).toEqual(["id",`Enter Engineer's ID number:`,"integer"],);
    expect(engineer.queryList[2]).toEqual(["email",`Enter Engineer's email:`,"string"],);
    expect(engineer.queryList[3]).toEqual(["github",`Enter Engineer's Github username:`,"string"],);
  });
});

describe('Getters', () => {
  it('Should return the Engineer name', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    expect(engineer.getName()).toEqual('Andrew');
  })

  it('Should return the Engineer ID', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    expect(engineer.getId()).toEqual('ID: 1');
  })

  it('Should return the Engineer email', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    expect(engineer.getEmail()).toEqual('Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a>');
  })

  it('Should return the Engineer Github username', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    expect(engineer.getGithub()).toEqual('Github: <a href="https://github.com/ellisonac/" target="_blank" rel="noopener noreferrer">ellisonac</a>');
  })

  it("Should return the Engineer role", () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    expect(engineer.getRole()).toEqual("Engineer");
  })

  it('Should return the Engineer auxiliary value of getGithub() for a Engineer', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    expect(engineer.getAux()).toEqual('Github: <a href="https://github.com/ellisonac/" target="_blank" rel="noopener noreferrer">ellisonac</a>');
  })

  it('Should return the Engineer card html', () => {
    const engineer = new Engineer('Andrew',1,'a@a.com','ellisonac');

    let expectedCard = `<div class="card m-2 flex-fill">
  <div class="card-header bg-info">
    <h2>Andrew</h2>
    <h3>Engineer</h3>
  </div>
  <div class="card-body p-3 bg-light">
    <ul class="list-group">
      <li class="list-group-item">ID: 1</li>
      <li class="list-group-item">Email: <a href="mailto:a@a.com?Subject=Hello%20Employee">a@a.com</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/ellisonac/" target="_blank" rel="noopener noreferrer">ellisonac</a></li>
    </ul>
  </div>
</div>`;

  expect(engineer.getCard()).toEqual(expectedCard);

  })

});

describe('Queries', () => {

  it('Should populate Engineer values from query', async () => {
    const engineer = new Engineer();

    inquirer.prompt = jest.fn().mockReturnValue({name: "Andrew", id: 1, email: 'a@a.com', github: 'ellisonac'});

    await engineer.query()

    expect(engineer.name).toBe('Andrew');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('a@a.com');
    expect(engineer.github).toBe('ellisonac');
  });

  // TODO: how to test invalid user input types?

});