import { useContext, useState } from "react"
import { context } from "../Context/context"
import Table from 'react-bootstrap/Table';

import EstadoDeCorte from "../minicomponentes/EstadoDeCorte";
export default function Turnos() {
    const {turnos, setTurnos} = useContext(context);

    const [nuevoTurno, setNuevoTurno] = useState({
        cliente:"", 
        trabajo:"",  
        hora:"",
        fecha: "", 
        pago: "" ,

    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoTurno({ ...nuevoTurno, [name]: value });

    };
    const agregarFila = () => {

      if (nuevoTurno.cliente && nuevoTurno.trabajo && nuevoTurno.hora && nuevoTurno.fecha && nuevoTurno.pago) {
        setTurnos([...turnos, nuevoTurno]);
        setNuevoTurno({ cliente: "", trabajo: "", hora: "", fecha: "", pago: "" });
        console.log("turnos actuales", turnos)
      } else {
        alert('Por favor, completa todos los campos antes de agregar una fila.');

      }
      };
    


    return(
        <>
     <h1 style={{textAlign:"center", fontSize:40}}>Turnos</h1>

        <div className="form">
  <div className="form-row">
    <div className="form-group">
      <h3>Cliente</h3>
      <input type="text" className='inp' value={turnos.cliente} onChange={handleChange}/>

    </div>
    <div className="form-group">
      <h3>Trabajo</h3>
      <select className="form-control selectpicker inp" value={turnos.trabajo} onChange={handleChange}>
        <option>Seleccione el tipo de trabajo</option>
        <option>Teñido</option>
        <option>Corte</option>
        <option>Lavado de cabeza</option>
        <option>Barba</option>
      </select>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <h3>Hora</h3>
      <input type="time" className='inp' value={turnos.hora} onChange={handleChange}/>

    </div>
    <div className="form-group">
      <h3>Fecha</h3>
      <input type="date" className='inp' value={turnos.fecha} onChange={handleChange}/>

    </div>
    <div className="form-group">
      <h3>Medio de pago</h3>

      <select className="form-control selectpicker inp" value={turnos.pago} onChange={handleChange}>
        <option>Seleccione el medio de pago</option>
        <option>Efectivo</option>
        <option>Transferencia Bancaria</option>
        <option>Tarjeta de Crédito</option>
        <option>Tarjeta de Débito</option>
      </select>

    </div>
  </div>
  <div className="form-row">
    <a onClick={agregarFila} className="btn btn-4">Guardar</a>
  </div>
  </div>


        {/*------TABLA---- */}
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Cliente</th>
              <th>Trabajo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Medio de pago</th>

            </tr>
          </thead>
          <tbody>
            {turnos.map((turno, index) => (
                
              <tr key={index}>
                <td>{EstadoDeCorte}</td>
                <td>{turno.cliente}</td>
                <td>{turno.trabajo}</td>
                <td>{turno.hora}</td>
                <td>{turno.fecha}</td>
                <td>{turno.pago}</td>
              </tr>
            ))}

    
        
          </tbody>
        </Table>
        </>
    )
}