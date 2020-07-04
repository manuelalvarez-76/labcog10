var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombres: {type: String, required: true, max:30},
    email: {type: String, required: true},
    dni: {type: String, required: true, max:10},
    sexo: {type: String, required: true, max:2},
    telefono: {type: String, required: true, max:10}
});

module.exports = mongoose.model('Empleado',EmpleadoSchema);
