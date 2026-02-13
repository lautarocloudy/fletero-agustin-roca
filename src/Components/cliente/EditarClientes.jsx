import React from 'react';
import { useState, useEffect } from 'react';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import { useParams } from 'react-router-dom';
import Global from '../../Helpers/Global';
import { useForm } from '../../hooks/useForm';


export const EditarClientes = () => {

    const { formulario, enviado, cambiado } = useForm({});
    const [resultado, setResultado] = useState("no enviado")
    const [clientes, setClientes] = useState({})
    const [bancos, setBancos] = useState([
        { "banco": "Seleccione un banco" },
        { "banco": "Provincia" },
        { "banco": "Galicia" },
        { "banco": "Santander Rio" },
        { "banco": "BBVA Frances" },
        { "banco": "Nacion" },
        { "banco": "Macro" },
        { "banco": "ICBC" },
        { "banco": "Hipotecario" },
        { "banco": "Credicoop" },
    ]);
    const params = useParams();

    useEffect(() => {
        conseguirClientes();
    }, []);


    const conseguirClientes = async () => {
        const { datos } = await PetitionFetchToken(Global.url + "clientes/clientes/" + params.id, "GET", localStorage.getItem("token"));

        if (datos.status === "success") {
            setClientes(datos.clientes);
        }
    };

    const editarClientes = async (e) => {
        e.preventDefault();

        let nuevoArticulo = formulario;

        const { datos } = await PetitionFetchToken(Global.url + "clientes/editar-clientes/" + params.id, "PUT", localStorage.getItem("token"), nuevoArticulo);
        if (datos.status === "success") {
            setResultado("guardado");
        } else {
            setResultado("error");
        }
    }




    return (
        <div className='jumbo'>
            <h1>Editar Clientes</h1>

            <br /><br />
            <form className="formulario" onSubmit={editarClientes} key={clientes._id}>

                <div className="form-group" >
                    <label htmlFor='titulo'>Rubro</label>
                    <input type="text" name='rubro' defaultValue={clientes.rubro} onChange={cambiado} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Empresa</label>
                    <input type="text" name='empresa' defaultValue={clientes.empresa} onChange={cambiado} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Nombre</label>
                    <input type="text" name='nombre' defaultValue={clientes.nombre} onChange={cambiado} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Telefono</label>
                    <input type="text" name='telefono' defaultValue={clientes.telefono} onChange={cambiado} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Email</label>
                    <input type="text" name='email' defaultValue={clientes.email} onChange={cambiado} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Direccion</label>
                    <input type="text" name='direccion' defaultValue={clientes.direccion} onChange={cambiado} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>CUIT</label>
                    <input type="text" name='cuit' defaultValue={clientes.cuit} onChange={cambiado} />
                </div>
                <br />
            <div className="form-group">
              <label htmlFor='titulo'>Servicio de internet</label>
              <input type="text" name='servicioInternet' defaultValue={clientes.servicioInternet} onChange={cambiado}/>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Servidor que tienen</label>
              <input type="text" name='servidor' defaultValue={clientes.servidor} onChange={cambiado}/>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Ubicacion de la carpeta</label>
              <input type="text" name='ubicacionCarpeta' defaultValue={clientes.ubicacionCarperta} onChange={cambiado}/>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario1'defaultValue={clientes.usuario1} onChange={cambiado}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass1' defaultValue={clientes.pass1} onChange={cambiado}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario2' defaultValue={clientes.usuario2} onChange={cambiado}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass2' defaultValue={clientes.pass2} onChange={cambiado}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario3' defaultValue={clientes.usuario3} onChange={cambiado}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass3' defaultValue={clientes.pass3} onChange={cambiado}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario4' defaultValue={clientes.usuario4} onChange={cambiado}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass4' defaultValue={clientes.pass4} onChange={cambiado}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario5' defaultValue={clientes.usuario5} onChange={cambiado}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass5' defaultValue={clientes.pass5} onChange={cambiado}/>
                </div>
              </div>
            </div>
                <br />
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>Banco {clientes.banco1}</label>
                            <select className='inputProveedores' name="banco1" onChange={cambiado} defaultValue={clientes.banco1}>
                                {
                                    bancos.map((banco) => {
                                        return (
                                            <option key={banco._id} value={banco.banco} >
                                                {banco.banco}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>CBU</label>
                            <input className='inputProveedores' type="text" name='cbu1' maxlength="22" defaultValue={clientes.cbu1} onChange={cambiado} />
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>Cuenta corriente</label>
                            <input className='inputProveedores' type="text" name='cuentaCorriente1' defaultValue={clientes.cuentaCorriente1} onChange={cambiado} />
                        </div>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>Banco {clientes.banco2}</label>
                            <select className='inputProveedores' name="banco2" onChange={cambiado} defaultValue={clientes.banco2}>
                                {
                                    bancos.map((banco) => {
                                        return (
                                            <option key={banco._id} value={banco.banco} >
                                                {banco.banco}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>CBU</label>
                            <input className='inputProveedores' type="text" name='cbu2' maxlength="22" defaultValue={clientes.cbu2} onChange={cambiado} />
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>Cuenta corriente</label>
                            <input className='inputProveedores' type="text" name='cuentaCorriente2' defaultValue={clientes.cuentaCorriente2} onChange={cambiado} />
                        </div>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>Banco {clientes.banco3}</label>
                            <select className='inputProveedores' name="banco3" defaultValue={clientes.banco3} onChange={cambiado}>
                                {
                                    bancos.map((banco) => {
                                        return (
                                            <option key={banco._id} value={banco.banco} >
                                                {banco.banco}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>CBU</label>
                            <input className='inputProveedores' type="text" name='cbu3' maxlength="22" defaultValue={clientes.cbu3} onChange={cambiado} />
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor='titulo'>Cuenta corriente</label>
                            <input className='inputProveedores' type="text" name='cuentaCorriente3' defaultValue={clientes.cuentaCorriente3} onChange={cambiado} />
                        </div>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6 ">
                            <label htmlFor='titulo'>Billetera Virtual</label>
                            <input className='inputProveedores' type="text" name='billeteraVirtual' defaultValue={clientes.billeteraVirtual} onChange={cambiado} />
                        </div>
                        <div className="col-md-6 ">
                            <label htmlFor='titulo'>CVU</label>
                            <input className='inputProveedores' type="text" name='cvu' defaultValue={clientes.cvu} onChange={cambiado} />
                        </div>
                    </div>
                </div>
                <br />
                <strong>{resultado == "guardado" ? "Se ha editado el cliente" : ""}</strong>
                <strong>{resultado == "error" ? "No se pudo editar el cliente" : ""}</strong>
                <br />
                <input type="submit" value="Editar" className='btn btn-success' />
            </form>

        </div>
    )
}