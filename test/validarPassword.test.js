const { validarPassword } = require("../src/validarPassword");

test("C1 - contrasenia corta retorna error de longitud", () => {
  const resultado = validarPassword("Ab1!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("Debe tener al menos 8 caracteres");
});

test("C2 - sin mayúscula retorna error", () => {
  const resultado = validarPassword("abc1234!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("Debe contener al menos una mayuscula");
});

test("C3 - sin minuscula retorna error", () => {
  const resultado = validarPassword("ABC1234!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("Debe contener al menos una minuscula");
});

test("C4 - sin numero retorna error", () => {
  const resultado = validarPassword("Abcdefg!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("Debe contener al menos un numero");
});

test("C5 - sin simbolo especial retorna error", () => {
  const resultado = validarPassword("Abcdef1g");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("Debe contener al menos un simbolo especial");
});

test("C6 - con espacio retorna error", () => {
  const resultado = validarPassword("Abc 123!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("No debe contener espacios");
});

test("C7 - contrasenia valida retorna esValida true", () => {
  const resultado = validarPassword("Abc1234!");
  expect(resultado.esValida).toBe(true);
  expect(resultado.errores).toHaveLength(0);
});

test("C8 - password contiene username retorna error", () => {
  const resultado = validarPassword("Abc1234!juan", "juan");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("No debe contener el nombre de usuario");
});

test("C9 - password contiene username en mayusculas retorna error", () => {
  const resultado = validarPassword("Abc1234!JUAN", "juan");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("No debe contener el nombre de usuario");
});

test("C10 - sin username no valida esa regla", () => {
  const resultado = validarPassword("Abc1234!");
  expect(resultado.esValida).toBe(true);
  expect(resultado.errores).not.toContain("No debe contener el nombre de usuario");
});

test("C11 - tres caracteres iguales consecutivos retorna error", () => {
  const resultado = validarPassword("Aaaab123!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("No debe contener 3 caracteres iguales consecutivos");
});

test("C12 - tres numeros iguales consecutivos retorna error", () => {
  const resultado = validarPassword("Abc111!!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("No debe contener 3 caracteres iguales consecutivos");
});

test("C13 - tres símbolos iguales consecutivos retorna error", () => {
  const resultado = validarPassword("Abc123!!!");
  expect(resultado.esValida).toBe(false);
  expect(resultado.errores).toContain("No debe contener 3 caracteres iguales consecutivos");
});

test("C14 - dos caracteres iguales consecutivos es válido", () => {
  const resultado = validarPassword("Abbc123!");
  expect(resultado.esValida).toBe(true);
  expect(resultado.errores).not.toContain("No debe contener 3 caracteres iguales consecutivos");
});