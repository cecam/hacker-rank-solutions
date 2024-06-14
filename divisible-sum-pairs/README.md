## Problema: Pairs Divisibles por \( k \)

Dado un arreglo de enteros y un entero positivo \( k \), determina el número de pares \((i, j)\) donde \( i < j \) y \( ar[i] + ar[j] \) es divisible por \( k \).

### Ejemplo

```markdown
ar = [1, 2, 3, 4, 5, 6]
k = 5
```

Tres pares cumplen con el criterio: \([1, 4]\), \([2, 3]\), y \([4, 6]\).

### Descripción de la Función

Completa la función `divisibleSumPairs` en el editor de abajo.

`divisibleSumPairs` tiene los siguientes parámetros:

- `int n`: la longitud del arreglo `ar`
- `int ar[n]`: un arreglo de enteros
- `int k`: el divisor entero

### Retorno

- `int`: el número de pares

### Formato de Entrada

La primera línea contiene 2 enteros separados por espacios, `n` y `k`.

La segunda línea contiene `n` enteros separados por espacios, cada valor de `ar[i]`.

### Formato de Salida

Un solo entero que representa el número de pares que cumplen con el criterio.

## Solución

Para resolver este problema, necesitas contar los pares \((i, j)\) tales que \( i < j \) y \( (ar[i] + ar[j]) \mod k == 0 \).

### Código JavaScript

```javascript
function divisibleSumPairs(n, k, ar) {
  let divisiblePair = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        divisiblePair++;
      }
    }
  }
  return divisiblePair;
}
```

### Explicación del Código

1. **Inicialización de Contador**: Se inicializa la variable `divisiblePair` en 0 para contar los pares que cumplen con el criterio.
2. **Bucle Externo**: Recorre cada elemento del arreglo con el índice `i`.
3. **Bucle Interno**: Recorre cada elemento del arreglo a partir del índice `i + 1` con el índice `j` para asegurar que \( i < j \).
4. **Condición de Divisibilidad**: Si la suma de `ar[i]` y `ar[j]` es divisible por `k`, se incrementa el contador `divisiblePair`.
5. **Retorno del Resultado**: Se devuelve el número total de pares que cumplen con el criterio.

Esta función debe ser llamada con los parámetros `n` (la longitud del arreglo), `k` (el divisor) y `ar` (el arreglo de enteros). El resultado será el número de pares que cumplen con la condición de divisibilidad.
