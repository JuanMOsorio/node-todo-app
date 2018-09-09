const { argv } = require('./config/yargs');
const colors = require('colors');

const toDo = require('./to-do/to-do.js');


console.log(argv);

let comando = argv._[0];

switch(comando) {

  case 'create':
    let task = toDo.create(argv.description);
    console.log(task);
    break;

  case 'list':
    let list = toDo.getList();

    for (let task of list) {
      console.log('==========Por Hacer==========='.green);
      console.log(task.description);
      console.log(`status: ${task.completed}`);
      console.log('==========Por Hacer==========='.green);
    }

    break;

  case 'update':
    let updated = toDo.update(argv.description, argv.completed);
    console.log(updated);
    break;

  case 'delete':
    let deleted = toDo.deleteTask(argv.description)
    console.log(deleted)

    break;

  default:
    console.log('Comando no es reconocido');

}