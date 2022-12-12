import React from "react";
import {Link} from 'react-router-dom'

class Solicitudes extends React.Component{
    render(){
        return(
            <div class="container mt-2">
            <h2>Solicitudes vigentes</h2>        
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr>
                </tbody>
            </table>
            <Link type="button" className="btn btn-warning mt-3" to='/'>Volver al Home</Link>
            </div>
            
        );
    }
}

export default Solicitudes;