//DetalleSolicitudPrestamo(idSolicitud, idEjemplar)
const mongoose = require('mongoose');

const detalleSolicitudSchema = new mongoose.Schema( {
    idSolicitud: {type: mongoose.Schema.ObjectId, ref: 'solicitud'},
    idEjemplar: {type: mongoose.Schema.ObjectId, ref: 'ejemplar'}
});

module.exports = mongoose.model('detalleSolicitud', detalleSolicitudSchema);