const { argv } = require('./config/yargs');
const { create } = require('./to-do/to-do.js');


console.log(argv);

let comando = argv._[0];

switch(comando) {

  case 'crear':
    let task = create(argv.description);
    console.log(task);
    break;
  case 'listar':
    console.log(`Mostrar todas las tareas por hacer`);
    break;
  case 'actualizar':
    console.log(`Actualiza una tarea por hacer`);
    break;
  default:
    console.log('Comando no es reconocido');

}