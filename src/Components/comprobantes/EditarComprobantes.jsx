import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import Global from '../../Helpers/Global';

export const EditarComprobantes = () => {

    const { formulario, enviado, cambiado } = useForm({});
    const [resultado, setResultado] = useState("no enviado");
    const [comprobante, setComprobante] = useState({});
    const params = useParams();

    useEffect(() => {
        conseguirComprobante();
    }, []);


    const conseguirComprobante = async (e) => {
        const { datos } = await PetitionFetchToken(Global.url + "comprobantes/comprobante-uno/" + params.id, "GET", localStorage.getItem("token"));

        if (datos.status === "success") {
            setComprobante(datos.comprobante);
        }
    }

    const guardarComprobantes = async (e) => {

        let nuevaEmpresa = formulario;

        const { datos } = await PetitionFetchToken(Global.url + "editar-comprobantes/" + params.id, "PUT", localStorage.getItem("token"), nuevaEmpresa);
        if (datos.status === "success") {
            setResultado("guardado");
        } else {
            setResultado("error");
        }
    }

    const guardarArchivos = async (e) => {
        e.preventDefault()
        if (document.querySelector("#facturaVentas").files[0]) {
            FacturaVenta();

        } else if (document.querySelector("#facturaCompras").files[0]) {
            FacturaCompras();
        } else if (document.querySelector("#reciboCobro").files[0]) {
            ReciboCobro();
        } else if (document.querySelector("#reciboPago").files[0]) {
            ReciboPago();
        } else if (document.querySelector("#presupuesto").files[0]) {
            Presupuesto();
        } else if (document.querySelector("#prestamosPagar").files[0]) {
            PrestamosPagar();
        } else if (document.querySelector("#prestamosCobrar").files[0]) {
            PrestamosCobrar();
        } else if (document.querySelector("#ordenPagoCobro").files[0]) {
            OrdenPago();
        } else if (document.querySelector("#pagare").files[0]) {
            Pagare();
        } else {
            guardarComprobantes();
        }
    }

    const FacturaVenta = async (e) => {

        const fileInput = document.querySelector("#facturaVentas");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.facturaVentas = a.url;
                    //  editarusuario();
                    if (document.querySelector("#facturaCompras").files[0]) {
                        FacturaCompras();
                    } else if (document.querySelector("#reciboCobro").files[0]) {
                        ReciboCobro();
                    } else if (document.querySelector("#reciboPago").files[0]) {
                        ReciboPago();
                    } else if (document.querySelector("#presupuesto").files[0]) {
                        Presupuesto();
                    } else if (document.querySelector("#prestamosPagar").files[0]) {
                        PrestamosPagar();
                    } else if (document.querySelector("#prestamosCobrar").files[0]) {
                        PrestamosCobrar();
                    } else if (document.querySelector("#ordenPagoCobro").files[0]) {
                        OrdenPago();
                    } else if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }

    const FacturaCompras = async (e) => {

        const fileInput = document.querySelector("#facturaCompras");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.facturaCompras = a.url;
                    //  editarusuario();
                    if (document.querySelector("#reciboCobro").files[0]) {
                        ReciboCobro();
                    } else if (document.querySelector("#reciboPago").files[0]) {
                        ReciboPago();
                    } else if (document.querySelector("#presupuesto").files[0]) {
                        Presupuesto();
                    } else if (document.querySelector("#prestamosPagar").files[0]) {
                        PrestamosPagar();
                    } else if (document.querySelector("#prestamosCobrar").files[0]) {
                        PrestamosCobrar();
                    } else if (document.querySelector("#ordenPagoCobro").files[0]) {
                        OrdenPago();
                    } else if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }

    const ReciboCobro = async (e) => {

        const fileInput = document.querySelector("#reciboCobro");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.reciboCobro = a.url;
                    //  editarusuario();
                    if (document.querySelector("#reciboPago").files[0]) {
                        ReciboPago();
                    } else if (document.querySelector("#presupuesto").files[0]) {
                        Presupuesto();
                    } else if (document.querySelector("#prestamosPagar").files[0]) {
                        PrestamosPagar();
                    } else if (document.querySelector("#prestamosCobrar").files[0]) {
                        PrestamosCobrar();
                    } else if (document.querySelector("#ordenPagoCobro").files[0]) {
                        OrdenPago();
                    } else if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }

    const ReciboPago = async (e) => {

        const fileInput = document.querySelector("#reciboPago");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.reciboPago = a.url;
                    //  editarusuario();
                    if (document.querySelector("#presupuesto").files[0]) {
                        Presupuesto();
                    } else if (document.querySelector("#prestamosPagar").files[0]) {
                        PrestamosPagar();
                    } else if (document.querySelector("#prestamosCobrar").files[0]) {
                        PrestamosCobrar();
                    } else if (document.querySelector("#ordenPagoCobro").files[0]) {
                        OrdenPago();
                    } else if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }

    const Presupuesto = async (e) => {

        const fileInput = document.querySelector("#presupuesto");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.presupuesto = a.url;
                    //  editarusuario();
                    if (document.querySelector("#prestamosPagar").files[0]) {
                        PrestamosPagar();
                    } else if (document.querySelector("#prestamosCobrar").files[0]) {
                        PrestamosCobrar();
                    } else if (document.querySelector("#ordenPagoCobro").files[0]) {
                        OrdenPago();
                    } else if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }
    const PrestamosPagar = async (e) => {

        const fileInput = document.querySelector("#prestamosPagar");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.prestamosPagar = a.url;
                    //  editarusuario();
                    if (document.querySelector("#prestamosCobrar").files[0]) {
                        PrestamosCobrar();
                    } else if (document.querySelector("#ordenPagoCobro").files[0]) {
                        OrdenPago();
                    } else if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }
    const PrestamosCobrar = async (e) => {

        const fileInput = document.querySelector("#prestamosCobrar");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.prestamosCobrar = a.url;
                    //  editarusuario();
                    if (document.querySelector("#ordenPagoCobro").files[0]) {
                        OrdenPago();
                    } else if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }
    const OrdenPago = async (e) => {

        const fileInput = document.querySelector("#ordenPagoCobro");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: Date.now() + file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.ordenPagoCobro = a.url;
                    //  editarusuario();
                    if (document.querySelector("#pagare").files[0]) {
                        Pagare();
                    } else {
                        guardarComprobantes();
                    }
                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }

    const Pagare = async (e) => {

        const fileInput = document.querySelector("#ordenPago");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: file.name + Date.now(), type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbwCOOAfd_E3o7lJYMF8Xww5mqu2W3KED8Z0Cb2Hf25cPGSyCNjwImlkGm0kGmrRZ4iR/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.ordenPago = a.url;
                    //  editarusuario();
                    guardarComprobantes();

                }).catch(e => alert("no se pudo guardar")) // Or Error in console
        }
    }


    return (
        <div className='jumbo'>
            <h1>Cargar comprobantes</h1>

            <br /><br />
            <form className="formulario" onSubmit={guardarArchivos} >

                <div className="form-group">
                    <label htmlFor='titulo'>Empresa</label>
                    <input type="text" name='nombreEmpresa' onChange={cambiado} value={comprobante.nombreEmpresa} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Factura de ventas</label>
                    <br />
                    <input type="file" accept="application/pdf" id="facturaVentas" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Factura de compras</label>
                    <br />
                    <input type="file" accept="application/pdf" id="facturaCompras" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Recibo de cobro</label>
                    <br />
                    <input type="file" accept="application/pdf" id="reciboCobro" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Recibo de pago</label>
                    <br />
                    <input type="file" accept="application/pdf" id="reciboPago" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Presupuesto</label>
                    <br />
                    <input type="file" accept="application/pdf" id="presupuesto" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Prestamos a pagar</label>
                    <br />
                    <input type="file" accept="application/pdf" id="prestamosPagar" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Prestamos a cobrar</label>
                    <br />
                    <input type="file" accept="application/pdf" id="prestamosCobrar" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Orden de pago/cobro</label>
                    <br />
                    <input type="file" accept="application/pdf" id="ordenPagoCobro" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='titulo'>Pagare</label>
                    <br />
                    <input type="file" accept="application/pdf" id="pagare" />
                </div>
                <input type="submit" value="Guardar" className='btn btn-success' />
            </form>

            <br />
            <strong>{resultado == "guardado" ? "La empresa se ha guardado con exito" : ""}</strong>
            <strong>{resultado == "error" ? "Falta cargar el nombre de la empresa" : ""}</strong>

        </div>
    )
}
