import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import Global from '../../Helpers/Global';
import { PetitionFetchToken } from '../../Helpers/Peticion';

export const CrearUsuario = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no enviado")

  const guardarArticulo = async (e) => {
    e.preventDefault();
    let nuevoUsuario = formulario;

    const { datos } = await PetitionFetchToken(Global.url + "user/register", "POST", localStorage.getItem("token"), nuevoUsuario);
    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      if (datos.message === 'el usuario ya existe') {
        setResultado("existe")
      } else {
        setResultado("error");
      }
    }
  }

  return (
    <div className='jumbo'>
      <h1>Cargar usuarios</h1>
      <strong>{resultado == "guardado" ? "Se ha registrado el usuario" : ""}</strong>
      <strong>{resultado == "error" ? "No se pudo registrar usuario" : ""}</strong>
      <strong>{resultado == "existe" ? "El usuario ya esta en la base de datos" : ""}</strong>
      <br /><br />
      <form className="formulario" onSubmit={guardarArticulo} >
        <div className="form-group">
          <label htmlFor='titulo'>Nombre y apellido</label>
          <input type="text" name='name' onChange={cambiado} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Email</label>
          <input type="text" name='email' onChange={cambiado} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Contraseña</label>
          <input type="text" name='password' onChange={cambiado} />
        </div>
       
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Role</label>
          <select name="role" defaultValue={'Admin'} onChange={cambiado}>
            <option value="admin" >Admin</option>
            <option value="claves">Claves</option>
            <option value="ninguno">Sin permiso</option>
          </select>
        </div>
        <input type="submit" value="Guardar" className='btn btn-success' />
      </form>
    </div>
  )
}