function validarPassword(password, usernameOpcional) {
  const errores = [];
  const SIMBOLOS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (password.length < 8)
    errores.push('Debe tener al menos 8 caracteres');

  if (password === password.toLowerCase())
    errores.push('Debe contener al menos una mayuscula');

  if (password === password.toUpperCase())
    errores.push('Debe contener al menos una minuscula');

  if (!password.split('').some(c => c >= '0' && c <= '9'))
    errores.push('Debe contener al menos un numero');

  if (!password.split('').some(c => SIMBOLOS.includes(c)))
    errores.push('Debe contener al menos un simbolo especial');

  if (password.includes(' '))
    errores.push('No debe contener espacios');

  if (usernameOpcional && password.toLowerCase().includes(usernameOpcional.toLowerCase()))
    errores.push('No debe contener el nombre de usuario');

  for (let i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      errores.push('No debe contener 3 caracteres iguales consecutivos');
      break;
    }
  }

  return { esValida: errores.length === 0, errores };
}

module.exports = { validarPassword };