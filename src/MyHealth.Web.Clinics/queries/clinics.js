var mssqlClient = require('../database/mssqlClient');

module.exports.get = function () {

	return mssqlClient.getRequester()
		.then(function (requester) {
			return requester.query('select Name, Address, City, WaitTimeAvg from Tenant');
		});

};