function validarPassword(password, usernameOpcional) {
  const errores = [];

  if (password.length < 8) {
    errores.push("Debe tener al menos 8 caracteres");
  }

  if (password === password.toLowerCase()) {
  errores.push("Debe contener al menos una mayuscula");
}

  if (password === password.toUpperCase()) {
    errores.push("Debe contener al menos una minuscula");
  }

  if (!password.split("").some(c => c >= "0" && c <= "9")) {
    errores.push("Debe contener al menos un numero");
  }

  const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const tieneSimbolos = password.split("").some(c => simbolos.includes(c));

  if (!tieneSimbolos) {
    errores.push("Debe contener al menos un simbolo especial");
  }

  if (password.includes(" ")) {
    errores.push("No debe contener espacios");
  }

  return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };