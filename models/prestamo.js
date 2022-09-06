//Prestamo(idPrestamo, tipo prestamo, idEjemplar, fecha prestamo, hora prestamo, 
//fecha devolución, hora devolución, fecha devolución real, hora devolución real)
const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema( {
    tipo: String,
    idEjemplar: {type: mongoose.Schema.ObjectId, ref: 'ejemplar'},
    fecha_prestamo: String,
    hora_prestamo: String,
    fecha_devolucion: String,
    hora_devolucion: String,
    fecha_devolucion_real: String,
    hora_devolucion_real: String
});

module.exports = mongoose.model('prestamo', prestamoSchema);