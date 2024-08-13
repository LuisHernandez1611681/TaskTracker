const readline = require('readline')

// Crear una interfaz readline
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Función para pedir información
const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

const readlineClouse = () => rl.close();

module.exports = {
	askQuestion,
	readlineClouse
}