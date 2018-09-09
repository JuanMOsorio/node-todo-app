const description = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
}

const completed = {
  default: true,
  alias: 'c',
  description: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
  .command('create', 'Crear un elemento por hacer', {
    description
  })
  .command('update',  'Actualizar el estado completado de una tarea', {
    description,
    completed,
  })
  .command('delete',  'Borra una tarea', {
    description
  })
  .help()
  .argv;

  module.exports = { argv };
