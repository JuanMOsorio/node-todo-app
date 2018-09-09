const argv = require('yargs')
  .command('create', 'Crear un elemento por hacer', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea por hacer'
    }
  })
  .command('update',  'Actualizar el estado completado de una tarea', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea por hacer',
    },
    completed: {
      default: true,
      alias: 'c',
      description: 'Marca como completado o pendiente la tarea'
    }
  })
  .help()
  .argv;

  module.exports = { argv };
