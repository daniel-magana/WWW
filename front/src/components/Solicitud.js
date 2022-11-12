import React from "react";
import solicitud from "../mocking/datos";

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
                        solicitud.data.getDocumentos.map((item, index) => {
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
            <button type="submit" class="btn btn-primary mt-3">Enviar Solicitud</button>
            </form>
            </div>
        );
    }
}

export default Solicitud;