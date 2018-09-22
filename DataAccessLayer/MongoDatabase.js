const mongoose = require('mongoose');
module.exports = async function initializeDatabase() {
	return new Promise((resolve, reject) => {
		mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true });
		const database = mongoose.connection;
		database.on('error', (e) => {
			return reject(e);
		});
		database.once('open', () => {
			return resolve();
		});
	})
}