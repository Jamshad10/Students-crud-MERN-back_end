const express = require('express');
const router = express.Router();
const {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} = require('../../controller/user/user');

//user routing
router.get('/',getStudents);
router.post('/addstudent',addStudent);
router.put('/editstudent/:id',updateStudent);
router.delete('/deletestudent/:id',deleteStudent);

module.exports = router;