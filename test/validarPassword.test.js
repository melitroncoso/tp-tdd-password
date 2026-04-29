const { validarPassword } = require('../src/validarPassword');

test('C1 - contraseña corta retorna error de longitud', () => {
  const resultado = validarPassword('Ab1!');
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain('Debe tener al menos 8 caracteres');
});