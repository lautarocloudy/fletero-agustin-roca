import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import lupa from '../../assets/lupa.png'
import { PetitionFetchToken } from '../../Helpers/Peticion';
import Global from '../../Helpers/Global';

const BusquedaComprobante = () => {

    const [empresas, setEmpresas] = useState([]);
    const navegar = useNavigate();
    const params = useParams()

    useEffect(() => {
        conseguirEmpresa();
    }, []);

    useEffect(() => {
        conseguirEmpresa();
    }, [params]);


    const conseguirEmpresa = async () => {
        const { datos, cargando } = await PetitionFetchToken(Global.url + "comprobantes/buscar/" + params.busqueda, "GET");

        if (datos.status === "success") {
            setEmpresas(datos.comprobante);
        }
    }

    const hacerBusqueda = (e) => {
        e.preventDefault();
        let miBusqueda = e.target.search_field.value;
        if (miBusqueda.length >= 1) {
            navegar("/social/busqueda-comprobantes/" + miBusqueda, { replace: true });
        } else {
            navegar("/social/ver-comprobantes")
        }

    }

    return (
        <aside className="lateral">
            <h1> Empresas </h1>
            <form className='form-Buscar' onSubmit={hacerBusqueda}>
                <div className=' busqueda-input'>
                    <input className='input-buscar' type="text" name='search_field' placeholder='Empresas' />
                </div>
                <div className=' busqueda-boton'>
                    <button className='button-buscar' type="submit" id="search" src={lupa}  ><img src={lupa} /></button>
                </div>
            </form>
            {

                empresas.length >= 1 ?
                    empresas.map((empresa) => {
                        return (
                            <div className="container-listado" key={empresa._id}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4 className='nombre-lista'> <br /><br />   {empresa.nombreEmpresa.toUpperCase()} </h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-ver btn-comprobante" >
                                                    <a href={empresa.facturaVentas} target="_blank">Factura de ventas </a>
                                                </button>
                                                <button type="submit" className="btn btn-editar btn-comprobante" >
                                                    <a href={empresa.facturaCompras} target="_blank">Factura de compras </a>
                                                </button>
                                                <button type="submit" className="btn btn-ir btn-comprobante" >
                                                    <a href={empresa.reciboCobro} target="_blank">Recibo de cobro </a>
                                                </button>
                                                <button type="submit" className="btn btn-ver btn-comprobante" >
                                                    <a href={empresa.reciboPago} target="_blank">Recibo de pago </a>
                                                </button>
                                                <button type="submit" className="btn btn-editar btn-comprobante" >
                                                    <a href={empresa.presupuesto} target="_blank">Presupuesto</a>
                                                </button>
                                                <button type="submit" className="btn btn-ir btn-comprobante" >
                                                    <a href={empresa.prestamosPagar} target="_blank">Prestamos a pagar </a>
                                                </button>
                                                <button type="submit" className="btn btn-ver btn-comprobante" >
                                                    <a href={empresa.remito} target="_blank">Remito </a>
                                                </button>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-ver btn-comprobante" >
                                                    <a href={empresa.prestamosCobrar} target="_blank">Prestamos a cobrar </a>
                                                </button>
                                                <button type="submit" className="btn btn-editar btn-comprobante" >
                                                    <a href={empresa.ordenPagoCobro} target="_blank">Orden de pagar / cobro </a>
                                                </button>
                                                <button type="submit" className="btn btn-ir btn-comprobante" >
                                                    <a href={empresa.pagare} target="_blank">Pagare </a>
                                                </button>
                                                <button type="submit" className="btn btn-ver btn-comprobante" >
                                                    <a href={empresa.hojaMembretada} target="_blank">Hoja membretada </a>
                                                </button>
                                                <button type="submit" className="btn btn-editar btn-comprobante" >
                                                    <a href={empresa.informe} target="_blank">Informe pdf </a>
                                                </button>
                                                <button type="submit" className="btn btn-ir btn-comprobante" >
                                                    <a href={empresa.informeDoc} target="_blank">Informe word </a>
                                                </button>
                                                {empresa.troquelado &&
                                                    <button type="submit" className="btn btn-ver btn-comprobante" >
                                                        <a href={empresa.troquelado} target="_blank">Troquelado </a>
                                                    </button>}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }): <h1>No hay comprobantes</h1>
            }
        </aside>
    )
}

export default BusquedaComprobante