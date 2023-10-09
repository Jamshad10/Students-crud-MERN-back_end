const StudentsModel = require('../../models/user/studentsSchema')

const getStudents = (req, res) => {
    StudentsModel.find()
        .then(students => res.json(students))
        .catch(err => res.json(err));
}

const addStudent = async (req, res) => {
    try {
        console.log('request-body', req.body);
        const student = new StudentsModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            address: req.body.address
        })
        student.save().then(result => {
            console.log(result)
            res.send('student added')
        })
    } catch (error) {
        console.log(error);
    }
};

const updateStudent = (req, res) => {
    const id = req.params.id
    StudentsModel.findByIdAndUpdate({ _id: id }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        address: req.body.address
    }).then(student => res.json(student))
        .catch(err => res.json(err))
};

const deleteStudent = (req, res) => {
    const id = req.params.id;
    StudentsModel.findByIdAndDelete({ _id: id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
};

module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
}