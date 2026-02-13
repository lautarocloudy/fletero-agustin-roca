import React, { useState, useEffect } from 'react';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import Global from '../../Helpers/Global';

const ModalPago = ({ clienteId, closeModal }) => {
  const [pago, setPago] = useState(false);

  // Al montar el modal, obtén el estado de pago actual del cliente
 useEffect(() => {
  const conseguirClientes = async () => {
    const { datos } = await PetitionFetchToken(
      `${Global.url}clientes/clientes/${clienteId}`,
      "GET",
      localStorage.getItem("token")
    );

    console.log(datos); // Agrega este log para ver la respuesta completa

    if (datos.status === 'success') {
      setPago(datos.cliente.pago === 1); // Asegúrate de que 'datos.cliente.pago' sea correcto
    } else {
      alert('Error al cargar el estado de pago');
    }
  };

  conseguirClientes();
}, [clienteId]);

  const actualizarPago = async () => {
    const payload = { pago: pago ? 1 : 0 };
    const { datos } = await PetitionFetchToken(
      `${Global.url}clientes/editar-clientes/${clienteId}`,
      "PUT",
      localStorage.getItem("token"),
      payload
    );

    if (datos.status === 'success') {
      alert('Pago actualizado con éxito');
      closeModal();
    } else {
      alert('Error al actualizar el pago');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Actualizar Estado de Pago</h3>
        <select value={pago} onChange={(e) => setPago(e.target.value === 'true')}>
          <option value={true}>Pagado</option>
          <option value={false}>No Pagado</option>
        </select>
        <button onClick={actualizarPago}>Guardar</button>
        <button onClick={closeModal}>Cancelar</button>
      </div>
    </div>
  );
};

export default ModalPago;
