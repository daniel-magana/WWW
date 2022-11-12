import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
          {/* aqui ocurre la magia */}
          <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
