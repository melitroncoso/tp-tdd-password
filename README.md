# TP TDD – Validador de Contraseñas

## Instalación

npm install

## Ejecutar tests

npm test

## Ver cobertura

npm test -- --coverage


## Decisiones de diseño

- La función retorna siempre un objeto "{ esValida, errores }".
- Se acumulan todos los errores, no se detiene en el primero.
- El parámetro "usernameOpcional" es opcional; si no se pasa, esa regla no se evalúa.
- Se evitó el uso de expresiones regulares para mayor legibilidad.
- Para detectar mayúsculas se compara la password con "toLowerCase()".
- Para detectar minúsculas se compara la password con "toUpperCase()".
- Para detectar números se recorre el string comparando rangos de caracteres.
- Para detectar 3 caracteres consecutivos se usa un loop comparando posiciones.

## Supuestos

- Se considera símbolo especial cualquier carácter dentro de: "!@#$%^&*()_+-=[]{}|;:,.<>?"
- Los espacios se consideran inválidos en cualquier posición.
- Los mensajes de error no usan tildes para evitar problemas de codificación.
