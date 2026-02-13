import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import lupa from '../../assets/lupa.png'
import useAuth from '../../hooks/useAuth';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import Global from '../../Helpers/Global';


const VerComprobantes = () => {

    const [empresas, setEmpresas] = useState([]);
    const navegar = useNavigate();
    const params = useParams()

    const { auth, loading } = useAuth();

    useEffect(() => {
        conseguirEmpresa();
    }, []);

    const conseguirEmpresa = async () => {
        const { datos, cargando } = await PetitionFetchToken(Global.url + "comprobantes/comprobantes", "GET", localStorage.getItem("token"));

        if (datos.status === "success") {
            setEmpresas(datos.empresa);
        }
    }

    const hacerBusqueda = (e) => {
        e.preventDefault();
        let miBusqueda = e.target.search_field.value;
        navegar("/social/busqueda-comprobantes/" + miBusqueda, { replace: true });
    }

    return (
        <aside className="lateral">
            <form className='form-Buscar' onSubmit={hacerBusqueda}>
                <div className=' busqueda-input'>
                    <input className='input-buscar-paginas' type="text" name='search_field' placeholder='Empresas' />
                </div>
                <div className=' busqueda-boton'>
                    <button className='button-buscar button-buscar-paginas' type="submit" id="search" src={lupa}  ><img src={lupa} /></button>
                </div>
            </form>
            {

                empresas.length >= 1 ?
                    empresas.map((empresa) => {
                        return (

                            <div className="container-listado" key={empresa._id}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <h4 className='nombre-lista'> <br /><br />   {empresa.nombreEmpresa.toUpperCase()} </h4>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {empresa.facturaVentas &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.facturaVentas} target="_blank">Factura de ventas </a>
                                                    </button>
                                                }
                                                {empresa.facturaCompras &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.facturaCompras} target="_blank">Factura de compras </a>
                                                    </button>
                                                }
                                                {empresa.reciboCobro &&
                                                    <button type="submit" className="btn btn-ir btn-comprobante" >
                                                        <a href={empresa.reciboCobro} target="_blank">Recibo de cobro </a>
                                                    </button>
                                                }
                                                {empresa.reciboPago &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.reciboPago} target="_blank">Recibo de pago </a>
                                                    </button>
                                                }
                                                {empresa.presupuesto &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.presupuesto} target="_blank">Presupuesto</a>
                                                    </button>
                                                }
                                                {empresa.prestamosPagar &&
                                                    <button type="submit" className="btn btn-ir btn-comprobante" >
                                                        <a href={empresa.prestamosPagar} target="_blank">Prestamos a pagar </a>
                                                    </button>
                                                }
                                                {empresa.remito &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.remito} target="_blank">Remito </a>
                                                    </button>
                                                }
                                                {empresa.checkList &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.checkList} target="_blank">checkList </a>
                                                    </button>
                                                }
                                                {empresa.altaPersonal &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.altaPersonal} target="_blank">Legajo de personal </a>
                                                    </button>
                                                }
                                            </div>
                                            <div className="col-md-12">
                                                {empresa.prestamosCobrar &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.prestamosCobrar} target="_blank">Prestamos a cobrar </a>
                                                    </button>
                                                }
                                                {empresa.ordenPagoCobro &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.ordenPagoCobro} target="_blank">Orden de pagar / cobro </a>
                                                    </button>
                                                }
                                                {empresa.pagare &&
                                                    <button type="submit" className="btn btn-ir btn-comprobante" >
                                                        <a href={empresa.pagare} target="_blank">Pagare </a>
                                                    </button>
                                                }
                                                {empresa.hojaMembretada &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.hojaMembretada} target="_blank">Hoja membretada </a>
                                                    </button>
                                                }
                                                {empresa.informe &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.informe} target="_blank">Informe pdf </a>
                                                    </button>
                                                }
                                                {empresa.informeDoc &&
                                                    <button type="submit" className="btn btn-ir btn-comprobante" >
                                                        <a href={empresa.informeDoc} target="_blank">Informe word </a>
                                                    </button>
                                                }
                                                {empresa.ordenPrestamoDevolucion &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.ordenPrestamoDevolucion} target="_blank">orden Prestamo Devolucion </a>
                                                    </button>
                                                }
                                                {empresa.servicioAdministracion &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.servicioAdministracion} target="_blank">Servicio de administracion </a>
                                                    </button>
                                                }
                                                {empresa.archivoDocumentacion &&
                                                    <button type="submit" className="btn btn-ir btn-comprobante" >
                                                        <a href={empresa.archivoDocumentacion} target="_blank">Archivo de documentacion </a>
                                                    </button>
                                                }

                                            </div>
                                            <div className="col-md-12">
                                                {empresa.troquelado &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.troquelado} target="_blank">Troquelado </a>
                                                    </button>
                                                }
                                                {empresa.informacion &&
                                                    <button type="submit" className="btn btn-editar btn-comprobante" >
                                                        <a href={empresa.informacion} target="_blank">De Informacion </a>
                                                    </button>
                                                }
                                                {empresa.informacion &&
                                                    <button type="submit" className="btn btn-ir btn-comprobante" >
                                                        <a href={empresa.cargaFondo} target="_blank">Carga de Fondo </a>
                                                    </button>
                                                }
                                               
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }) : <h1>No hay comprobantes</h1>
            }
        </aside>
    )
}

export default VerComprobantes