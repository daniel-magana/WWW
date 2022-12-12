import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";

class Home extends React.Component{
    render(){
        return(
            <div className="container mt-2 mb-2">
                <Navbar></Navbar>
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 flex">
                                <div className="row">
                                    <div className="col-lg-3"></div>
                                    <div className="col-lg-2">
                                    <Link className="btn btn-primary" to='/Catalogo'>Ver Catálogo</Link>
                                    </div>
                                    <div className="col-lg-2">
                                    <Link className="btn btn-secondary" to='/Solicitud'>Ver Solicitud</Link>
                                    </div>
                                    <div className="col-lg-2">
                                    <Link className="btn btn-danger" to='/Solicitudes'>Ver Solicitudes</Link>
                                    </div>
                                    <div className="col-lg-3"></div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>

            </div>
        );
    }
}

export default Home;