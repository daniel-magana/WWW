import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../App.css'
import Menupr from "./MenuPr"


export const Home = () => {
        return (
            <div className="home">
                <Navbar />
                <Menupr />
                <Footer />
            </div>
        )
}

export default Home