const { argv } = require('yargs');

console.log(argv);

let comand = argv._[0];

switch(comand) {
  case 'crear':
    console.log(`Crear por hacer`);
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