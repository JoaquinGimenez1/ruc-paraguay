/**
 * Calcula el dígito verificador del RUC de Paraguay
 * @param ruc Número de RUC sin el dígito verificador
 * @returns El dígito verificador (número entre 0-9)
 */
export function calcularDigitoVerificadorRUC(ruc: string): number {
  // Eliminar cualquier caracter no numérico
  const rucLimpio = ruc.replace(/\D/g, "");

  if (rucLimpio.length === 0) {
    throw new Error("El RUC no puede estar vacío");
  }

  // Bases para el cálculo (del 2 al 9, y vuelve a empezar)
  const baseMultiplicadora = [2, 3, 4, 5, 6, 7, 8, 9];

  // Invertir la cadena del RUC para multiplicar de derecha a izquierda
  const rucInvertido = rucLimpio.split("").reverse();

  let suma = 0;

  // Multiplicar cada dígito por la base correspondiente
  for (let i = 0; i < rucInvertido.length; i++) {
    // Obtener la base multiplicadora (módulo para ciclar entre 2-9)
    const base = baseMultiplicadora[i % baseMultiplicadora.length]!;
    suma += parseInt(rucInvertido[i]!) * base;
  }

  // Cálculo del dígito verificador
  const resto = suma % 11;

  // Si el resto es 0, el dígito verificador es 0
  // Si el resto es 1, el dígito verificador es 1
  // Para cualquier otro caso, se resta 11 menos el resto
  return resto <= 1 ? resto : 11 - resto;
}

/**
 * Valida si un RUC completo (con dígito verificador) es válido
 * @param rucCompleto RUC completo con dígito verificador
 * @returns true si el RUC es válido, false en caso contrario
 */
export function validarRUC(rucCompleto: string): boolean {
  // Eliminar cualquier caracter no numérico
  const rucLimpio = rucCompleto.replace(/\D/g, "");

  if (rucLimpio.length <= 1) {
    return false;
  }

  // Separar el número base del dígito verificador
  const rucBase = rucLimpio.slice(0, -1);
  const digitoVerificador = parseInt(rucLimpio.slice(-1));

  // Calcular el dígito verificador esperado
  const digitoEsperado = calcularDigitoVerificadorRUC(rucBase);

  // Comparar con el dígito proporcionado
  return digitoVerificador === digitoEsperado;
}
