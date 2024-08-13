const FileService = require("./class/fileService");
const { askQuestion, readlineClouse } = require('./utils/questionUtils');
const DataService = require('./class/dataService');
const { handleAddTask, handleEditTask, handleDeleteTask } = require("./functions/taskFunctions");


const main = async () => {
	try {
		// Crear y leer el archivo
		const fileService = new FileService('./db/list-task.json', []);
		const dataService = new DataService(fileService);

		// Crear el archivo si no existe
		await fileService.createFile()

		// Cargar los datos del archivo
		await dataService.loadContent();

		let exit = false;

		while(!exit) {
			console.log('***************************************');
			const operation = await askQuestion(`Selecciona una opción:\n0.-Salir\n1.-Agregar tarea\n2.-Editar tarea\n3.-Eliminar tarea\n`);

			switch(operation){
				case '0':
					exit = true;
					break;
				case '1': 
					await handleAddTask(dataService);
					break;
				case '2':
					await handleEditTask(dataService);
					break;
				case '3':
					await handleDeleteTask(dataService);
					break;
				default:
					console.log('Operación no válida');
					break;
			}
		}

		readlineClouse();

	} catch (error) {
		console.log('Ocurrio un error: ', error);
	}
}

main();