const Employee = require('../lib/Employee.js');

test('creates an empoloyee object', () => {

    const name = 'Mike'
    const id = 1
    const email = 'mike@test.net'

    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toBe(email);
    expect(employee.getRole()).toBe('Employee');
})