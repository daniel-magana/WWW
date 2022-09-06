//Ejemplar(idEjemplar, idDocumento, estado, ubicación)
const mongoose = require('mongoose');

const ejemplarSchema = new mongoose.Schema( {
    idDocumento: {type: mongoose.Schema.ObjectId, ref: 'documento'},
    estado: String,
    ubicacion: String
});

module.exports = mongoose.model('ejemplar', ejemplarSchema);