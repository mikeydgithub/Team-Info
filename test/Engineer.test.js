const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {

    const name = 'Edward'
    const email = 'Edward@test.net'
    const id = 9
    const github = 'EdwardCodes'

    const engineer = new Engineer(name, id, email, github);
    
    expect(engineer.name).toBe(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github)
    expect(engineer.getRole()).toBe('Engineer');
})