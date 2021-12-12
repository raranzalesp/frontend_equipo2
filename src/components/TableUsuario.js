import React, {useEffect , useState} from 'react'
import axios from 'axios'


const TableUsuario = () => {

    const [users , setUsers] = useState({documents:[]})
    useEffect(() =>{
        const fetchUsersList = async () => {
            const {data} = await axios(
                "http://localhost:8080/usuario"
                //"https://jsonplaceholder.typicode.com/users"
            );
            setUsers({documents:data});
            console.log(data);
        };
        fetchUsersList();
    }, [setUsers]);

    return (
        <div>
           <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Documento</th>
      <th scope="col">Tipo</th>
      <th scope="col">Telefono</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
        {users.documents &&
        users.documents.map((item) =>(
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.documento}</td>
            <td>{item.tipo}</td>
            <td>{item.telefono}</td>
            <td>{item.email}</td>
        </tr>
        ))
        }    
  </tbody>
</table> 
        </div>
    )

}

export default TableUsuario