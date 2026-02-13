import React from "react";
import { NavLink } from "react-router-dom";
const NavPriv = () => {
  return (
    <>
      <nav className="custom-nav">
        <ul className="cont-ul">
          {/* <li className="develop">
            <li className="front">
              Usuarios
              <ul className="ul-third">
                <li className="back"><NavLink to="/social/cargar-persona">Cargar  </NavLink></li>
                <li className="back"><NavLink to="/social/lista-persona">Ver  </NavLink></li>
              </ul>
            </li>
          </li> */}
          <li className="develop">
            <li className="front">
              Formularios
              <ul className="ul-third">
                <li className="back"><NavLink to="/social/ver-comprobantes">Ver formularios </NavLink></li>
              </ul>
            </li>
          </li>
          <li className="develop">
            <li className="front">

              {/* <ul className="ul-third"> */}
              <li className="back"><NavLink to="/social/crear-cliente">Clientes </NavLink></li>
              {/* </ul> */}
            </li>
          </li>
          <li className="develop">
            <li className="front">
              Interacciones
              <ul className="ul-third">
              <li className="back"><NavLink to="/social/interaccion/crear">Crear </NavLink></li>
                <li className="back"><NavLink to="/social/interaccion/ver">Ver </NavLink></li>
              </ul>
            </li>
          </li>
          <li className="develop">
            <li className="front">

              {/* <ul className="ul-third"> */}
<li className="back">
  <a href="https://smart-ceo-gestion.netlify.app/" target="_blank" rel="noopener noreferrer">
    Sistema de gestión
  </a>
</li>              {/* </ul> */}
            </li>
          </li>
          <li className="develop">
            <NavLink aria-current="page" to="/social/salir">Salir</NavLink>
          </li>
        </ul>

      </nav>

    </>
  );
};

export default NavPriv;
