function validarPassword(password, usernameOpcional) {
  const errores = [];

  if (password.length < 8) {
    errores.push("Debe tener al menos 8 caracteres");
  }

  if (password === password.toLowerCase()) {
  errores.push("Debe contener al menos una mayuscula");
}

  return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };