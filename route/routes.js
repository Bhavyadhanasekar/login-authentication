var express = require('express');
var studentsController = require('../src/students/studentsController');

const router =express.Router();
router.route('/students/login').post(studentsController.loginstudentsControllerFn);
router.route('/students/create').post(studentsController.createstudentsControllerFn);

module.exports=router;