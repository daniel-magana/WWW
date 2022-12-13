import React, {useState, useEffect} from "react";
import {solicitud} from "../mocking/datos";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import {useQuery, useMutation, gql} from '@apollo/client';

const OBTENER_USUARIO=gql`
    query Query($rut: String!){
        getLogin(rut: $rut) {
        apellidos
        nombres
        rut
        id
        }
    }
`
const ADD_SOLICITUD=gql`
    mutation AddSolicitud($input1: SolicitudInput) {
    addSolicitud(input: $input1) {
      fecha
      hora
      id
    }
  }
`

const entrada={
    "input1": {
      "fecha": "14/12/2022",
      "hora": "00:00",
      "idUsuario": "632e8b8701d14733786363bf"
    }
  };


function Solicitud(){
        const [nrut, orut] = useState("");
        console.log(entrada);
        // useEffect(()=>{ 
        // if(nrut!=""){
        //     Goto(nrut)
        // }})

        var rut=nrut;
        const {loading, error, data} = useQuery(OBTENER_USUARIO, {variables:{rut}});
        if (data){
            console.log(data);
        }else if (loading){
            console.log("Cargando datos...");
        }else if (error){
            console.log(error);
        };

        const [addSoli,{data2, loading2, error2}] = useMutation(ADD_SOLICITUD,{variables: entrada});

        return(
            <div class="container">
            <Navbar></Navbar>
            <h2>Resumen Solicitud</h2>
            <form action="">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Tipo</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Confirmar</th>
                </tr>
                </thead>
                <tbody id="myTable">
                    {
                        solicitud.data.getSolicitud.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.titulo}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.autor}</td>
                                    <td>{item.categoria}</td>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" defaultChecked="True" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link type="button" className="btn btn-warning mt-3" to='/'>Volver al Home</Link>
            <button type="button" className="btn btn-info mt-3" data-toggle="modal" data-target="#myModal">Enviar Solicitud</button>

            <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">

            <div className="modal-content" >
                <div className="modal-header" >
                    <div Style="position:relative;right:95px">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div Style="position:relative;right:70px">
                        <h4 className="modal-title">Enviar solicitud</h4>
                    </div>
                </div>
                <form >
                <div className="modal-body">
                <div className="container mt-3">
                    <div className="row">
                    <div className="col-5">
                        <p>Para enviar la solicitud de prestámo, por favor ingrese su rut:</p>
                        <input type="text" className="form-control" placeholder="Ingrese su rut" id="rut" name="rut"/>
                        <button type="button" value="" onClick={()=> orut(document.getElementById('rut').value)} className="btn btn-primary">Verificar rut</button>
                    </div>
                    </div>
                
                </div>
                </div>
                <div class="modal-footer">
                <button type="button" id="close" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                <Link hidden id="close2" to="/Solicitudes"></Link>
                <Link type="submit" className="btn btn-primary" onClick={e=>
                {
                    e.preventDefault();
                    addSoli({variables: entrada});
                    document.getElementById('close').click()
                    document.getElementById('close2').click()
                    document.getElementById('close2').click()
                }}   >Enviar</Link>
                </div>
                </form>
                
            </div>
            
            </div>
        </div>

            </form>
            </div>
            
        );
    }

export default Solicitud;
