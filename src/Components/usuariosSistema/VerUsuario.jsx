import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Global from '../../Helpers/Global';
import { PetitionFetchToken } from '../../Helpers/Peticion';


export const VerUsuario = () => {

    const [usuario, setUsuario] = useState({});
    const params = useParams();

    useEffect(() => {
        conseguirUsuarios();
    }, []);

    const conseguirUsuarios = async () => {
        const { datos } = await PetitionFetchToken(Global.url + "user/profile/" + params.id, "GET", localStorage.getItem("token"));

        if (datos.status === "success") {
            setUsuario(datos.user);
        }
    };

    return (
        <>
            <div> <h1>{typeof usuario.name === 'string' ? usuario.name.toUpperCase() : usuario.name}</h1></div>
            <table className="table table-striped empresas">
                <thead>
                    <tr>
                        <th className="col-md-4" scope="col">Sitio</th>
                        <th className="col-md-4" scope="col">Usuario</th>
                        <th className="col-md-4" scope="col">Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{usuario.email}</td>
                        <td>{usuario.password}</td>
                    </tr>
                   
                    <tr>
                        <th scope="row">Permiso</th>
                        <td>{usuario.role}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}