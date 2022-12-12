import React from "react";
import {solicitud} from "../mocking/datos";
import {Link} from 'react-router-dom';

class Solicitud extends React.Component{
    render(){
        return(
            <div class="container">
            <h2>Resumen Solicitud</h2>
            <form action="/action_page.php">
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

            <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Solicitud Enviada</h4>
                </div>
                <div class="modal-body">
                <p>La solicitud fue ingresada con éxito.</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
            
            </div>
        </div>

            </form>
            </div>
        );
    }
}

export default Solicitud;