const Task = require("../class/task");
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

module.exports = {
	handleAddTask
}