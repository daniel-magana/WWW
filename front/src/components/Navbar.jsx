import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/Catalogo">Catálogo</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Solicitud">Solicitud</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Solicitudes">Solicitudes</Link>
                    </li>    
                </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar
/*
          <BrowserRouter>
            <header>
              <Link to='/Home'>
                Home
              </Link>
              <Link to='/Catalogo'>
                Catalogo
              </Link>
              <Link to='/Solicitud'>
                Solicitud
              </Link>
              <Link to='/Solicitudes'>
                Solicitudes
              </Link>
            </header>
            <Route path='/Home'> 
              <Home></Home>
            </Route>
            <Route path='/Catalogo'> 
              <Home></Home>
            </Route>
            <Route path='/Solicitud'> 
              <Home></Home>
            </Route>
            <Route path='/Solicitudes'> 
              <Home></Home>
            </Route>
          </BrowserRouter>
           */
