const Engineer = require('../lib/Engineer')

test('creates an empoloyee object', () => {
    const engineer = new Engineer('Mike');

    expect(engineer.github).toBe('Dudehub');
})