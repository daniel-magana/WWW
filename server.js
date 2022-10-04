const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
//const {makeExecutableSchema} = require('graphql-tools');
const {ApolloServer, gql} = require('apollo-server-express');

const {merge} = require('lodash');

const Documento = require('./models/documento');
const Ejemplar = require('./models/ejemplar');
const Prestamo = require('./models/prestamo');
const Usuario = require('./models/usuario');
const Solicitud = require('./models/solicitud');
const DetalleSolicitud = require('./models/detalle_solicitud');

mongoose.connect('mongodb+srv://admin:admin@cluster0.hwgabjr.mongodb.net/www',{useNewUrlParser: true, useUnifiedTopology: true});

const typeDefs = gql`
type Documento{
    id: ID!
    tipo: String!
    titulo: String!
    autor: String!
    editorial: String!
    temporada: String!
    edicion: String!
    categoria: String!
    tipo_medio: String!
    ejemplares: [Ejemplar]
}

type Ejemplar{
    id: ID!
    prestamos: [Prestamo]
    idDocumento: Documento
    detalles: [DetalleSolicitud]
    estado: String!
    ubicacion: String!
}

type Prestamo{
    id: ID!
    tipo: String!
    idUsuario: Usuario
    idEjemplar: Ejemplar
    fecha_prestamo: String!
    hora_prestamo: String!
    fecha_devolucion: String!
    hora_devolucion: String!
    fecha_devolucion_real: String!
    hora_devolucion_real: String!
}

type Usuario{
    id: ID!
    rut: String!
    nombres: String!
    apellidos: String!
    direccion: String!
    telefono: String!
    activo: String!
    prestamos: [Prestamo]
    solicitudes: [Solicitud]
}

type Solicitud{
    id: ID!
    idUsuario: Usuario
    detalles: [DetalleSolicitud]
    fecha: String!
    hora: String!
}

type DetalleSolicitud{
    id: ID!
    idSolicitud: Solicitud
    idEjemplar: Ejemplar
}



type Alert{
    message: String
}



input DocumentoInput{
    tipo: String!
    titulo: String!
    autor: String!
    editorial: String!
    temporada: String!
    edicion: String!
    categoria: String!
    tipo_medio: String!
    ejemplares: String
}

input EjemplarInput{
    prestamos: String
    idDocumento: String!
    detalles: String
    estado: String!
    ubicacion: String!
}

input PrestamoInput{
    tipo: String!
    idUsuario: String!
    idEjemplar: String!
    fecha_prestamo: String!
    hora_prestamo: String!
    fecha_devolucion: String!
    hora_devolucion: String!
    fecha_devolucion_real: String
    hora_devolucion_real: String
}

input UsuarioInput{
    rut: String!
    nombres: String!
    apellidos: String!
    direccion: String!
    telefono: String!
    activo: String!
    prestamos: String
    solicitudes: String
}

input SolicitudInput{
    idUsuario: String!
    detalles: String
    fecha: String!
    hora: String!
}

input DetalleSolicitudInput{
    idSolicitud: String!
    idEjemplar: String!
}

input devolucionInput{
    idEjemplar: String!
    fecha_devolucion_real: String!
    hora_devolucion_real: String!
}



type Query{
    getDocumentos: [Documento]
    getDocumento(id: ID!): Documento
    
    getEjemplares: [Ejemplar]
    getEjemplar(id: ID!): Ejemplar
    
    getPrestamos: [Prestamo]
    getPrestamo(id: ID!): Prestamo
    
    getUsuarios: [Usuario]
    getUsuario(id: ID!): Usuario
    
    getSolicitudes: [Solicitud]
    getSolicitud(id: ID!): Solicitud
    
    getDetalleSolicitudes: [DetalleSolicitud]
    getDetalleSolicitud(id: ID!): DetalleSolicitud
}

type Mutation{
    addDocumento(input: DocumentoInput): Documento
    ejemplarDeDocumento(idDocumento: ID!, idEjemplar: ID!): Documento
    deleteDocumento(id: ID!): Alert
    
    addEjemplar(input: EjemplarInput): Ejemplar
    prestamoDeEjemplar(idEjemplar: ID!, idPrestamo: ID!): Ejemplar
    detalleDeEjemplar(idEjemplar: ID!, idDetalle: ID!): Ejemplar
    deleteEjemplar(id: ID!): Alert
    
    addPrestamo(input: PrestamoInput): Prestamo
    deletePrestamo(id: ID!): Alert
    devolucion(input: devolucionInput): Prestamo

    addUsuario(input: UsuarioInput): Usuario
    prestamoDeUsuario(idUsuario: ID!, idPrestamo: ID!): Usuario
    solicitudDeUsuario(idUsuario: ID!, idSolicitud: ID!): Usuario
    deleteUsuario(id: ID!): Alert
    
    addSolicitud(input: SolicitudInput): Solicitud
    detalleDeSolicitud(idSolicitud: ID!, idDetalle: ID!): Solicitud
    deleteSolicitud(id: ID!): Alert
    
    addDetalleSolicitud(input: DetalleSolicitudInput): DetalleSolicitud
    deleteDetalleSolicitud(id: ID!): Alert
}
`;
//Falta los update quizas?

const resolvers = {
    Query: {
        async getDocumentos(obj){
            const documentos = await Documento.find().populate("ejemplares", "id");
            return documentos;
        },
        async getDocumento(obj, {id}){
            const documento = await Documento.findById(id).populate("ejemplares", "id");
            return documento;
        },
        
        async getEjemplares(obj){
            const ejemplares = await Ejemplar.find().populate([{path: "idDocumento", select: "id"}, {path: "prestamos", select: "id"}, {path: "detalles", select: "id"}]);
            return ejemplares;
        },
        async getEjemplar(obj, {id}){
            const ejemplar = await Ejemplar.findById(id).populate([{path: "idDocumento", select: "id"}, {path: "prestamos", select: "id"}, {path: "detalles", select: "id"}]);
            return ejemplar;
        },
        
        async getPrestamos(obj){
            const prestamos = await Prestamo.find().populate([{path: "idUsuario", select: "id"}, {path: "idEjemplar", select: "id"}]);
            return prestamos;
        },
        async getPrestamo(obj, {id}){
            const prestamo = await Prestamo.findById(id).populate([{path: "idUsuario", select: "id"}, {path: "idEjemplar", select: "id"}]);
            return prestamo;
        },
        
        async getUsuarios(obj){
            const usuarios = await Usuario.find().populate([{path: "prestamos", select: "id"}, {path: "solicitudes", select: "id"}]);
            return usuarios;
        },
        async getUsuario(obj, {id}){
            const usuario = await Usuario.findById(id).populate([{path: "prestamos", select: "id"}, {path: "solicitudes", select: "id"}]);
            return usuario;
        },
        
        async getSolicitudes(obj){
            const solicitudes = await Solicitud.find().populate([{path: "idUsuario", select: "id"}, {path: "detalles", select: "id"}]);
            return solicitudes;
        },
        async getSolicitud(obj, {id}){
            const solicitud = await Solicitud.findById(id).populate([{path: "idUsuario", select: "id"}, {path: "detalles", select: "id"}]);
            return solicitud;
        },
        
        async getDetalleSolicitudes(obj){
            const detallesolicitudes = await DetalleSolicitud.find().populate([{path: "idSolicitud", select: "id"}, {path: "idEjemplar", select: "id"}]);
            return detallesolicitudes;
        },
        async getDetalleSolicitud(obj, {id}){
            const detallesolicitud = await DetalleSolicitud.findById(id).populate([{path: "idSolicitud", select: "id"}, {path: "idEjemplar", select: "id"}]);
            return detallesolicitud;
        }
    },
    Mutation: {
        async addDocumento(obj, {input}){
            const documento = new Documento(input);
            await documento.save();
            return documento;
        },
        async ejemplarDeDocumento(obj, {idDocumento, idEjemplar}){
            const documento = await Documento.findById(idDocumento);
            const ejemplar = await Ejemplar.findById(idEjemplar);
            documento.ejemplares.push(ejemplar);
            await documento.save();
            return documento;
        },
        async deleteDocumento(obj, {id}){
            await Documento.deleteOne({_id: id});
            return {
                message: "documento eliminado"
            }
        },
        
        async addEjemplar(obj, {input}){
            let {idDocumento,
                estado,
                ubicacion} = input;
            let buscaDocumento = await Documento.findById(idDocumento);
            if(buscaDocumento===null){
                //Exception
            }else{
                const ejemplar = new Ejemplar({idDocumento: buscaDocumento._id, estado: estado, ubicacion: ubicacion});
                await ejemplar.save();
                return ejemplar;
            }
        },
        async prestamoDeEjemplar(obj, {idEjemplar, idPrestamo}){
            const ejemplar = await Ejemplar.findById(idEjemplar);
            const prestamo = await Prestamo.findById(idPrestamo);
            ejemplar.prestamos.push(prestamo);
            await ejemplar.save();
            return ejemplar;
        },
        async detalleDeEjemplar(obj, {idEjemplar, idDetalle}){
            const ejemplar = await Ejemplar.findById(idEjemplar);
            const detalle = await DetalleSolicitud.findById(idDetalle);
            ejemplar.detalles.push(detalle);
            await ejemplar.save();
            return ejemplar;
        },
        async deleteEjemplar(obj, {id}){
            await Ejemplar.deleteOne({_id: id});
            return {
                message: "Ejemplar eliminado"
            }
        },
        
        async addPrestamo(obj, {input}){
            let {tipo, 
                idEjemplar, 
                fecha_prestamo, 
                hora_prestamo, 
                fecha_devolucion, 
                hora_devolucion,
                fecha_devolucion_real, 
                hora_devolucion_real} = input;
            let buscaEjemplar = await Ejemplar.findById(idEjemplar);
            if(buscaEjemplar===null){
                //Exception
            }else{
                const prestamo = new Prestamo({
                    tipo: tipo, 
                    idEjemplar: buscaEjemplar._id, 
                    fecha_prestamo: fecha_prestamo, 
                    hora_prestamo: hora_prestamo, 
                    fecha_devolucion: fecha_devolucion, 
                    hora_devolucion: hora_devolucion,
                    fecha_devolucion_real: fecha_devolucion_real, 
                    hora_devolucion_real: hora_devolucion_real
                });
                await prestamo.save();
                return prestamo;
            }
        },
        async deletePrestamo(obj, {id}){
            await Prestamo.deleteOne({_id: id});
            return {
                message: "Prestamo eliminado"
            }
        },
        async devolucion(obj, {input}){
            //Recibe el id del ejemplar a devolver y la fecha y hora de devolucion
            //Busca el prestamo que tenga el id del ejemplar y el ultimo prestamo que tenga el ejemplar
            let {idEjemplar,
                fecha_devolucion_real,
                hora_devolucion_real} = input;
            let buscaEjemplar = await Ejemplar.findById(idEjemplar);
            if(buscaEjemplar===null){
                //Exception
            }else{
                const idPrestamo = buscaEjemplar.prestamos[buscaEjemplar.prestamos.length-1];
                const prestamo = await Prestamo.findById(idPrestamo);
                prestamo.fecha_devolucion_real = fecha_devolucion_real;
                prestamo.hora_devolucion_real = hora_devolucion_real;
                await prestamo.save();
                return prestamo;
            }
        },
        
        async addUsuario(obj, {input}){
            const usuario = new Usuario(input);
            await usuario.save();
            return usuario;
        },
        async prestamoDeUsuario(obj, {idUsuario, idPrestamo}){
            const usuario = await Usuario.findById(idUsuario);
            const prestamo = await Prestamo.findById(idPrestamo);
            usuario.prestamos.push(prestamo);
            await usuario.save();
            return usuario;
        },
        async solicitudDeUsuario(obj, {idUsuario, idSolicitud}){
            const usuario = await Usuario.findById(idUsuario);
            const solicitud = await Solicitud.findById(idSolicitud);
            usuario.solicitudes.push(solicitud);
            await usuario.save();
            return usuario;
        },
        async deleteUsuario(obj, {id}){
            await Usuario.deleteOne({_id: id});
            return {
                message: "Usuario eliminado"
            }
        },
        
        async addSolicitud(obj, {input}){
            let {idUsuario,
                fecha,
                hora} = input;
            let buscaUsuario = await Usuario.findById(idUsuario);
            if(buscaUsuario===null){
                //Exception
            }else{
                const solicitud = new Solicitud({
                    idUsuario: buscaUsuario._id,
                    fecha: fecha,
                    hora: hora
                });
                await solicitud.save();
                return solicitud;
            }
        },
        async deleteSolicitud(obj, {id}){
            await Solicitud.deleteOne({_id: id});
            return {
                message: "Solicitud eliminado"
            }
        },
        
        async addDetalleSolicitud(obj, {input}){
            let {idSolicitud,
                idEjemplar} = input;
            let buscaSolicitud = await Solicitud.findById(idSolicitud);
            let buscaEjemplar = await Ejemplar.findById(idEjemplar);
            if(buscaSolicitud===null || buscaEjemplar===null){
                //Exception
            }else{
                const detalle = new DetalleSolicitud({
                    idSolicitud: buscaSolicitud._id,
                    idEjemplar: buscaEjemplar._id
                });
                await detalle.save();
                return detalle;
            }
        },
        async detalleDeSolicitud(obj, {idSolicitud, idDetalle}){
            const solicitud = await Solicitud.findById(idSolicitud);
            const detalle = await DetalleSolicitud.findById(idDetalle);
            solicitud.detalles.push(detalle);
            await solicitud.save();
            return solicitud;
        },
        async deleteDetalleSolicitud(obj, {id}){
            await DetalleSolicitud.deleteOne({_id: id});
            return {
                message: "DetalleSolicitud eliminado"
            }
        },
    }
}

let apolloServer = null;

const corsOptions = {
    origin: "http://localhost:8090",
    credentials: false
};

async function startServer(){
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions});
    await apolloServer.start();

    apolloServer.applyMiddleware({app, cors: false});
}

startServer();

const app = express();
app.use(cors());
app.listen(8090, function(){
    console.log("Servidor iniciado");
})