# IA_REPORTE – Trabajo Práctico Validador de Contraseñas

## Datos del estudiante
- Nombre y apellido: Melina Troncoso Leal
- Fecha: 29/04/2026
- Curso/Grupo: Programación orientada a objetos 2

---

## 1) Declaración de uso de IA

- [x] Sí utilicé herramientas de IA generativa para producir o sugerir código en este trabajo.

---

## 2) Herramientas utilizadas

- Herramienta(s): Claude (Anthropic)
- Versión/modelo: Claude Sonnet 4.6
- Uso principal: Ayuda para entender conceptos y resolver pequeños bugs que me costó detectar

---

## 3) Prompts principales utilizados

### Prompt 1
- Objetivo: Entender cómo arrancar el proyecto con Jest
- Texto del prompt: "explicame paso a paso como deberia hacer un tdd correctamente"
- Resumen de la respuesta: Explicó cómo inicializar el proyecto con npm, instalar Jest y ejecutar un test correctamente

### Prompt 2
- Objetivo: Solucion de bugs en la funcion de 3 caracteres consecutivos
- Texto del prompt: Me falla el test de 3 caracteres consecutivos y me tira un error, ayudame a solucionarlo
- Resumen de la respuesta: Me dijo que sacara las ñ o tildes porque podían generar un problema

---

## 4) Errores detectados en sugerencias de IA

### Error detectado 1
- Sugerencia de IA: Usar  "Aaab123!" como caso de prueba para 3 caracteres iguales consecutivos
- ¿Qué problema tenía?: A mayúscula y a minúscula no son el mismo carácter, entonces el test pasaba cuando debería fallar
- Test que evidencia el error: "validarPassword("Aaab123!")" retornaba "esValida: true" en lugar de "false"
- Corrección aplicada: Cambiar el caso de prueba a ""Abbb123!"" que sí tiene 3 caracteres iguales consecutivos

### Error detectado 2
- Sugerencia de IA: Los mensajes de error originales tenían tildes ("mayúscula", "número", "símbolo")
- ¿Qué problema tenía?: El ciclo 15 fallaba porque el test usaba tildes pero el código no, generando inconsistencia
- Test que evidencia el error: "expect(resultado.errores).toContain("Debe contener al menos una mayúscula")" fallaba porque el mensaje en el código era ""mayuscula""
- Corrección aplicada: Unificar todos los mensajes sin tildes tanto en el código como en los tests

---

## 5) Impacto en el proceso TDD

- ¿La IA ayudó a iterar mejor o peor? También fue útil para entender cada línea de código preguntando qué significaba cada parte.
- ¿En qué parte interfirió con la granularidad? Sugirió usar regex que no entendía para solucionar un bug, por lo que tuve que pedirle que lo haga sin regex aunque fuera más largo.
- ¿Qué decisión fue distinta a la recomendada? Decidí corregir las funciones usando regex, reemplazándolas por lógica explícita más legible, en contra de la sugerencia inicial de la IA.


## 6) Conclusión personal

Usar IA como guía en TDD puede ser útil para no bloquearse, pero hay que entender cada línea antes de escribirla. En este trabajo detecté dos errores concretos en las sugerencias de la IA, lo cual demuestra que la herramienta no reemplaza el criterio propio. El valor del TDD está en pensar el test antes que el código, y eso requiere comprensión real del problema.