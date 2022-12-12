import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Solicitudes from './components/Solicitudes';
import Solicitud from './components/Solicitud';
import Prueba from './components/Prueba';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  cache: new InMemoryCache()
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/Catalogo',
    element: <Catalogo></Catalogo>
  },
  {
    path: '/Solicitud',
    element: <Solicitud></Solicitud>
  },
  {
    path: '/Solicitudes',
    element: <Solicitudes></Solicitudes>
  },
  {
    path: '/Buscador',
    element: <Prueba />
  }
]
);


function App() {
  
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <div className='container fluid' Style='width:100%;'>
          {/* aqui ocurre la magia */}
          <RouterProvider router={router}></RouterProvider>
      </div>
      <Footer></Footer>
    </div>
    </ApolloProvider>
  );
}

export default App;
