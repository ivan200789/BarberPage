import { useContext, useState } from "react";
import { context } from "../Context/context";
import Table from "react-bootstrap/Table";
import EstadoDeCorte from "../minicomponentes/EstadoDeCorte";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Importa los estilos predeterminados



export default function Turnos() {


  const { turnos, setTurnos } = useContext(context);
  const [nuevoTurno, setNuevoTurno] = useState({
    cliente: "",
    trabajo: "",
    hora: "",
    fecha: "",
    telefono:null,
    pago: "",
  });
  const handleChange = (event, nameOverride) => {
    if (nameOverride) {
      // Para react-phone-input-2, que pasa el valor directamente
      setNuevoTurno((prev) => ({ ...prev, [nameOverride]: event }));
    } else {
      const { name, value } = event.target;
      setNuevoTurno((prev) => ({ ...prev, [name]: value }));
    }
  };

  const agregarFila = () => {
    if (
      nuevoTurno.cliente &&
      nuevoTurno.trabajo &&
      nuevoTurno.hora &&
      nuevoTurno.fecha &&
      nuevoTurno.telefono &&
      nuevoTurno.pago
    ) {
      const fechaHora = new Date(`${nuevoTurno.fecha}T${nuevoTurno.hora}:00`);

      // Agrega el nuevo turno y ordena por fecha y hora
      const turnosOrdenados = [...turnos, nuevoTurno].sort((a, b) => {
        const fechaHoraA = new Date(`${a.fecha}T${a.hora}:00`);
        const fechaHoraB = new Date(`${b.fecha}T${b.hora}:00`);
        return fechaHoraA - fechaHoraB; // Orden ascendente
      });
  
      setTurnos(turnosOrdenados);
      setNuevoTurno({
        cliente: "",
        trabajo: "",
        hora: "",
        fecha: "",
        telefono: "",
        pago: "",
      });
      
    } else {
      alert("Por favor, completa todos los campos antes de agregar una fila.");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: 40 }}>Turnos</h1>

      <div className="form">
        <div className="form-row">

          <div className="form-group">
            <h3>Cliente</h3>
            <input
              type="text"
              name="cliente"
              className="inp"
              value={nuevoTurno.cliente}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <h3>Trabajo</h3>
            <select
              name="trabajo"
              className="form-control selectpicker inp"
              value={nuevoTurno.trabajo}
              onChange={handleChange}
            >
              <option value="">Seleccione el tipo de trabajo</option>
              <option value="Teñido">Teñido</option>
              <option value="Corte">Corte</option>
              <option value="Lavado de cabeza">Lavado de cabeza</option>
              <option value="Barba">Barba</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <h3>Hora</h3>
            <input
              type="time"
              name="hora"
              className="inp"
              value={nuevoTurno.hora}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <h3>Fecha</h3>
            <input
              type="date"
              name="fecha"
              className="inp"
              value={nuevoTurno.fecha}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <h3>Medio de pago</h3>
            <select
              name="pago"
              className="form-control selectpicker inp"
              value={nuevoTurno.pago}
              onChange={handleChange}
            >
              <option value="">Seleccione el medio de pago</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia Bancaria">
                Transferencia Bancaria
              </option>
              <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
              <option value="Tarjeta de Débito">Tarjeta de Débito</option>
            </select>
          </div>
        </div>

          <div className="form-group">
            <h3>Teléfono</h3>
            <PhoneInput
              country={"ar"} // Código del país inicial (Argentina)
              placeholder="Ingresa tu número"
              value={nuevoTurno.telefono}
              onChange={(phone) => handleChange(phone, "telefono")}
            />
          </div>
        <div className="form-row">
          <button onClick={agregarFila} className="btn btn-4">
            Guardar
          </button>
        </div>
      </div>

      {/* Tabla de turnos */}
      <Table striped bordered hover>
        <thead>
          <tr>

            <th>Estado</th>

            <th>Cliente</th>
            <th>Trabajo</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Medio de pago</th>
            <th>Teléfono</th>

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
              <td>{turno.telefono}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
