const express= require("express");
const router = express.Router();
const cors = require('cors');
const persons = require("../controllers/person.controller.js");


router.post('/getAllSeq', cors(), function(req, res, next) {
    persons.getAllSeq(req, res);
});

router.post('/createSeq', cors(), function(req, res, next) {
    persons.createSeq(req, res);
});

module.exports = router;
