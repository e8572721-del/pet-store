const requireField = fieldName => {
  return value => {
    if (String(value).length === 0 ) {
      return fieldName + ' is required'
    }
    return true
  }
}

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name')
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile:
          'plop-templates/Component/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile:
          'plop-templates/Component/Component.test.js.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile:
          'plop-templates/Component/Component.scss.hbs',
      },
    ],
  })
}