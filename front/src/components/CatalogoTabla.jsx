import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../App.css'
import Catalogo from "./Catalogo"
//import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'


// const client = new ApolloClient({
//   uri: 'http://localhost:8090/graphql',
//   cache: new InMemoryCache()
// })


function CatalogoTabla() {
        return (
            <div className="catalogo">
                <Navbar />
                <div className="container fluid">
                    <h4> Hola Dani</h4>
                    <Catalogo />
                </div>
                <Footer />
            </div>  
        )
}

export default CatalogoTabla