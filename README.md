# ruc-paraguay


```ts
// Ejemplos de uso
function ejemplos() {
    // Ejemplo 1: Calcular el dígito verificador
    const rucSinDigito = "80028061";
    const digitoVerificador = calcularDigitoVerificadorRUC(rucSinDigito);
    console.log(`El dígito verificador para el RUC ${rucSinDigito} es: ${digitoVerificador}`);
    
    // Ejemplo 2: Validar un RUC completo
    const rucCompleto = "80028061-3";
    const esValido = validarRUC(rucCompleto);
    console.log(`El RUC ${rucCompleto} es ${esValido ? 'válido' : 'inválido'}`);
}

// Ejecutar ejemplos
ejemplos();

```