//SolicitudPréstamo(idSolicitud, idUsuario, fecha solicitud, hora solicitud)
const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema( {
    idUsuario: {type: mongoose.Schema.ObjectId, ref: 'Usuario'},
    detalles: [{type: mongoose.Schema.ObjectId, ref: 'DetalleSolicitud'}],
    fecha: String,
    hora: String
});

module.exports = mongoose.model('Solicitud', solicitudSchema);