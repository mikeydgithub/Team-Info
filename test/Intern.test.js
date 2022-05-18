const Intern = require('../lib/Intern')


test('creates an intern object', () => {

    const name = 'Steve'
    const email = 'Steve@test.net'
    const id = 6
    const school = 'University of Nowhere'

    const intern = new Intern(name, id, email, school);
    
    expect(intern.name).toBe(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school)
    expect(intern.getRole()).toBe('Intern');
})