import Table from 'react-bootstrap/Table';
import stateCortes from '../Context/StateCortes';

import { context } from '../Context/context';

import { useContext } from 'react';

import "./--corte.css"
import { useState } from 'react';
import Turnos from './Turnos';
export default function Corte() {
  const { filas, setFilas } = useContext(context);


  const [nuevaFila, setNuevaFila] = useState({
    nombre: '',
    barbero: '',
    fecha: '',
    pago: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevaFila({ ...nuevaFila, [name]: value });
  };

  const agregarFila = () => {
    if (nuevaFila.nombre && nuevaFila.barbero && nuevaFila.fecha && nuevaFila.pago) {
      setFilas([...filas, nuevaFila]); // Agrega la nueva fila al array de filas
      
      setNuevaFila({ nombre: '', barbero: '', fecha: '', pago: '' }); // Reinicia el formulario
    } else {
      alert('Por favor, completa todos los campos antes de agregar una fila.');
    }
  };
  return(
    <>
    <h1 style={{textAlign:"center", fontSize:40}}>Cortes realizados</h1>
<div className="form">
  <div className="form-row">
    <div className="form-group">
      <h3>Cliente</h3>
     <input type="text" className='inp' name="nombre" value={nuevaFila.nombre} onChange={handleChange} /> 
    </div>
    <div className="form-group">
      <h3>Barbero</h3>
      <input type="text" className='inp' name="barbero" value={nuevaFila.barbero} onChange={handleChange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <h3>Fecha</h3>
      <input type="date" className='inp' name='fecha' value={nuevaFila.fecha} onChange={handleChange}/>
    </div>
    <div className="form-group">
      <h3>Medio de pago</h3>

      <select name="pago" value={nuevaFila.pago} onChange={handleChange} className="form-control selectpicker inp">
        <option value="">Seleccione el medio de pago</option>
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
    

      <div className="tabla">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Barbero</th>
          <th>Fecha</th>

          <th>Medio de pago</th>
        </tr>
      </thead>
      <tbody>
      {filas?.map((fila, index) => (
        <tr key={index}>
          <td>{fila.nombre}</td>
          <td>{fila.barbero}</td>
          <td>{fila.fecha}</td>
          <td>{fila.pago}</td>
        </tr>
      ))}
      </tbody>
       
    </Table>
    </div>

        </>
    )

}