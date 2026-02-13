import React, { useEffect } from 'react'
import { useState } from 'react'
import lupa from '../../assets/lupa.png'
import { PetitionFetchToken } from '../../Helpers/Peticion';
import Global from '../../Helpers/Global';


const ListadoManual = () => {

    const [mactreds, setMactreds] = useState([]);

    useEffect(() => {
        conseguirMactred();
        // conseguirPuesto();
    }, []);

    const conseguirMactred = async () => {
        const { datos, cargando } = await PetitionFetchToken(Global.url + "manual/listar", "GET", localStorage.getItem("token"));

        if (datos.status === "success") {
            setMactreds(datos.manual);
        }
    }

    const hacerBusqueda = async (e) => {
        e.preventDefault();
        let miBusqueda = document.getElementsByName('search_field')[0].value;

        if (miBusqueda.length >= 1) {
            const { datos, cargando } = await PetitionFetchToken(Global.url + "manual/buscar/" + miBusqueda, "GET", localStorage.getItem("token"));

            if (datos.status === "success") {
                setMactreds(datos.manual);
            } else {
                setMactreds('');
            }
        } else {
            conseguirMactred();
        }
    }

    return (
        <aside className="lateral">
            {/* <h1> Empresas </h1> */}
            <form className='form-Buscar' onSubmit={hacerBusqueda}>
                <div className=' busqueda-input'>
                    <input className='input-buscar' type="text" name='search_field' placeholder='busqueda por nombre o tema' />
                </div>
                <div className=' busqueda-boton'>
                    <button className='button-buscar' type="submit" id="search" src={lupa}  ><img src={lupa} /></button>
                </div>
            </form>

            <div className="container-listado" >
                <div className="row">
                    <div className="col-md-3">
                        <h4 className='nombre-lista'>Nombre del archivo </h4>
                    </div>
                    <div className="col-md-2">
                        <h4 className='nombre-lista'>Tema</h4>
                    </div>
                    <div className="col-md-5">
                        <h4 className='nombre-lista'>Descripcion</h4>
                    </div>
                    <div className="col-md-2">
                        <h4 className='nombre-lista'>Acción </h4>
                    </div>

                </div>
            </div>

            {
                mactreds.length >= 1 ?
                    mactreds.map((mactred) => {
                        return (

                            <div className="container-listado" key={mactred._id}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className='nombre-lista'>{mactred.nombreArchivo} </p>
                                    </div>
                                    <div className="col-md-2">
                                        <p className='nombre-lista'>{mactred.tema} </p>
                                    </div>
                                    <div className="col-md-5">
                                        <p className='nombre-lista'>{mactred.descripcionArchivo} </p>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="btn btn-editar">
                                            <a href={mactred.archivoDoc} target="_blank">Docx </a>
                                        </button>
                                        <button type="submit" className="btn btn-ir" >
                                            <a href={mactred.archivoPdf} target="_blank">PDF </a>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                    : <h1>No hay datos cargados</h1>
            }
        </aside>
    )
}

export default ListadoManual