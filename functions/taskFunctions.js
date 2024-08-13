const Task = require("../class/task");
const { statusTask } = require("../utils/constants");
const { askQuestion } = require("../utils/questionUtils")

// Agregar un nuevo valor
const handleAddTask = async (dataservice) => {
	const taskDescription = await askQuestion('Descripción de la tarea: ');
	const newTask = new Task(
		dataservice.getLastId(),
		taskDescription
	);
	dataservice.addTask(newTask.getTask());
	await dataservice.saveChanges();
}

// Editar una tarea
const handleEditTask = async (dataService) => {
	let value;
	const id = await askQuestion('ID de la tarea a editar: ');
	const property =  await askQuestion('Selecciona una opción:\n1.-Descripción\n2.-Estado\n');

	if(property === '2') {
		const status = await askQuestion('Selecciona el nuevo estado:\nA.-TODO\nB.-IN-PROGRESS\nC.-DONE\n');
		value = statusTask[status].value;
	} else {
		value = await askQuestion('Nuevo valor: ');
	}

	dataService.editTask(
		id,
		property === '2' ? 'status' : 'description',
		value
	);
	await dataService.saveChanges();
}

// Eliminar una tarea
const handleDeleteTask = async (dataService) => {
	const id = await askQuestion('ID de la tarea a eliminar: ');
	dataService.deleteTask(id);
	await dataService.saveChanges();
}


module.exports = {
	handleAddTask,
	handleEditTask,
	handleDeleteTask
}