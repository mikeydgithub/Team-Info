// create the about section

const managerCard = managerData => {
  if (!managerData) { return ''; }

  return `
    <section class="my-3 card" id="about" style="text-align:center;">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
      <p>Name:${managerData.manager_name}(${managerData.office_number})</p>
      <p>Email:${managerData.manager_email}</p>
    </section>
  `;
};

const employeeCard = employeeData => {
  if (!employeeData) { return ''; }

  return `
    <section class="my-3 card" id="about" style="text-align:center;">
      <h2 class="text-dark bg-primary p-2 display-inline-block">${employeeData.employee_type}</h2>
      <p>Name:${employeeData.employee_name}(${employeeData.employee_id})</p>
      <p>Email:${employeeData.employee_email}</p>
      <p>${employeeData.employee_type == 'Engineer' ? 'Github' : 'School'}:${employeeData.employee_custom}</p>
    </section>
  `;
};


// create the employee cards
const employeeCards = employees => {
  return `
    <section class="my-3">
      <div class="flex-row justify-space-around">
      ${employees
        .map(employee => employeeCard(employee))
        .join('')}
      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { employees, manager } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Builder Pro</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">${managerCard(manager)}</main>
    ${employeeCards(employees)}
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by Team Builder Pro</h3>
    </footer>
  </body>
  </html>
  `;
};