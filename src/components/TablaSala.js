import React, {useEffect , useState} from 'react'
import axios from 'axios'


const TableSala = () => {

    const [salas , setSalas] = useState({documents:[]})
    useEffect(() =>{
        const fetchSalasList = async () => {
            const {data} = await axios(
                "http://localhost:8080/sala"
                //"https://jsonplaceholder.typicode.com/users"
            );
            setSalas({documents:data});
            console.log(data);
        };
        fetchSalasList();
    }, [setSalas]);

    return (
        <div>
           <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Codigo Sala</th>
      <th scope="col">Nombre</th>
      <th scope="col">Sede</th>
      <th scope="col">Piso</th>
      <th scope="col">Capacidad</th>
    </tr>
  </thead>
  <tbody>
        {salas.documents &&
        salas.documents.map((item) =>(
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.codigo_sala}</td>
            <td>{item.nombre}</td>
            <td>{item.sede}</td>
            <td>{item.piso}</td>
            <td>{item.capacidad}</td>
        </tr>
        ))
        }    
  </tbody>
</table> 
        </div>
    )

}

export default TableSala