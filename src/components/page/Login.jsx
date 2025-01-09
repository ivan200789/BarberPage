import { useContext, useState } from "react";
import "./--login.css"; 

import { useNavigate } from 'react-router-dom'; 
import { context } from "../Context/context";
export default function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("") 
  const [Contraseña, setContraseña] = useState("") 

  const [usuarioContext, setUsuarioContext]  = useContext(context);
  const [contraseñaContext, setcontraseñaContext] = useContext(context)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación 
    // Si la autenticación es exitosa, redirige a la pantalla cortes:
    console.log("Username:", Username);
    console.log("Contraseña:", Contraseña);

    setUsuarioContext(Username)
    setcontraseñaContext(Contraseña)

    console.log("UsernameContext:", usuarioContext);
    console.log("ContraseñaContext:", contraseñaContext);
    
    navigate('/corte'); 
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
          <input value={Contraseña} onChange={(e) => setContraseña(e.target.value)}
          type="password" 
          name="p" 
          placeholder="Password" 
          className="input"/>
          <button type="submit" className="boton btn-primary boton-block boton-large">Iniciar Sesion</button>
        </form>
      </div>
    </div>
    </>
  );
}