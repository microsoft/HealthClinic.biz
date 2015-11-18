var sql = require('mssql');
var q = require('q');

function Request() {
	this.query = function (query) {
		var deferred = q.defer();

		var request = new sql.Request();
		request.query(query, function (err, recordset) {
			if (err) {
				deferred.reject(new Error(err));
				return;
			}
			deferred.resolve(recordset);
		});

		return deferred.promise;
	};
}

module.exports.create = function () {
	return new Request();
};