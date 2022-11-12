import React from "react";
import datos from '../mocking/datos';

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
                        datos.data.getDocumentos.map((item, index) => {
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
            <button className="btn btn-warning mt-3 px-3">Volver</button>
            <button type="submit" className="btn btn-primary mt-3">Agregar a Solicitud</button>
            </form>
            </div>

        );
    }
}


export default Catalogo;