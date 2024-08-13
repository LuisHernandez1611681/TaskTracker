class DataService {
    constructor(fileService) {
        this.fileService = fileService;
        this.contentFile = []; // Inicialmente vacío
    }

    async loadContent() {
        this.contentFile = await this.fileService.readFile();
        console.log(this.contentFile);
    }

}

module.exports = DataService;