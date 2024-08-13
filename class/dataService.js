const { getCurrentDate } = require("../utils/dateUtils");

class DataService {
	constructor(fileService) {
		this.fileService = fileService;
		this.contentFile = []; // Inicialmente vacío
	}

	// Obtenemos el contenido del archivo
	async loadContent() {
		this.contentFile = await this.fileService.readFile();
	}

	// Valida que eixsta el id
	searchTask(id) {
		let task = this.contentFile.find(task => task.id == id);
		if(task) {
			return task;
		} else {
			console.log('No existe el id');
			return this.contentFile;
		}
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

	// Se edita la tarea
	editTask(id, property, value) {
		let task = this.searchTask(id);
		if(task) {
			task[property] = value;
			task['updatedAt'] = getCurrentDate();
			return this.contentFile;
		}
	}

	// Ejecutamos la funcion que guarda los cambios en el archivo
	async saveChanges() {
		await this.fileService.writeFile(this.contentFile);
	}

}

module.exports = DataService;