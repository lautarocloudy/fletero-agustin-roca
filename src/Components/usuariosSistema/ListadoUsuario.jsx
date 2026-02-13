import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Global from '../../Helpers/Global';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import useAuth from '../../hooks/useAuth';

const ListadoUsuario = () => {

    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();
    const { auth, loading } = useAuth();

    useEffect(() => {
        conseguirEmpresa();
    }, []);

    const conseguirEmpresa = async () => {
        const { datos, cargando } = await PetitionFetchToken(Global.url + "user/usuario", "GET", localStorage.getItem("token"));

        if (datos.status === "success") {
            setUsuarios(datos.usuario);
        }
    }

    const Navegar = (url) => {
        if (auth.role == "admin") {
            navigate("/social/" + url)
        } else {
            navigate("/paginas/" + url)
        }
    }

    const hacerBusqueda = (e) => {
        e.preventDefault();
        let miBusqueda = e.target.search_field.value;
        navegar("/social/buscar-paginas-web/" + miBusqueda, { replace: true });
    }

    return (
        <aside className="lateral">
            {/* <h1> Empresas </h1> */}
            {/* <form className='form-Buscar' onSubmit={hacerBusqueda}>
            <div className=' busqueda-input'>
                    <input className='input-buscar' type="text" name='search_field' placeholder='Empresas' /> 
                    </div>
                    <div className=' busqueda-boton'>
                    <button className='button-buscar' type="submit" id="search" src={lupa}  ><img src={lupa} /></button>
                    </div>
                </form> */}
            {

                usuarios.length >= 1 ?
                    usuarios.map((usuario) => {
                        return (
                            <div className="container-listado" key={usuario._id}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className='nombre-lista'>{usuario.name.toUpperCase()} </p>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-ver" onClick={() => Navegar("ver-usuario/" + usuario._id)}>
                                            <Link>Info </Link>
                                        </button>
                                        <button type="submit" className="btn btn-editar" onClick={() => Navegar("editar-usuario/" + usuario._id)}>
                                            <Link>Editar </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <h1>No hay usaurios</h1>
            }
        </aside>
    )
}

export default ListadoUsuario