import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import Global from '../../Helpers/Global';
import { PetitionFetchToken } from '../../Helpers/Peticion';

const FormularioInteraccion = () => {
  const [resultado, setResultado] = useState("no enviado");
  const [clientes, setClientes] = useState([]);

  const { formulario, cambiado } = useForm({
    clienteId: '',
    fechaInteraccion: '',
    tipo: '',
    descripcion: '',
    derivar: '',
    tiempoSolucion: '',
    responsable: '',
    seguimiento: '',
    accion: '',
    respuesta: '',
    fechaSeguimiento: '',
  });

  // Obtener listado de clientes al montar el componente
  useEffect(() => {
    const conseguirClientes = async () => {
      const { datos } = await PetitionFetchToken(Global.url + "clientes/listar", "GET", localStorage.getItem("token"));
    if (datos.status === "success") {
      setClientes(datos.clientes);
    }
    
    };

    conseguirClientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { datos } = await PetitionFetchToken(
      Global.url + "interaccion/crear",
      "POST",
      localStorage.getItem("token"),
      formulario
    );

    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      setResultado("error");
    }

    console.log(datos);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nueva Interacción</h2>

      <form onSubmit={handleSubmit}>
        {/* Cliente */}
        <div className="mb-3">
          <label>Cliente</label>
          <select
            className="form-control"
            name="clienteId"
            onChange={cambiado}
            value={formulario.clienteId}
            required
          >
            <option value="">-- Seleccionar Cliente --</option>
            {clientes.map(cliente => (
              <option key={cliente._id} value={cliente._id}>
                {cliente.nombre}
              </option>
            ))}
          </select>
        </div>


        {/* Fecha */}
        <div className="mb-3">
          <label>Fecha de Interacción</label>
          <input
            type="date"
            className="form-control"
            name="fechaInteraccion"
            onChange={cambiado}
            value={formulario.fechaInteraccion}
          />
        </div>

        {/* Tipo */}
        <div className="mb-3">
          <label>Tipo</label>
          <input
            type="text"
            className="form-control"
            name="tipo"
            onChange={cambiado}
            value={formulario.tipo}
          />
        </div>

        {/* Descripción */}
        <div className="mb-3">
          <label>Descripción</label>
          <textarea
            className="form-control"
            name="descripcion"
            onChange={cambiado}
            value={formulario.descripcion}
          ></textarea>
        </div>

        {/* Derivar */}
        <div className="mb-3">
          <label>Asignar a (Nombre de la Persona)</label>
          <input
            type="text"
            className="form-control"
            name="derivar"
            onChange={cambiado}
            value={formulario.derivar}
          />
        </div>

        {/* Tiempo de solución */}
        <div className="mb-3">
          <label>Tiempo de Solución</label>
          <input
            type="text"
            className="form-control"
            name="tiempoSolucion"
            onChange={cambiado}
            value={formulario.tiempoSolucion}
          />
        </div>

        {/* Responsable */}
        <div className="mb-3">
          <label>Responsable</label>
          <input
            type="text"
            className="form-control"
            name="responsable"
            onChange={cambiado}
            value={formulario.responsable}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>

      {resultado === "guardado" && (
        <div className="alert alert-success mt-3">Interacción guardada correctamente</div>
      )}
      {resultado === "error" && (
        <div className="alert alert-danger mt-3">Hubo un error al guardar la interacción</div>
      )}
    </div>
  );
};

export default FormularioInteraccion;
