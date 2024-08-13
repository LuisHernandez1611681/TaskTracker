const FileService = require("./class/fileservice");
const { askQuestion, readlineClouse } = require('./utils/questionUtils');


const main = async () => {
	try {
		// Crear y leer el archivo
		const fileService = new FileService('./db/list-task.json', []);

		// Crear el archivo si no existe
		await fileService.createFile()

		let exit = false;

		while(!exit) {
			console.log('***************************************');
			const operation = await askQuestion(`Selecciona una opción:\n0.-Salir\n1.-Agregar tarea\n`);

			switch(operation){
				case '0':
					exit = true;
					break;
				case '1': 
					console.log("Agrega un nuevo valor");
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