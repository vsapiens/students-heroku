let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let studentCollection = mongoose.Schema({
  nombre: { type: String },
  apellido: { type: String },
  matricula: {
    type: Number,
    require: true,
    unique: true
  }
});

let Student = mongoose.model("students", studentCollection);

let StudentList = {
  getAll: function() {
    return Student.find()
      .then(students => {
        return students;
      })
      .catch(error => {
        throw Error(error);
      });
  },
  findOneByMatricula: function(elem) {
    return Student.findOne({ matricula: elem })
      .then(student => {
        return student;
      })
      .catch(error => {
        throw Error(error);
      });
  },
  create: function(newStudent) {
    return Student.create(newStudent)
      .then(student => {
        return student;
      })
      .catch(error => {
        throw Error(error);
      });
  }
};

module.exports = {
  StudentList
};
