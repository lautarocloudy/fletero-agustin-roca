export const Peticion = async (url, metodo, datosGuardar = "", archivos = false) => {
  let cargando = true;
  let opciones = {
    method: metodo,
    credentials: 'include', // Incluir credenciales (cookies, encabezados de autenticación)
  };

  if (metodo == "POST" || metodo == "PUT") {
    if (archivos) {
      opciones.body = datosGuardar;
    } else {
      opciones.body = JSON.stringify(datosGuardar);
      opciones.headers = {
        "Content-Type": "application/json",
      };
    }
  }

  try {
    const peticion = await fetch(url, opciones);
    const datos = await peticion.json();
    cargando = false;
    return {
      datos,
      cargando
    };
  } catch (error) {
    console.error('Error en la petición:', error);
    cargando = false;
    return {
      datos: null,
      error,
      cargando
    };
  }
};

export const PetitionFetchToken = async (url, metodo, token, datosGuardar = "", archivos = false) => {
  let cargando = true;
  let opciones = {
    method: metodo,
    credentials: 'include', // Incluir credenciales (cookies, encabezados de autenticación)
    headers: {
      "Authorization": token,
    }
  };

  if (metodo == "POST" || metodo == "PUT") {
    if (archivos) {
      opciones.body = datosGuardar;
    } else {
      opciones.body = JSON.stringify(datosGuardar);
      opciones.headers["Content-Type"] = "application/json";
    }
  }

  try {
    const peticion = await fetch(url, opciones);
    const datos = await peticion.json();
    cargando = false;
    return {
      datos,
      cargando
    };
  } catch (error) {
    console.error('Error en la petición con token:', error);
    cargando = false;
    return {
      datos: null,
      error,
      cargando
    };
  }
};
