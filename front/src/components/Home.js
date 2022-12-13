import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";

class Home extends React.Component{
    render(){
        return(
            <div className="container fluid" Style='width: 100%'>
                <Navbar></Navbar>
                <div className="row grow-1 justify-content-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            {/* <div className="row"> */}
                                <div className="col-10 col-sm-4 col-md-4 col-lg-4 col-xl-4 justify-content-center">
                                <div className="card" Style="width: 100%; height: 100%;">
                                <div Style="margin-left:10px;margin-top:25px">    
                                <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="75%" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                </svg></div>
                                <div className="card-body">
                                    <h5 className="card-title">Catálogo</h5>
                                    <p className="card-text">Revisa el catálogo de libros, documentos y archivos audiovisuales en la biblioteca.</p>
                                    <Link className="btn btn-primary" to='/Catalogo'>Ver Catálogo</Link>
                                </div>
                                </div>
                                </div>
                                
                                
    
                                <div className="col-10 col-sm-4 col-md-4 col-lg-4 col-xl-4 justify-content-center">
                                <div className="card" Style="width: 100%;height: 100%;">
                                <div Style=" margin-left: 10px; margin-top:25px"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="75%" fill="currentColor" className="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
                                <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z"/>
                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                </svg></div>
                                <div className="card-body">
                                    <h5 className="card-title">Realizar Solicitud</h5>
                                    <p className="card-text">Revisa la solicitud en proceso antes de enviarla.</p>
                                    <Link className="btn btn-secondary" to='/Solicitud'>Ver Solicitud</Link>
                                </div>
                                </div>                                
                                </div>
                                
                                <div className="col-10 col-sm-4 col-md-4 col-lg-4 col-xl-4 justify-content-center">
                                <div className="card" Style="width: 100%; height: 100%;">
                                <div Style="margin-left:10px;margin-top:25px"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="75%" fill="currentColor" className="bi bi-file-earmark" viewBox="0 0 16 16">
                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                </svg></div>
                                <div className="card-body">
                                    <h5 className="card-title">Ver Solicitudes</h5>
                                    <p className="card-text">Revisa las solicitudes realizadas en la plataforma.</p>
                                    <Link className="btn btn-danger" to='/Solicitudes'>Ver Solicitudes</Link>
                                </div>
                                </div>

                                
                                {/* </div> */}


                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Home;