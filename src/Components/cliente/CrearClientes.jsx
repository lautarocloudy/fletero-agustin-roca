import React from 'react';
import { useState, useEffect } from 'react';
import Global from '../../Helpers/Global';
import ListadoClientes from './ListadoClientes';
import { useForm } from '../../hooks/useForm';
import { PetitionFetchToken } from '../../Helpers/Peticion';

export const CrearClientes = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no enviado")
  const [cliente, setCliente] = useState("crear");
  const [estaEnTramite, setEstaEnTramite] = useState(true);
  const [provincias, setProvincias] = useState({});
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
    { "banco": "Superville" },
    { "banco": "Patagonia" },
    { "banco": "HSBC" },
    { "banco": "Otros" },
  ]);

  useEffect(() => {
    consultaProvincias();
  }, []);


  const guardarClientes = async (e) => {
    e.preventDefault()
    let nuevoUsuario = formulario;
    if (estaEnTramite) {
      formulario.situcion = "tramite"
    } else {
      formulario.situcion = "inscripta"
    }

    if (!nuevoUsuario.provincia) {
      nuevoUsuario.provincia = provincias[0].nombre
    }

    const { datos } = await PetitionFetchToken(Global.url + "clientes/crear", "POST", localStorage.getItem("token"), nuevoUsuario);
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
  const consultaProvincias = async () => {
    await fetch('https://apis.datos.gob.ar/georef/api/provincias')
      .then(response => response.json())
      .then(data => {
        // Ordenar las provincias por nombre alfabéticamente
        const provinciasOrdenadas = data.provincias.sort((a, b) => a.nombre.localeCompare(b.nombre));

        // Hacer algo con las provincias ordenadas, como mostrarlas en una lista
        setProvincias(provinciasOrdenadas);
        console.log((provinciasOrdenadas));
      })
      .catch(error => {
        alert("error")
        console.error('Error al obtener las provincias:', error);
      });
  }
  const crear = () => {
    setCliente("crear")
  }
  const listado = () => {
    setCliente("listado")
  }



  return (

    <>
      <br />
      <h1>Clientes</h1>
      <input type="submit" value="Crear " className='btn btn-ver' onClick={crear} />
      <input type="submit" value="Ver" className='btn btn-editar' onClick={listado} />

      {cliente == "crear" &&
        <div className='jumbo'>
          <h1>Cargar clientes </h1>

          <br /><br />
          <form className="formulario" onSubmit={guardarClientes} >

            <div className="form-group">
              <label htmlFor='titulo'>Actividad economica</label>
              <input type="text" name='rubro' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Empresa</label>
              <input type="text" name='empresa' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Nombre</label>
              <input type="text" name='nombre' onChange={cambiado} />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor='titulo'>Telefono</label>
              <input type="text" name='telefono' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Email</label>
              <input type="text" name='email' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Direccion</label>
              <input type="text" name='direccion' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>CUIT</label>
              <input type="text" name='cuit' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Servicio de internet</label>
              <input type="text" name='servicioInternet' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Servidor que tienen</label>
              <input type="text" name='servidor' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor='titulo'>Ubicacion de la carpeta</label>
              <input type="text" name='ubicacionCarpeta' onChange={cambiado} />
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario1' onChange={cambiado} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass1' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario2' onChange={cambiado} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass2' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario3' onChange={cambiado} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass3' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario4' onChange={cambiado} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass4' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor='titulo'>usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='usuario5' onChange={cambiado} />
                </div>
                <div className="col-md-6">
                  <label htmlFor='titulo'>contraseña del usuario del servidor</label>
                  <input className='inputProveedores' type="text" name='pass5' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Organismo</label>
                  <input className='inputProveedores' type="text" name='organismo' onChange={cambiado} />
                </div>
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Provincia</label>
                  <select className='inputProveedores' name="provincia" onChange={cambiado}>
                    {
                      Array.isArray(provincias) && provincias.map((provincia) => {
                        return (
                          <option key={provincia.id} value={provincia.nombre} >
                            {provincia.nombre}
                          </option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="col-md-1 ">
                  <label htmlFor='titulo'>N° de legajo</label>
                  <input className='inputProveedores' type="text" name='legajo' onChange={cambiado} />
                </div>
                <div className="col-md-2 ">
                  <br />
                  <input className='radio' type="radio" id="topping" name="topping" value="tramite" defaultChecked="true" checked={estaEnTramite} onChange={() => setEstaEnTramite(true)} />En tramite
                  <br />
                  <input className='radio' type="radio" id="topping" name="topping" value="inscripta" checked={!estaEnTramite} onChange={() => setEstaEnTramite(false)} />Inscripta
                </div>
                {estaEnTramite && (
                  <div className="col-md-1 ">
                    <label htmlFor='titulo'>N° de tramite</label>
                    <input className='inputProveedores' type="text" name='tramite' onChange={cambiado} />
                  </div>
                )}
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Banco</label>
                  <select className='inputProveedores' name="banco1" onChange={cambiado}>
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
                  <input className='inputProveedores' type="text" name='cbu1' maxlength="22" onChange={cambiado} />
                </div>
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Cuenta corriente</label>
                  <input className='inputProveedores' type="text" name='cuentaCorriente1' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Banco</label>
                  <select className='inputProveedores' name="banco2" onChange={cambiado}>
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
                  <input className='inputProveedores' type="text" name='cbu2' maxlength="22" onChange={cambiado} />
                </div>
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Cuenta corriente</label>
                  <input className='inputProveedores' type="text" name='cuentaCorriente2' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Banco</label>
                  <select className='inputProveedores' name="banco3" onChange={cambiado}>
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
                  <input className='inputProveedores' type="text" name='cbu3' maxlength="22" onChange={cambiado} />
                </div>
                <div className="col-md-4 ">
                  <label htmlFor='titulo'>Cuenta corriente</label>
                  <input className='inputProveedores' type="text" name='cuentaCorriente3' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-6 ">
                  <label htmlFor='titulo'>Billetera Virtual</label>
                  <input className='inputProveedores' type="text" name='billeteraVirtual' onChange={cambiado} />
                </div>
                <div className="col-md-6 ">
                  <label htmlFor='titulo'>CVU</label>
                  <input className='inputProveedores' type="text" name='cvu' onChange={cambiado} />
                </div>
              </div>
            </div>
            <br />
            <strong>{resultado == "guardado" ? "Se ha registrado el cliente" : ""}</strong>
            <strong>{resultado == "error" ? "No se pudo registrar el cliente" : ""}</strong>
            <strong>{resultado == "existe" ? "El personal ya esta en la base de datos" : ""}</strong>
            <br />

            <input type="submit" value="Guardar" className='btn btn-success' />
          </form>

        </div>
      }
      {
        cliente == "listado" &&
        <ListadoClientes />
      }

    </>
  )
}