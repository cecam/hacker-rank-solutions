# Problema de los Factores

### Descripción del problema:

Tienes dos arreglos de enteros, llamados `a` y `b`. Tu tarea es encontrar todos los números enteros que cumplan con las siguientes dos condiciones:

1. Todos los elementos del primer arreglo `a` deben ser factores del número entero que estamos considerando.
2. El número entero que estamos considerando debe ser un factor de todos los elementos del segundo arreglo `b`.

En otras palabras, debes encontrar todos los números enteros que están "entre" los dos arreglos en el sentido matemático de los factores.

### Ejemplo:

Dado el siguiente ejemplo en el problema:

- `a = [2, 6]`
- `b = [24, 36]`

Debes encontrar los números que:

1. Son divisibles por 2 y por 6 (es decir, 2 y 6 son factores del número).
2. Dividen exactamente a 24 y a 36 (es decir, el número es factor de 24 y 36).

Los números que cumplen estas condiciones son 6 y 12:

- 6 es divisible por 2 y por 6, y divide exactamente a 24 y 36.
- 12 es divisible por 2 y por 6, y divide exactamente a 24 y 36.

Por lo tanto, la función debería retornar 2, ya que hay dos números que cumplen las condiciones.

### Descripción de la función:

Debes completar la función `getTotalX` que tiene los siguientes parámetros:

- `int a[n]`: un arreglo de enteros
- `int b[m]`: otro arreglo de enteros

La función debe retornar:

- `int`: el número de enteros que están entre los dos arreglos (cumpliendo las condiciones mencionadas).

### Paso a paso para resolver el problema:

1. **Encontrar los múltiplos comunes de los elementos en `a`**: Busca los números que son divisibles por todos los elementos en `a`.
2. **Encontrar los divisores comunes de los elementos en `b`**: Verifica cuáles de los números encontrados en el paso 1 son divisores de todos los elementos en `b`.
3. **Contar los números que cumplen ambas condiciones**: Cuenta cuántos números cumplen tanto con ser múltiplos de `a` como divisores de `b`.

### Implementación:

```javascript
function getTotalX(a, b) {
  const gcd = (x, y) => {
    while (y) {
      [x, y] = [y, x % y];
    }
    return x;
  };

  const lcm = (x, y) => {
    return (x * y) / gcd(x, y);
  };

  let lcm_a = a[0];
  for (let i = 1; i < a.length; i++) {
    lcm_a = lcm(lcm_a, a[i]);
  }

  let gcd_b = b[0];
  for (let i = 1; i < b.length; i++) {
    gcd_b = gcd(gcd_b, b[i]);
  }

  let count = 0;
  let multiple = lcm_a;
  while (multiple <= gcd_b) {
    if (gcd_b % multiple === 0) {
      count++;
    }
    multiple += lcm_a;
  }

  return count;
}
```

Este código primero calcula el mínimo común múltiplo (LCM) de los elementos en `a` y el máximo común divisor (GCD) de los elementos en `b`. Luego, verifica cuántos múltiplos del LCM de `a` son divisores del GCD de `b`.
