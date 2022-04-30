const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');


const employee_ids = [];
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'manager_name',
      message: 'What is your team managers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employee_id',
      message: 'Enter your manager/employee id number. (Required)',
      validate: managerID => {
        if (managerID) {
          // check if the id is already used
          if(employee_ids.indexOf(managerID) < 0) {
            employee_ids.push(managerID);
            return true
          }
          console.log('Employee ID is already in use!')
          return false;
        } else {
          console.log('Please enter your manager/employee id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manager_email',
      message: 'Enter your manager email. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your manager/employee email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office_number',
      message: 'Enter your office number. (Required)',
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    }
  ]);
};

const promptChooseEmployeeType = () => {
  return inquirer.prompt([
      {
        type: 'list',
        name: 'employee_type',
        message: 'Engineer or Intern?',
        choices: ['Engineer', 'Intern']
      }
  ]);
}

const promptEmployee = (employee_type) => {
  console.log(employee_type)
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employee_name',
      message: 'What is the ' + employee_type + 's name? (Required)',
      validate: nameInput => {
        if (nameInput) {
        return true;
      } else {
        console.log('Please enter ' + employee_type + '\' name!')}
        return false;
      }
    },
    {
      type: 'input',
      name: 'employee_id',
      message: 'Enter your ' + employee_type + '\'s ID. (Required)',
      validate: employeeID => {
        if (employeeID) {
          return true;
        } else {
          console.log ('Enter your ' + employee_type + '\'s ID.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employee_email',
      message: 'Enter your ' + employee_type + '\'s email. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Enter your ' + employee_type + '\'s email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employee_custom',
      message: `What is your ${employee_type}'s ${employee_type == 'Engineer' ? 'Github': 'School'}? (Required)`,
      validate: customInput => {
        if (customInput) {
          return true;
        } else {
          console.log(`Please enter your ${employee_type}'s ${employee_type == 'Engineer' ? 'Github': 'School'}`)
          return false;
        }
      }
    },
  ])
}

const promptAddEmployee = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another team member?',
      default: false
    }
  ])
}

const addEmployee = async () => {
  const employee_type = await promptChooseEmployeeType();
  console.log(employee_type);
  await promptEmployee(employee_type.employee_type);
  var addMore = await promptAddEmployee();
  console.log(addMore.confirmAddEmployee);
  if(addMore.confirmAddEmployee) {await addEmployee();}
}


promptManager()
.then(addEmployee)
  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  .catch(err => {
    console.log(err);
  });
