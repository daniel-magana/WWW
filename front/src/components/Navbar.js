import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link" to="/Catalogo">Catálogo</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/Solicitud">Solicitud</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/Solicitudes">Solicitudes</Link>
                </li>    
            </ul>
            </div>
        </div>
        </nav>
        );
    }
}

export default Navbar;