import Table from "react-bootstrap/Table";

import { context } from '../Context/context';
import { useContext, useState } from "react";
import EstadodeProducto from "../minicomponentes/EstadodeProducto";

export default function Inventario() {
    const { productos, setProductos } = useContext(context);
    const [nuevoProducto, setNuevoProducto] = useState({
        producto:null,
        marca:null,
    })
    const {verEstadodeProductos, setverEstadodeProductos} = useState(false)


    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoProducto({ ...nuevoProducto, [name]: value });
      };
    
      const agregarFila = () => {
        if (nuevoProducto.producto && nuevoProducto.marca) {
          const nuevosProductos = productos.map((prod) => ({ ...prod }));
          nuevosProductos.push({ ...nuevoProducto });
          setProductos(nuevosProductos);
          setNuevoProducto({producto:"", marca:""}); // Reinicia el formulario
          mostrarEstadodeProducto();
        } else {
          alert('Por favor, completa todos los campos antes de agregar una fila.');
        }
      };
      const mostrarEstadodeProducto = () =>{
        console.log("hola")
      }

    return(
        <>
        <div className="form">
        <div className="form-row">
            <h3>Producto</h3>
            <input type="text" className='inp' name="producto" value={nuevoProducto.producto} onChange={handleChange}/> 
        </div>
        <div className="form-row">
            <h3>Marca</h3>
            <input type="text" className='inp' name="marca" value={nuevoProducto.marca} onChange={handleChange}/> 

        </div>

        <div className="form-row">
          <a onClick={agregarFila}  className="btn btn-4">Guardar</a>
        </div>
        </div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Marca</th>
            <th>Estado</th>


          </tr>
        </thead>
        <tbody>
        {productos.map((prod, index) => (
            <tr key={index}>
              <td>{prod.producto}</td>
              <td>{prod.marca}</td>
              
            </tr>
        ))}
      </tbody>
      </Table>
        
        </>
    )
}