# Team Page Generator

## Description

This CLI application allows a user to quickly create a basic webpage to show a team description page. The application uses Inquirer to guide the user through prompts to define the team manager and then add additional engineers or interns to their team. The end result is a packaged HTML/CSS static page with cards for each team member.

See a project run through at: [Team Page Generator Walk Through](..link)

![License Badge](https://img.shields.io/badge/License-MIT-informational?logoColor=white&color=1CA2F1)

## Table of Contents

- [Installation](#installation)
- [How to Use](#how-to-use)
- [How to Contribute](#how-to-contribute)
- [Tests](#testing)
- [Questions](#questions)
- [License](#license)

## Installation

This project can be cloned from this repository and then run at the command line with Node.js installed.

## How to Use

After cloning the repository, install dependencies in the cloned folder and start the program with:


```command
  npm install
  node index.js
```

The user then inputs the manager's information followed by optional additional engineers and interns for the team. The application can be quit with ctrl+c or by selecting finish on the selection.

## How to Contribute

This code can be contributed to by submitting an issue on Github.

## Tests

This code can be tested by running either of:

```command
  npm test
  npm run test-cover
```

## Examples

Example generated files can be found under /dist

Example cli session:
```command
  % node index.js 
  Beginning team creation. Please enter the team manager's information:
  ? Enter Manager's name: Andrew
  ? Enter Manager's ID number: 1
  ? Enter Manager's email: test@test.com
  ? Enter Manager's office number: 2
  ? Select an Employee Type to add or finish: Engineer
  ? Enter Engineer's name: Eric
  ? Enter Engineer's ID number: 5
  ? Enter Engineer's email: eric@test.com
  ? Enter Engineer's Github username: ericgit
  ? Select an Employee Type to add or finish: Intern
  ? Enter Intern's name: Sarah
  ? Enter Intern's ID number: 33
  ? Enter Intern's email: sarah@test.com
  ? Enter Intern's school name: UCSD
  ? Select an Employee Type to add or finish: Finish
```

## Questions

Find my other projects at: [ellisonac](https://github.com/ellisonac)

Contact me at: acannonellison@gmail.com

## License 
![License Badge](https://img.shields.io/badge/License-MIT-informational?logoColor=white&color=1CA2F1)

This project is covered under the following license:

MIT License

Copyright (c) [2021]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

