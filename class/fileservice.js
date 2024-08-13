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

    async writeFile(content) {
        try {
            await fs.writeFile(this.fileName, JSON.stringify(content));
            console.log('Se modificó el archivo');
        } catch(error) {
            console.log('writeFileError: ', error);
        }
    }
}

module.exports = FileService;