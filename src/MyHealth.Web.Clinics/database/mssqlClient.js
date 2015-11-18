var sql = require('mssql');
var config = require('./config');
var request = require('./request');
var q = require('q');

module.exports.getRequester = function () {

	var deferred = q.defer();
	
	sql.connect(config, function (err) {

		if (err) {
			deferred.reject(new Error(err));
			return;
		}
		
		var requester = request.create();
		deferred.resolve(requester);

	});

	sql.on('error', function (err) {
		deferred.reject(new Error(err));
	});

	return deferred.promise;
};