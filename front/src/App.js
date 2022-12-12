import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Solicitudes from './components/Solicitudes';
import Solicitud from './components/Solicitud';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// import {Link, BrowserRouter, Route} from 'react-router-dom';
import {BrowserRouter as Router,Routes, Route, Navigate, Switch} from 'react-router-dom';
import VerSolicitud from './components/VerSolicitud';
import VerSolicitudes from './components/VerSolicitudes';
import CatalogoTabla from './components/CatalogoTabla';


// const client = new ApolloClient({
//   uri: 'http://localhost:8090/graphql',
//   cache: new InMemoryCache()
// });

function App() {
  
  return (
    // <ApolloProvider client={client}>
    <div className="App">
      <div className='flex-row-1'>
          {/* aqui ocurre la magia */}
          <div className='col col-sm col-md col-lg col-xl'>
            <Router>
            <Switch>
            <Route path= '/' element= {<Home/> }/>
            <Route path= '/Catalogo' element= {<CatalogoTabla />}/>
            <Route path= '/Solicitud' element= {<VerSolicitud></VerSolicitud>}/>
            <Route path= '/Solicitudes'element= {<VerSolicitudes></VerSolicitudes>}/>
            </Switch>
            </Router>
          </div>

      </div>
    </div>
    // </ApolloProvider>
  );
}

export default App;
