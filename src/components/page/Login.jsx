import { useContext, useState } from "react";
import "./--login.css"; 

import { useNavigate } from 'react-router-dom'; 
import { context } from "../Context/context";
import { supabase } from "../supabase/supabase";

import { obtenerContraseñaFiltrada, obtenerUsuarioFiltrado } from "../supabase/CRUD";
export default function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("") 
  const [Contraseña, setContraseña] = useState("") 

  const [UsernameExist, setUsernameExist] = useState(null) 
  const [ContraseñaExist, setContraseñaExist] = useState(null) 



  const {usuarioContext, setUsuarioContext} = useContext(context);
  const {contraseñaContext, setcontraseñaContext} = useContext(context)


  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    setUsuarioContext(Username);
    setcontraseñaContext(Contraseña);

    const VerificarUsuario = await obtenerUsuarioFiltrado(Username);
    setUsernameExist(VerificarUsuario)


    const VerificarContraseña = await obtenerContraseñaFiltrada(Contraseña)
    setContraseñaExist(VerificarContraseña)

  
    if (VerificarUsuario && VerificarContraseña) {
      console.log("Usuario y contraseña correctos.");
      navigate("/corte");
    } else if (!VerificarUsuario && !VerificarContraseña) {
      alert("Usuario y contraseña incorrectos.")
    } else if (!VerificarUsuario) {
      alert("Usuario inexistente.");
    } else if (!VerificarContraseña) {
      alert("Contraseña incorrecta.");
    }
   
 

 
  };
  
  return (
    <>
    <div className="fondo">
      <div className="login"> 
        <h1>Login</h1>
        <form onSubmit={handleSubmit}> 
          <input 
            value={Username} 
            onChange={(e) => setUsername(e.target.value)} 
            type="text" 
            name="u" 
            placeholder="Username" 
            className="input"
            />
          <input 
            value={Contraseña} 
            onChange={(e) => setContraseña(e.target.value)}
            type="password" 
            name="p" 
            placeholder="Password" 
            className="input"
          />
          <button type="submit" className="boton btn-primary boton-block boton-large">Iniciar Sesion</button>

        </form>

      </div>
    </div>
    </>
  );
}