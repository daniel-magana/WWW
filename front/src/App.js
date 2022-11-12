import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Solicitudes from './components/Solicitudes';
import Solicitud from './components/Solicitud';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
          {/* aqui ocurre la magia */}
          <Solicitud></Solicitud>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
