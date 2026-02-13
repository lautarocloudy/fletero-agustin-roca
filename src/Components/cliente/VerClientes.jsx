import React from 'react';
import { useState, useEffect } from 'react';
import Global from '../../Helpers/Global';
import { useParams } from 'react-router-dom';
import { PetitionFetchToken } from '../../Helpers/Peticion';


export const VerClientes = () => {

  const [clientes, setClientes] = useState({})
  const params = useParams();
  const estaEnTramite = Boolean(clientes.tramite); 

  useEffect(() => {
    conseguirClientes();
  }, []);

  const conseguirClientes = async () => {
    const { datos } = await PetitionFetchToken(Global.url + "clientes/clientes/" + params.id, "GET", localStorage.getItem("token"));
    if (datos.status === "success") {
      setClientes(datos.clientes);
    }
  };

  return (
    <div className='jumbo'>
      <h1>Ver Clientes</h1>
      <br /><br />
      <form className="formulario" >
        <div className="form-group">
          <label htmlFor='titulo'>Rubro</label>
          <input type="text" name='rubro' disabled='disabled' defaultValue={clientes.rubro} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Empresa</label>
          <input type="text" name='empresa' disabled='disabled' defaultValue={clientes.empresa} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Nombre</label>
          <input type="text" name='nombre' disabled='disabled' defaultValue={clientes.nombre} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Telefono</label>
          <input type="text" name='telefono' disabled='disabled' defaultValue={clientes.telefono} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Email</label>
          <input type="text" name='email' disabled='disabled' defaultValue={clientes.email} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>Direccion</label>
          <input type="text" name='direccion' disabled='disabled' defaultValue={clientes.direccion} />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor='titulo'>CUIT</label>
          <input type="text" name='cuit' disabled='disabled' defaultValue={clientes.cuit} />
        </div>
        <br />
            <div className="form-group">
              <label htmlFor='titulo'>Servicio de internet</label>
              <input type="text" name='servicioInternet' defaultValue={clientes.servicioInternet} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Servidor que tienen</label>
              <input type="text" name='servidor' defaultValue={clientes.servidor} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Ubicacion de la carpeta</label>
              <input type="text" name='ubicacionCarpeta' defaultValue={clientes.ubicacionCarperta}/>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario1'defaultValue={clientes.usuario1} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass1' defaultValue={clientes.pass1}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario2' defaultValue={clientes.usuario2} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass2' defaultValue={clientes.pass2} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario3' defaultValue={clientes.usuario3} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass3' defaultValue={clientes.pass3}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario4' defaultValue={clientes.usuario4} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass4' defaultValue={clientes.pass4}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario5' defaultValue={clientes.usuario5} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass5' defaultValue={clientes.pass5} />
                </div>
              </div>
            </div>
        <br />
        <div className="form-group">
          <div className="row">
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Organismo</label>
              <input className='inputProveedores' type="text" disabled='disabled' defaultValue={clientes.organismo} />
            </div>
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Provincia</label>
              <input className='inputProveedores' type="text" disabled='disabled' defaultValue={clientes.provincia} />
            </div>
            <div className="col-md-1 ">
              <label htmlFor='titulo'>N° de legajo</label>
              <input className='inputProveedores' type="text" disabled='disabled' defaultValue={clientes.legajo} />
            </div>
            <div className="col-md-2 ">
              <label htmlFor='titulo'>Estado</label>
              <input className='inputProveedores' type="text" disabled='disabled' defaultValue={clientes.situacion} />
            </div>
            {estaEnTramite && (
              <div className="col-md-1 ">
                <label htmlFor='titulo'>N° de tramite</label>
                <input className='inputProveedores' type="text" disabled='disabled' defaultValue={clientes.tramite} />
              </div>
            )}
          </div>
        </div>
        <br />
        <div className="form-group">
          <div className="row">
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Banco</label>
              <input className='inputProveedores' type="text" name='banco1' disabled='disabled' defaultValue={clientes.banco1} />
            </div>
            <div className="col-md-4 ">
              <label htmlFor='titulo'>CBU</label>
              <input className='inputProveedores' type="text" name='cbu1' disabled='disabled' defaultValue={clientes.cbu1} />
            </div>
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Cuenta corriente</label>
              <input className='inputProveedores' type="text" name='cuentaCorriente1' disabled='disabled' defaultValue={clientes.cuentaCorriente1} />
            </div>
          </div>
        </div>
        <br />
        <div className="form-group">
          <div className="row">
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Banco</label>
              <input className='inputProveedores' type="text" name='banco2' disabled='disabled' defaultValue={clientes.banco2} />
            </div>
            <div className="col-md-4 ">
              <label htmlFor='titulo'>CBU</label>
              <input className='inputProveedores' type="text" name='cbu2' disabled='disabled' defaultValue={clientes.cbu2} />
            </div>
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Cuenta corriente</label>
              <input className='inputProveedores' type="text" name='cuentaCorriente2' disabled='disabled' defaultValue={clientes.cuentaCorriente2} />
            </div>
          </div>
        </div>
        <br />
        <div className="form-group">
          <div className="row">
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Banco</label>
              <input className='inputProveedores' type="text" name='banco3' disabled='disabled' defaultValue={clientes.banco3} />
            </div>
            <div className="col-md-4 ">
              <label htmlFor='titulo'>CBU</label>
              <input className='inputProveedores' type="text" name='cbu3' disabled='disabled' defaultValue={clientes.cbu3} />
            </div>
            <div className="col-md-4 ">
              <label htmlFor='titulo'>Cuenta corriente</label>
              <input className='inputProveedores' type="text" name='cuentaCorriente3' disabled='disabled' defaultValue={clientes.cuentaCorriente3} />
            </div>
          </div>
        </div>
        <br />
        <div className="form-group">
          <div className="row">
            <div className="col-md-6 ">
              <label htmlFor='titulo'>Billetera Virtual</label>
              <input className='inputProveedores' type="text" name='billeteraVirtual' disabled='disabled' defaultValue={clientes.billeteraVirtual} />
            </div>
            <div className="col-md-6 ">
              <label htmlFor='titulo'>CVU</label>
              <input className='inputProveedores' type="text" name='cvu' disabled='disabled' defaultValue={clientes.cvu} />
            </div>
          </div>
        </div>
        <br />
      </form>
    </div>
  )
}