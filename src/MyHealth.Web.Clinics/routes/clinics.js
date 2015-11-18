var express = require('express');
var router = express.Router();
var clinicsQuery = require('../queries/clinics');

router.get('/', function (req, res, next) {
    clinicsQuery.get()
        .then(function (clinics) {
            res.send(clinics);
        })
        .fail(function (err) {
            next(err);
        });
});

module.exports = router;