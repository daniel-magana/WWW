import DocumentList from './Buscador_doc';
import {useQuery, gql} from '@apollo/client';


const OBTENER_DOCUMENTOS = gql`
query Query {
    getDocumentos {
      tipo
      titulo
      autor
      categoria
    }
  }
`;

const documentos=[
    {id: '1', titulo: 'El sopapo', autor: 'JK Rowling', categoria: 'Terror'},
    {id: '2', titulo: 'Martin tenia un violin', autor: 'Marcela Paz', categoria: 'Comedia'},
    {id: '3', titulo: 'Termine la carrera', autor: 'Manuel Valenzuela', categoria: 'Ciencia ficción'},
    {id: '4', titulo: 'La biblia', autor: 'Jesús', categoria: 'Ficción'},
    {id: '5', titulo: 'Jaime', autor: 'Jaime', categoria: 'Deportes'},
    {id: '6', titulo: '11 chupalo entonce', autor: 'Rene Puente', categoria: 'Comedia'}
  ];

export default function Prueba(){

    const {data, loading, error} = useQuery(OBTENER_DOCUMENTOS);
    if (data){
        console.log(data);
    }else if (loading){
        console.log("Cargando datos...");
    }else if (error){
        console.log(error);
    }
    
    var lista=[];
    data && data.getDocumentos.map((item,index)=>{
        lista.push(item)
    })
    return(
            
      <DocumentList list={lista} />   
  )
}
