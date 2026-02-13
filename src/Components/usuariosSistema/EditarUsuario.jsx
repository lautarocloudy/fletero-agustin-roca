import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import Global from '../../Helpers/Global';

export const EditarUsuario = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [usuario, setusuario] = useState({});
  const [resultado, setResultado] = useState("no enviado")
  const params = useParams();

  useEffect(() => {
    conseguirusuario();
  }, []);


  const conseguirusuario = async () => {
    const { datos } = await PetitionFetchToken(Global.url + "user/profile/" + params.id, "GET", localStorage.getItem("token"));

    if (datos.status === "success") {
      setusuario(datos.user);
    }
  };

  const editarusuario = async (e) => {
    e.preventDefault();

    let nuevoArticulo = formulario;

    const { datos } = await PetitionFetchToken(Global.url + "user/editar-usuario/" + params.id, "PUT", localStorage.getItem("token"), nuevoArticulo);
    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      setResultado("error");
    }
  }

  return (
    <div className='jumbo'>
      <h1>Editar usuario</h1>
      <br />
      <form className="formulario" onSubmit={editarusuario} >
        <div className="form-group" >
          <label htmlFor='titulo'>Nombre y Apellido</label>
          <input type="text" name='name' onChange={cambiado} defaultValue={usuario.name} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>E-mail</label>
          <input type="text" name='email' onChange={cambiado} defaultValue={usuario.email} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Contraseña del e-mail</label>
          <input type="text" name='password' onChange={cambiado} defaultValue={usuario.password} />
        </div>
        <br />
       
        <div className="form-group">
          <label htmlFor='titulo'>Role = {usuario.role}</label>
          <select name="role" defaultValue={usuario.role} onChange={cambiado}>
            <option value="admin" >Admin</option>
            <option value="claves1">Claves</option>
            <option value="claves1">Cargar claves</option>
            <option value="claves2">Ver claves</option>
            <option value="paginas">Paginas Web</option>
            <option value="pagina-mactred">Paginas Web y mactred</option>
            <option value="mactred">Mactred</option>
            <option value="labscisco">Labscisco</option>
            <option value="ninguno">Sin permiso</option>
          </select>
        </div>
        <input type="submit" value="Guardar" className='btn btn-success' />
      </form>
      <br />
      <strong>{resultado == "guardado" ? "se actualizo con exito" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionasdos son incorrectos" : ""}</strong>
    </div>
  )
}