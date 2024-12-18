import { useContext, useState } from "react";
import { context } from "./context";
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
    return(
        <context.Provider value={{filas, setFilas, turnos, setTurnos}}>
            {children}
        </context.Provider>
    )
  
}
export default StateCortes;