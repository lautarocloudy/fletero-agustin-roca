import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import Global from '../../Helpers/Global';

export const CrearManual = () => {

    const { formulario, enviado, cambiado } = useForm({});
    const [resultado, setResultado] = useState("no enviado")
    const [biblioteca, setBiblioteca] = useState("guardar");


    const guardarMactred = async () => {

        let nuevoUsuario = formulario;

        const { datos } = await PetitionFetchToken(Global.url + "manual/crear", "POST", localStorage.getItem("token"), nuevoUsuario);
        if (datos.status === "success") {
            setResultado("guardado");
        } else {
            if (datos.message === 'el usuario ya existe') {
                setResultado("existe")
            } else {
                setResultado("error");
            }
        }
    }

    const guardarArchivo = async (e) => {
        e.preventDefault()

        const fileInput = document.querySelector("#customFile");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: file.name + Date.now(), type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbzL3ojNcQi6GJdFO1ZdK5FkfUUJB5-dB_rmGjZTc3cIJHbd2Yq7ed1AY9VOxpC77yYq/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.archivoPdf = a.url;
                    //  editarusuario();
                    guardarArchivoDoc();
                }).catch(e => setGuardar("error")) // Or Error in console
        }
    }

    const guardarArchivoDoc = async (e) => {

        const fileInput = document.querySelector("#customFile1");
        var file = fileInput.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(fileInput.files[0]) //start conversion...
        reader.onload = async function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: file.name + Date.now(), type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            await fetch('https://script.google.com/macros/s/AKfycbzDn2RuSSwCqjYW8U3lVIuq8b-j-49wSFy5XmUEdMTkXixcn27FkozgYuBb6yXCqys/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    formulario.archivoDoc = a.url;
                    //  editarusuario();
                    guardarMactred()
                }).catch(e => setGuardar("error")) // Or Error in console
        }
    }

    const guardarEmitidas = () => {
        setBiblioteca("guardar")
    }
    const verEmitidas = () => {
        setBiblioteca("ver")
    }

    return (
        <>
            {/* <input type="submit" value="Guardar " className='btn btn-ver' onClick={guardarEmitidas} />
            <input type="submit" value="Ver" className='btn btn-editar' onClick={verEmitidas} /> */}

            {/* { */}
            {/* // biblioteca == "guardar" && ( */}
            <div className='jumbo'>
                <h1>Cargar manuales</h1>
                <strong>{resultado == "guardado" ? "Se ha registrado el manual" : ""}</strong>
                <strong>{resultado == "error" ? "No se pudo registrar el manual" : ""}</strong>
                <strong>{resultado == "existe" ? "El manual ya esta en la base de datos" : ""}</strong>
                <br /><br />
                <form className="formulario" onSubmit={guardarArchivo} >

                    <div className="form-group">
                        <label htmlFor='titulo'>Categoria</label>
                        <input type="text" name='categoria' onChange={cambiado} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor='titulo'>Sub Categoria</label>
                        <input type="text" name='subCategoria' onChange={cambiado} maxLength='100' />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor='titulo'>Tramite</label>
                        <input type="text" name='tramite' onChange={cambiado} maxLength='100' />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor='titulo'>Detalle</label>
                        <br />
                        <textarea type="text" name='detalle' onChange={cambiado} />
                    </div>
                    <br />
                    {/* <p>Cargue el archivo de word</p>
                            <input type="file" accept="application/docx" id="customFile1" />
                            <br /> */}
                    <p>Cargue el manual en pdf</p>
                    <input type="file" accept="application/pdf" id="customFile" />
                    <br />

                    <input type="submit" value="Guardar" className='btn btn-success' />
                </form>

            </div>
            )
            {/* }
                {
                biblioteca == "ver" && <ListadoBiblioteca/>
            } */}
        </>
    )
}
