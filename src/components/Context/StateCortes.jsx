import { useContext, useState } from "react";
import { context } from "./context";
import EstadodeProducto from "../minicomponentes/EstadodeProducto";
const StateCortes = ({children}) =>{
 
    const [filas, setFilas] = useState([{
        nombre: '', 
        barbero: '', 
        fecha: '', 
        pago: '' 

    },]);
    const [turnos, setTurnos] = useState([{
        cliente: "", 
        trabajo:"",  
        hora:"",
        fecha: "", 
        telefono: null,
        pago: "" 

    },]);
    const [productos, setProductos] = useState([{
        producto:null,
        marca:null,
    },]);

 

    return(
        <context.Provider value={{filas, setFilas, turnos, setTurnos, productos, setProductos}}>
            {children}
        </context.Provider>
    )
}
export default StateCortes;