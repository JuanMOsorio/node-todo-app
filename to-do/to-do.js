const fs = require('fs');

let listToDo = [];

const saveDB = () => {

	let data = JSON.stringify(listToDo);

	fs.writeFile('db/data.json', data, err => {
		if (err) throw new Error('No se pudo grabar', err);
	});

}

const loadBD = () => {
	
	try {
		listToDo = require('../db/data.json');
	} catch (error) {
		listToDo = [];
	}

}

const create = description => {

	loadBD();

	let toDo = {
		description,
		completed: false
	};

	listToDo.push(toDo);
	saveDB();

	return toDo;

}

const getList = () => {
	loadBD();
	return listToDo;
}

const update = (description, completed) => {

	loadBD();

	let index = listToDo.findIndex(task => task.description === description);

	if (index >= 0) {
		listToDo[index].completed = completed;
		saveDB();
		return true;
	} else {
		return false;
	}

}

module.exports = { 
	create,
	getList,
	update
};