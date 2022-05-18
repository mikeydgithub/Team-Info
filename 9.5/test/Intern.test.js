const Intern = require('../lib/Intern')


test('creates an intern object', () => {
    const intern = new Intern('Mike');

    expect(intern.school).toBe('University of Tacos');
})