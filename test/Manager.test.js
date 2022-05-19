const Manager = require('../lib/Manager')

test('creates an manager object', () => {

    const name = 'Boss'
    const email = 'Boss@test.net'
    const id = 5
    const officeNumber = 10

    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.name).toBe(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toBe(email);
    expect(manager.getRole()).toBe('Manager');
})