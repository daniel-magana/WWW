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
}

type Ejemplar{
    id: ID!
    idDocumento: Documento
    estado: String!
    ubicacion: String!
}

type Prestamo{
    id: ID!
    tipo: String!
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
}

type Solicitud{
    id: ID!
    idUsuario: Usuario
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
}

input EjemplarInput{
    idDocumento: String
    estado: String!
    ubicacion: String!
}

input PrestamoInput{
    tipo: String!
    idEjemplar: String
    fecha_prestamo: String!
    hora_prestamo: String!
    fecha_devolucion: String!
    hora_devolucion: String!
    fecha_devolucion_real: String!
    hora_devolucion_real: String!
}

input UsuarioInput{
    rut: String!
    nombres: String!
    apellidos: String!
    direccion: String!
    telefono: String!
    activo: String!
}

input SolicitudInput{
    idUsuario: String
    fecha: String!
    hora: String!
}

input DetalleSolicitudInput{
    idSolicitud: String
    idEjemplar: String
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
    updateDocumento(id: ID!, input: DocumentoInput): Documento
    deleteDocumento(id: ID!): Alert
    
    addEjemplar(input: EjemplarInput): Ejemplar
    deleteEjemplar(id: ID!): Alert
    
    addPrestamo(input: PrestamoInput): Prestamo
    deletePrestamo(id: ID!): Alert

    addUsuario(input: UsuarioInput): Usuario
    updateUsuario(id: ID!, input: UsuarioInput): Usuario
    deleteUsuario(id: ID!): Alert
    
    addSolicitud(input: SolicitudInput): Solicitud
    deleteSolicitud(id: ID!): Alert
    
    addDetalleSolicitud(input: DetalleSolicitudInput): DetalleSolicitud
    deleteDetalleSolicitud(id: ID!): Alert
}
`;
//Falta devolver los update quizas?

const resolvers = {
    Query: {
        async getDocumentos(obj){
            const documentos = await Documento.find();
            return documentos;
        },
        async getDocumento(obj, {id}){
            const documento = await Documento.findById(id);
            return documento;
        },
        
        async getEjemplares(obj){
            const ejemplares = await Ejemplar.find().populate('idDocumento');
            return ejemplares;
        },
        async getEjemplar(obj, {id}){
            const ejemplar = await Ejemplar.findById(id).populate('idDocumento');
            return ejemplar;
        },
        
        async getPrestamos(obj){
            const prestamos = await Prestamo.find().populate('idEjemplar');
            return prestamos;
        },
        async getPrestamo(obj, {id}){
            const prestamo = await Prestamo.findById(id).populate('idEjemplar');
            return prestamo;
        },
        
        async getUsuarios(obj){
            const usuarios = await Usuario.find();
            return usuarios;
        },
        async getUsuario(obj, {id}){
            const usuario = await Usuario.findById(id);
            return usuario;
        },
        
        async getSolicitudes(obj){
            const solicitudes = await Solicitud.find().populate('idUsuario');
            return solicitudes;
        },
        async getSolicitud(obj, {id}){
            const solicitud = await Solicitud.findById(id).populate('idUsuario');
            return solicitud;
        },
        
        async getDetalleSolicitudes(obj){
            const detallesolicitudes = await DetalleSolicitud.find().populate(['idSolicitud', 'idEjemplar']);
            return detallesolicitudes;
        },
        async getDetalleSolicitud(obj, {id}){
            const detallesolicitud = await DetalleSolicitud.findById(id).populate(['idSolicitud', 'idEjemplar']);
            return detallesolicitud;
        }
    },
    Mutation: {
        async addDocumento(obj, {input}){
            const documento = new Documento(input);
            await documento.save();
            return documento;
        },
        async updateDocumento(obj, {id, input}){
            const documento = await Documento.findByIdAndUpdate(id, input);
            return documento;
        },
        async deleteDocumento(obj, {id}){
            await Documento.deleteOne({_id: id});
            return {
                message: "documento eliminado"
            }
        },
        
        async addEjemplar(obj, {input}){
            let {idDocumento, estado, ubicacion} = input;
            let buscaDocumento = await Documento.findById(idDocumento);
            if(buscaDocumento===null){
                //Exception
            }else{
                const ejemplar = new Ejemplar({idDocumento: buscaDocumento._id, estado: estado, ubicacion: ubicacion});
                await ejemplar.save();
                return ejemplar;
            }
        },
        /* async updateEjemplar(obj, {id, input}){
            const ejemplar = await Ejemplar.findByIdAndUpdate(id, input);
            return ejemplar;
        }, */
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
        /* async updatePrestamo(obj, {id, input}){
            const prestamo = await Prestamo.findByIdAndUpdate(id, input);
            return prestamo;
        }, */
        async deletePrestamo(obj, {id}){
            await Prestamo.deleteOne({_id: id});
            return {
                message: "Prestamo eliminado"
            }
        },
        
        async addUsuario(obj, {input}){
            const usuario = new Usuario(input);
            await usuario.save();
            return usuario;
        },
        async updateUsuario(obj, {id, input}){
            const usuario = await Usuario.findByIdAndUpdate(id, input);
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
        /* async updateSolicitud(obj, {id, input}){
            const solicitud = await Solicitud.findByIdAndUpdate(id, input);
            return solicitud;
        }, */
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
                await detalleSolicitud.save();
                return detalleSolicitud;
            }
        },
        /* async updateDetalleSolicitud(obj, {id, input}){
            const detalleSolicitud = await DetalleSolicitud.findByIdAndUpdate(id, input);
            return detalleSolicitud;
        }, */
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