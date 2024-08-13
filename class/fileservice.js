const fs = require('node:fs').promises

class FileService {
    constructor(fileName) {
        this.fileName = fileName;
    }

    // Creamos el archivo
    async createFile() {
        try {
            await fs.access(this.fileName);
        } catch(err) {
            // Si el archivo no existe, se crea con contendio vacío
            await this.writeFile([])
        }
    }

    // Leemos los valores que estan en el archivo
    async readFile() {
        try {
            const data = await fs.readFile(this.fileName, 'utf8');
            return JSON.parse(data);
        } catch(error) {
            console.error('readFileError: ', error);
            return [];
        } 
    }

    // Escribimos en el archivo
    async writeFile(content) {
        try {
            await fs.writeFile(this.fileName, JSON.stringify(content));
            console.log('Se modificó el archivo');
        } catch(error) {
            console.error('writeFileError: ', error);
        }
    }
}

module.exports = FileService;