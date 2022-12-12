import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import CatalogoTabla from './components/CatalogoTabla';

// import createRoot from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'; 
import VerSolicitud from './components/VerSolicitud';
import VerSolicitudes from './components/VerSolicitudes';
import App from './App';
import {createBrowserRouter, RouterProvider,BrowserRouter } from 'react-router-dom';



const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  cache: new InMemoryCache()
});



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/Home',
//     element: <Home />
//   },
//   {
//     path: '/Catalogo',
//     element: <CatalogoTabla />
//   },
//   {
//     path: '/Solicitud',
//     element: <VerSolicitud></VerSolicitud>
//   },
//   {
//     path: '/Solicitudes',
//     element: <VerSolicitudes></VerSolicitudes>
//   }
// ]
// );


// ReactDOM.render(
//   <BrowserRouter>
//   <ApolloProvider client={client}>
//     <React.StrictMode> 
//       <RouterProvider router={router}></RouterProvider>
//     </React.StrictMode>
//   </ApolloProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <BrowserRouter>
//   <ApolloProvider client={client}>
//     <React.StrictMode> 
//       <App />
//     </React.StrictMode>
//   </ApolloProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
