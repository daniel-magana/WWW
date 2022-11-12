import React from "react";
import {documentos} from '../mocking/datos';

class Catalogo extends React.Component{
    render(){
        return(
            <div class="container">
            <h2>Catálogo</h2>
            <form action="/action_page.php">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Tipo</th>
                    <th>Autor</th>
                    <th>Género</th>
                    <th>Agregar</th>
                </tr>
                </thead>
                <tbody id="myTable">
                    {
                        documentos.data.getDocumentos.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.titulo}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.autor}</td>
                                    <td>{item.categoria}</td>
                                    <td>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button type="button" className="btn btn-warning mt-3">Volver</button>
            <button type="button" className="btn btn-info mt-3" data-toggle="modal" data-target="#myModal">Agregar a Solicitud</button>

            <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Documentos Agregados</h4>
                </div>
                <div class="modal-body">
                <p>Los documentos se agregaron correctamente.</p>
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


export default Catalogo;