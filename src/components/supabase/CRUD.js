import { supabase } from "../supabase/supabase";

export const obtenerUsuarioFiltrado = async(name) =>{

  try{
    const {data, error} = await supabase
    .from("Usuarios")
    .select("*")
    .eq("Usuario", name)  
    if (error) {
      console.error('Error al consultar la tabla:', error);
      return false;
    } 
    // Si data tiene registros, el usuario existe
    return data.length > 0;
  } catch (error) {
    console.error('Error inesperado:', error);
    return false;
  }
  }

export const obtenerContraseñaFiltrada = async(contraseña) =>{
  try{
    const {data, error} = await supabase
    .from("Usuarios")
    .select("*")
    .eq("Contraseña", contraseña);
    if (error) {
      console.error('Error al consultar la tabla:', error);
      return false;
    } 
    
    return data.length > 0;
  } catch (error) {
    console.error('Error inesperado:', error);
    return false;
  }
}

export const IngresarDatosCorte = async(Cliente, Trabajo, Hora, Fecha, MedioDePago, Telefono)=>{
  const {data, error} = await supabase
  .from("Cortes")
  .insert([
    { Cliente, Trabajo, Hora, Fecha, MedioDePago, Telefono }
  ]);

  if (error) {
    console.log("Hay error en ingresar datos en tabla Cortes", error)
  }
  return data
}