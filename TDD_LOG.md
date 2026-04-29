# TDD_LOG – Trabajo Práctico Validador de Contraseñas

## Datos del estudiante
- Nombre y apellido: Melina Troncoso Leal
- Fecha: 29/04/2026
- Curso/Grupo: Programacion orientada a objetos 2


## Registro de ciclos TDD

| Ciclo | Test agregado | Evidencia Rojo | Cambio mínimo (Verde) | Refactor | Evidencia final |
|------:|---------------|----------------|-----------------------|----------|-----------------|
| 1 | Contraseña corta retorna error de longitud | "esValida" era "false" pero sin mensaje de error | Agregar "if (password.length < 8)" | No aplicó | 1 test en verde |
| 2 | Sin mayúscula retorna error | El mensaje no existía en errores | Agregar "if (password === password.toLowerCase())" | No aplicó | 2 tests en verde |
| 3 | Sin minúscula retorna error | El mensaje no existía en errores | Agregar "if (password === password.toUpperCase())" | No aplicó | 3 tests en verde |
| 4 | Sin número retorna error | El mensaje no existía en errores | Agregar recorrido con "c >= "0" && c <= "9" " | No aplicó | 4 tests en verde |
| 5 | Sin símbolo especial retorna error | El mensaje no existía en errores | Agregar constante "SIMBOLOS" y validar con ".some()" | No aplicó | 5 tests en verde |
| 6 | Con espacio retorna error | El mensaje no existía en errores | Agregar "password.includes(" ")" | No aplicó | 6 tests en verde |
| 7 | Contraseña válida retorna esValida true | Pasó directamente | Ninguno | No aplicó | 7 tests en verde |
| 8 | Password contiene username retorna error | La regla no existía | Agregar validación con ".toLowerCase().includes()" | No aplicó | 8 tests en verde |
| 9 | Username en mayúsculas también falla | Pasó directamente por el ".toLowerCase()" | Ninguno | No aplicó | 9 tests en verde |
| 10 | Sin username no valida esa regla | Pasó directamente | Ninguno | No aplicó | 10 tests en verde |
| 11 | Tres letras iguales consecutivas retorna error | La regla no existía, test inicial tenía bug con "Aaab123!" | Agregar loop comparando "password[i] === password[i+1] === password[i+2]" | No aplicó | 11 tests en verde |
| 12 | Tres números iguales consecutivos retorna error | Pasó directamente | Ninguno | No aplicó | 12 tests en verde |
| 13 | Tres símbolos iguales consecutivos retorna error | Pasó directamente | Ninguno | No aplicó | 13 tests en verde |
| 14 | Dos iguales consecutivos es válido | Pasó directamente | Ninguno | No aplicó | 14 tests en verde |
| 15 | Múltiples errores simultáneos | Falló por inconsistencia de tildes en mensajes | Unificar mensajes sin tildes en código y tests | No aplicó | 15 tests en verde |


## Reflexión breve final

1. ¿Qué regla resultó más compleja? La de 3 caracteres iguales consecutivos, porque el primer test tenía un bug: "Aaab123!" tiene A mayúscula y a minúscula, que no son iguales. Requirió corregir el caso de prueba.

2. ¿Cuándo reduje el tamaño de las iteraciones? Al implementar la regla del username, separando el caso básico (C8) del case insensitive (C9) en ciclos distintos.

3. ¿Qué refactor mejoró más la claridad? Eliminar la variable intermedia "tieneSimbolos" y mover el push de consecutivos dentro del loop directamente, reduciendo variables innecesarias.