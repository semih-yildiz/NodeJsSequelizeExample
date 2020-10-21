const express= require("express");
const router = express.Router();
const cors = require('cors');
const persons = require("../controllers/person.controller.js");


router.post('/getAll', cors(), function(req, res, next) {
    persons.getAll(req, res);
});

router.post('/create', cors(), function(req, res, next) {
    persons.create(req, res);
});

module.exports = router;
