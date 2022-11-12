import React from "react";

class Home extends React.Component{
    render(){
        return(
            <div className="container mt-2 mb-2">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 flex">
                                <div className="row">
                                    <div className="col-lg-3"></div>
                                    <div className="col-lg-2">
                                    <button className="btn btn-primary">Ver Catálogo</button>
                                    </div>
                                    <div className="col-lg-2">
                                    <button className="btn btn-secondary">Ver Solicitud</button>
                                    </div>
                                    <div className="col-lg-2">
                                    <button className="btn btn-danger">Ver Solicitudes</button>
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