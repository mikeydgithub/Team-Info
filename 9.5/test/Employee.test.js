const Employee = require('../lib/Employee.js');

test('creates an empoloyee object', () => {
    const employee = new employee('Mike');

    expect(employee.name).toBe('Mike');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('mike@test.net');
})