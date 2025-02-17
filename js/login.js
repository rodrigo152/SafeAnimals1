// REGISTRO DE USUARIOS

const registroUsuario = async () => {
    var nombre = document.querySelector("#nombre").value;
    var correo = document.querySelector("#correo").value;
    var password = document.querySelector("#password").value;

    if (correo.trim() === "" ||
        nombre.trim() === "" ||
        password.trim() === "") {

        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Debes ingresar datos",
            footer: "Safe Animals"
        })
        return;
    }

    if (!validarCorreo(correo)) {
        Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Por favor, ingresa un correo válido."
        })
        return;
    }

    if (!validarPassword(password)) {
        Swal.fire({
            icon: "error",
            title: "Contraseña inválida",
            text: "Por favor, ingresa una contraseña válida."
        })
        return;
    }

    if (!validarNombre(nombre)) {
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
            text: "Por favor, ingresa un nombre válid."
        })
        return;
    }


    const datos = new FormData();

    datos.append("nombre",nombre);
    datos.append("correo",correo);
    datos.append("password",password);

    var respuesta = await fetch("php/usuario/registro.php", {
        method: 'POST',
        body: datos
    });

    var resultado = await respuesta.json();

    if (resultado.success == true) {
        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: resultado.mensaje
        })

        document.querySelector("#formRegistro").reset();
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    } else {
        Swal.fire({
            icon: "error",
            title: "Error de conexión",
            text: resultado.mensaje
        })
    }
}


// INICIO DE SESIÓN

const loginUsuario = async () => {
    var correo = document.querySelector("#correo").value;
    var password = document.querySelector("#password").value;

    if (correo.trim() === "" ||
        password.trim() === "") {

        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Debes ingresar datos",
            footer: "Safe Animals"
        })
        return;
    }

    if (!validarCorreo(correo)) {
        Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Por favor, ingresa un correo válido."
        })
        return;
    }

    if (!validarPassword(password)) {
        Swal.fire({
            icon: "error",
            title: "Contraseña inválida",
            text: "Por favor, ingresa una contraseña válida."
        })
        return;
    }

    const datos = new FormData();
    datos.append("correo",correo);
    datos.append("password",password);

    var respuesta = await fetch("php/usuario/login.php", {
        method: 'POST',
        body: datos
    });

    var resultado = await respuesta.json();

    if (resultado.success == true) {
        Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: resultado.mensaje
        })

        document.querySelector("#formLogin").reset();
        setTimeout(() => {
            window.location.href = "adoption.html";
        }, 2000);
    } else {
        Swal.fire({
            icon: "error",
            title: "Error de conexión",
            text: resultado.mensaje
        })
    }
}