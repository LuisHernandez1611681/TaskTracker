class DataService {
	constructor(fileService) {
		this.fileService = fileService;
		this.contentFile = []; // Inicialmente vacío
	}

	// Obtenemos el contenido del archivo
	async loadContent() {
		this.contentFile = await this.fileService.readFile();
	}

	// Obtenemos el último id
	getLastId() {
		if (this.contentFile.length === 0) {
			return 0;
		}
		return this.contentFile[this.contentFile.length - 1].id + 1;
	}

	// Agregar una nueva task
	addTask(task) {
		this.contentFile.push(task);
	}

	// Ejecutamos la funcion que guarda los cambios en el archivo
	async saveChanges() {
		await this.fileService.writeFile(this.contentFile);
	}

}

module.exports = DataService;