const Employee = require('../lib/Employee.js');

test('creates an empoloyee object', () => {
    const employee = new Employee('Mike');

    expect(employee.name).toBe('Mike');
    expect(employee.id).toEqual(expect.any(1));
    expect(employee.email).toBe('mike@test.net');
})