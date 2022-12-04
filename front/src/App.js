import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Solicitudes from './components/Solicitudes';
import Solicitud from './components/Solicitud';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  cache: new InMemoryCache()
});

function App() {
  
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
          {/* aqui ocurre la magia */}
          <Catalogo></Catalogo>
      </div>
      <Footer></Footer>
    </div>
    </ApolloProvider>
  );
}

export default App;
