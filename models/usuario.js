//Usuario(identificador, rut, nombres, apellidos, dirección, teléfono, activo) {se debe ver la forma de registro de huella y foto}
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema( {
    rut: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    telefono: String,
    activo: String
});

module.exports = mongoose.model('usuario', usuarioSchema);