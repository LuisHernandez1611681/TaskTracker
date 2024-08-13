const FileService = require("./class/fileservice");


const main = async () => {
	try {
		// Crear y leer el archivo
		const fileService = new FileService('./db/list-task.json', []);

		// Crear el archivo si no existe
		await fileService.createFile()


	} catch (error) {
		console.log('Ocurrio un error: ', error);
	}
}

main();