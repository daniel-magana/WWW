import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import {useQuery, gql} from '@apollo/client';

const GET_SOLICITUDES=gql`
    query GetSolicitudes {
        getSolicitudes {
        fecha
        hora
        id
        }
    }
`

function Solicitudes(){
    const {data, loading, error} = useQuery(GET_SOLICITUDES);
    if (data){
        console.log(data);
    }else if (loading){
        console.log("Cargando datos...");
    }else if (error){
        console.log(error);
    };

    return(
        <div class="container mt-2">
        <Navbar></Navbar>
        <h2>Solicitudes vigentes</h2>        
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>ID</th>
            </tr>
            </thead>
            <tbody>
            {
                    data && data.getSolicitudes.map((d, i) => {
                        return (
                              <tr>            
                                <td>{d.fecha}</td>
                                <td>{d.hora}</td>
                                <td>{d.id}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <Link type="button" className="btn btn-warning mt-3" to='/'>Volver al Home</Link>
        </div>
    );
}

export default Solicitudes;