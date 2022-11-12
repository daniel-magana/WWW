import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalogo from './components/Catalogo';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
          {/* aqui ocurre la magia */}
          <Catalogo></Catalogo>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
