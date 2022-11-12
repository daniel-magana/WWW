import React from 'react';

class Navbar extends React.Component {
    render(){
        return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="./Home.js">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="./Catalogo.js">Catálogo</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./Solicitud.js">Solicitud</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./Solicitudes.js">Solicitudes</a>
                </li>    
            </ul>
            </div>
        </div>
        </nav>
        );
    }
}

export default Navbar;