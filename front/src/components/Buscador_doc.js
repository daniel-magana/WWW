import React from 'react';
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


class Input extends React.Component{
    render(){
      return <input type="text" onChange={ e => this.props.hChange(e.target.value)} />
    }
}

class ListItem extends React.Component{
    render(){
      return <li>{this.props.titulo}</li>;
      
  //     <tr>
  //     <td>{this.props.titulo}</td>
  //     <td>{this.props.tipo}</td>
  //     <td>{this.props.autor}</td>
  //     <td>{this.props.categoria}</td>
  //     <td>
  //         <div className="form-check">
  //             <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />
  //         </div>
  //     </td>
  // </tr>;
    }
}

class DocumentList extends React.Component{
    constructor(props){
        super(props);
        this.state = { filter: '' }; //Add state
    }
  
    handleChange(value, e){
        //Handle Change Event Input
        
        //this.setState({filter: value}); //Set State
        this.setState({filter: value}, () => {console.log('-->', value)}); 
        
    }

    render(){
      const list = this.props.list.map(item =>
        <ListItem key={item.id} id={item.id} titulo={item.titulo} tipo={item.tipo} autor={item.autor} categoria={item.categoria} />
      );
  
      return (
        <div>
          <Input hChange={this.handleChange.bind(this)} />
          <ul>{list}</ul>
        </div>
      );
    }
  }


// const {data, loading, error} = useQuery(OBTENER_DOCUMENTOS);
// if (data){
//   console.log(data);
// }else if (loading){
//   console.log("Cargando datos...");
// }else if (error){
//   console.log(error);
// }


export default DocumentList;