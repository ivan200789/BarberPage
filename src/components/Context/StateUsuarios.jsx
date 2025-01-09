import { useState } from "react"
import { context } from "./context"


const StateUsuarios = ({children}) =>{
    const [usuarioContext, setUsuarioContext] = useState("")
    const [contraseñaContext, setcontraseñaContext] = useState("")

    return(
        <context.Provider value={{usuarioContext, setUsuarioContext, contraseñaContext, setcontraseñaContext}}>
            {children}
        </context.Provider>

    )
}
export default StateUsuarios;