//DetalleSolicitudPrestamo(idSolicitud, idEjemplar)
const mongoose = require('mongoose');

const detalleSolicitudSchema = new mongoose.Schema( {
    idSolicitud: {type: mongoose.Schema.ObjectId, ref: 'Solicitud'},
    idEjemplar: {type: mongoose.Schema.ObjectId, ref: 'Ejemplar'}
});

module.exports = mongoose.model('DetalleSolicitud', detalleSolicitudSchema);