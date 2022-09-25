//Documento(identificador, tipo, título, autor, editorial, año, edición, categoría, tipo medio)
const mongoose = require('mongoose');

const documentoSchema = new mongoose.Schema( {
    tipo: String,
    titulo: String,
    autor: String,
    editorial: String,
    temporada: String,
    edicion: String,
    categoria: String,
    tipo_medio: String,
    ejemplares: [{type: mongoose.Schema.ObjectId, ref: 'Ejemplar'}]
});

module.exports = mongoose.model('Documento', documentoSchema);