const { statusTask } = require('../utils/constants');
const { getCurrentDate } = require('../utils/dateUtils');

class Task {
	constructor(id, description, status = statusTask.A.value) {
		this.id = id;
		this.description = description;
		this.status = status;
		this.createdAt = getCurrentDate();
		this.updatedAt = "";
	}

	getTask() {
		return {
			'id': this.id,
			'description': this.description,
			'status': this.status,
			'createdAt': this.createdAt,
			'updatedAt': this.updatedAt
		}
	}
}

module.exports = Task;