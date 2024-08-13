const Enum = require('enum');

const statusTask = new Enum({
	A: 'TODO',
	B: 'IN-PROGRESS',
	C: 'DONE'
});

module.exports = {
	statusTask
}