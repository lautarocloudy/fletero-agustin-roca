import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { PublicLayout } from "../Components/empresa1/publictLayout";
import { Login } from "../Components/usuarios/login";
import { Logout } from "../Components/usuarios/Logout";
import { PrivateLayout } from "../Components/layout/PrivateLayout";

import { CrearComprobantes } from "../Components/comprobantes/crear";
import { EditarComprobantes } from "../Components/comprobantes/EditarComprobantes";
import VerComprobantes from "../Components/comprobantes/VerComprobantes";
import BusquedaComprobante from "../Components/comprobantes/BusquedaComprobante";
import { CrearClientes } from "../Components/cliente/CrearClientes";
import { EditarClientes } from "../Components/cliente/EditarClientes";
import { VerClientes } from "../Components/cliente/VerClientes";
import TablaInteracciones from "../Components/interacciones/VerInteracciones";
import FormularioInteraccion from "../Components/interacciones/CrearInteraccion";

export const Rutas = () => {
    return (
        <BrowserRouter>
            <AuthProvider>

                <section id="content" className="content">
                    <Routes>
                        <Route path='/' element={<PublicLayout />}>
                            <Route index element={<Login />} />
                            <Route path='login' element={<Login />} />
                        </Route>
                        <Route path='/social' element={<PrivateLayout />}>
                        <Route index element={<VerComprobantes />} />
                            <Route path="cargar-comprobantes" element={<CrearComprobantes />} />
                            <Route path="ver-comprobantes" element={<VerComprobantes />} />
                            <Route path="busqueda-comprobantes/:busqueda" element={<BusquedaComprobante />} />
                            <Route path="editar-comprobantes/:id" element={<EditarComprobantes />} />
                            <Route path="crear-cliente" element={<CrearClientes />} />
                            <Route path="editar-clientes/:id" element={<EditarClientes />} />
                            <Route path="ver-clientes/:id" element={<VerClientes />} />
                            <Route path="interaccion/ver" element={<TablaInteracciones />} />
                            <Route path="interaccion/crear" element={<FormularioInteraccion />} />
                            <Route path="salir" element={<Logout />} />
                        </Route>
                    
                        <Route path='*' element={
                            <>
                                <h1>Error 404</h1>
                                <Link to="/">Volver a inicio</Link>
                            </>

                        } />
                    </Routes>
                </section>
            </AuthProvider>
        </BrowserRouter>
    );
}