const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Boss');

    expect(manager.name).toBe('Boss');
})