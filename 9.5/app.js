const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


const employee_ids = [];

// Build employee data wrapper
var employeeData = { 
 employees: []
}

// Add manager info
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

// Choose employee type
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

// Add employee info
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

// Add another employee
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
  // Add employee for employee role
  const employee_type = await promptChooseEmployeeType();
  // BUild employee from questions and add to employee array
  var employee = await promptEmployee(employee_type.employee_type);
  // Come back with an object.
  employee.employee_type = employee_type.employee_type;
  employeeData.employees.push(employee);


  // Ask if additional employees are desired
  var addMore = await promptAddEmployee();
  // Build employee from prompts and add to employee array
  if(addMore.confirmAddEmployee) {await addEmployee()}
}


promptManager()
  .then(async(manager) => {
    employeeData.manager = manager;
    await addEmployee();
  })
  .then(() => {return generatePage(employeeData);})
  .then(pageHTML => {return writeFile(pageHTML);})
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
  console.log(err);
});
