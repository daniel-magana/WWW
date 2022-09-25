//Ejemplar(idEjemplar, idDocumento, estado, ubicación)
const mongoose = require('mongoose');

const ejemplarSchema = new mongoose.Schema( {
    prestamos: [{type: mongoose.Schema.ObjectId, ref: 'Prestamo'}],
    idDocumento: {type: mongoose.Schema.ObjectId, ref: 'Documento'},
    detalles: [{type: mongoose.Schema.ObjectId, ref: 'DetalleSolicitud'}],
    estado: String,
    ubicacion: String
});

module.exports = mongoose.model('Ejemplar', ejemplarSchema);