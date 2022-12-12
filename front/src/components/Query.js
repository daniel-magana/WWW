import {useQuery, gql} from '@apollo/client';

export const OBTENER_DOCUMENTOS = gql`
    query Query {
        getDocumentos {
        tipo
        titulo
        autor
        categoria
        }
    }
    `;
export default OBTENER_DOCUMENTOS;