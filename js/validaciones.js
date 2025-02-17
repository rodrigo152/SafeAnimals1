// VALIDAMOS QUE EL NOMBRE TENGA AL MENOS DOS LETRAS INGRESADAS
const validarNombre = (usuario) => {
    return /^([a-z ñáéíóú]{2,60})$/i.test(usuario.trim());

}

// VALIDAMOS EL CORREO
const validarCorreo = (correo) => {
    return /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(correo.trim());
}

// VALIDAMOS LA CONTRASEÑA
const validarPassword = (password) => {
    return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password.trim());
}

