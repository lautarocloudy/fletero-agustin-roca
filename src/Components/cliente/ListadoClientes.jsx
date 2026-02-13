import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Global from '../../Helpers/Global';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import useAuth from '../../hooks/useAuth';
import ModalPago from './ModalPago';

const ListadoClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentClienteId, setCurrentClienteId] = useState(null);
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    conseguirMactred();
  }, []);

  const conseguirMactred = async () => {
    const { datos } = await PetitionFetchToken(Global.url + "clientes/listar", "GET", localStorage.getItem("token"));
    if (datos.status === "success") {
      setClientes(datos.clientes);
    }
  };

  const Navegar = (url) => {
    if (auth.role === "admin") {
      navigate("/social/" + url);
    } else {
      navigate("/mactred/" + url);
    }
  };

  const openModalPago = (clienteId) => {
    setCurrentClienteId(clienteId);
    setShowModal(true);
  };

  const closeModalPago = () => {
    setShowModal(false);
    setCurrentClienteId(null);
    conseguirMactred(); // Refresca la lista para ver el cambio de estado
  };

  return (
    <aside className="lateral">
      <div className="container-listado">
        <div className="row">
          <div className="col-md-3"><h4 className='nombre-lista'>Empresa</h4></div>
          <div className="col-md-3"><h4 className='nombre-lista'>Teléfono</h4></div>
          <div className="col-md-3"><h4 className='nombre-lista'>Pago?</h4></div>
          <div className="col-md-3"><h4 className='nombre-lista'>Ver</h4></div>
        </div>
      </div>
      {clientes.length >= 1 ? (
        clientes.map((cliente) => (
          <div className="container-listado" key={cliente._id}>
            <div className="row">
              <div className="col-md-3"><p className='nombre-lista'>{cliente.empresa}</p></div>
              <div className="col-md-3"><p className='nombre-lista'>{cliente.telefono}</p></div>
              <div className="col-md-3"><p className='nombre-lista'>{cliente.pago === 1 ? 'Sí' : 'No'}</p></div>
              <div className="col-md-3">
                <button className="btn btn-ir" onClick={() => Navegar("ver-clientes/" + cliente._id)}>Ver más</button>
                <button className="btn btn-editar" onClick={() => Navegar("editar-clientes/" + cliente._id)}>Editar</button>
                <button className="btn btn-editar" onClick={() => openModalPago(cliente._id)}>Pago</button>
              </div>
            </div>
          </div>
        ))
      ) : <h1>No hay datos cargados</h1>}
      
      {showModal && <ModalPago clienteId={currentClienteId} closeModal={closeModalPago} />}
    </aside>
  );
};

export default ListadoClientes;
