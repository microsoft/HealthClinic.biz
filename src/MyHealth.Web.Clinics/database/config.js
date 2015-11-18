var defaultConfig = {
	user: 'clinic',
	password: 'Health@1',
	server: 'localhost',
	database: 'myhealth'
};

var config = {
	user: process.env.BBDD_USER || defaultConfig.user,
	password: process.env.BBDD_PASSWORD || defaultConfig.password,
	server: process.env.BBDD_SERVER || defaultConfig.server,
	database: process.env.BBDD_DATABASE || defaultConfig.database,

	options: {
		encrypt: true // in order to use Microsoft Azure
	}
};

module.exports = config;