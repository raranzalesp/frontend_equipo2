import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './pages/Inicio';
import Reservar from './pages/Reservar';
import Usuarios from './pages/Usuarios';
import Salas from './pages/Salas';
import ListarReservas from './pages/ListarReservas';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="d-grid gap-2 d-md-flex">
        <Link to="/" className="btn btn-dark">
        Inicio
        </Link>
        <Link to="/Reservar" className="btn btn-dark">
         Reservar
        </Link>
        <Link to="/Usuarios" className="btn btn-dark">
        Usuarios
        </Link>
        <Link to="/Salas" className="btn btn-dark">
        Salas
        </Link>
        <Link to="/ListarReservas" className="btn btn-dark">
        Listar Reservas
        </Link>
        <Link to="/Contacto" className="btn btn-dark">
        Contacto
        </Link> 

      </div>
     <hr/>

     <Switch>
       <Route path="/Reservar">
         <Reservar/>
       </Route>
       <Route path="/Usuarios">
         <Usuarios/>
       </Route>

       <Route path="/Salas">
         <Salas/>
       </Route>

       <Route path="/ListarReservas">
         <ListarReservas/>
       </Route>

       <Route path="/Contacto">
         <Contacto/>
       </Route>

       <Route path="/">
         <Inicio/>
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
