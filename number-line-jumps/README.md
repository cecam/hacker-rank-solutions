# Problema de los Canguros

## Descripción del Problema

Estás coreografiando un espectáculo de circo con varios animales. Para un acto específico, se te dan dos canguros en una línea numérica listos para saltar en la dirección positiva (es decir, hacia el infinito positivo).

- El primer canguro comienza en la posición `x1` y se mueve a una velocidad de `v1` metros por salto.
- El segundo canguro comienza en la posición `x2` y se mueve a una velocidad de `v2` metros por salto.

Debes averiguar si hay una manera de hacer que ambos canguros lleguen a la misma ubicación al mismo tiempo como parte del espectáculo. Si es posible, devuelve "YES", de lo contrario, devuelve "NO".

### Ejemplo

- Entrada:
  - `x1 = 2`, `v1 = 1`
  - `x2 = 1`, `v2 = 2`
- Salida: "YES"

Después de un salto, ambos canguros estarán en la posición `x = 3` (`x1 + v1 = 2 + 1 = 3`, `x2 + v2 = 1 + 2 = 3`), por lo que la respuesta es "YES".

## Función

La función `kangaroo` se describe de la siguiente manera:

```javascript
function kangaroo(x1, v1, x2, v2) {
  const firstIsFar = x1 > x2 && v1 > v2;
  const secondIsFar = x2 > x1 && v2 > v1;
  if (firstIsFar || secondIsFar) return "NO";

  if (v1 === v2) {
    return x1 === x2 ? "YES" : "NO";
  } else {
    if ((x1 - x2) % (v2 - v1) === 0 && (x1 - x2) / (v2 - v1) >= 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
}
```

### Explicación de la Función

1. **Condición Inicial de Descarte**:

   - `const firstIsFar = x1 > x2 && v1 > v2;`
   - `const secondIsFar = x2 > x1 && v2 > v1;`
   - Si el primer canguro empieza más adelante (`x1 > x2`) y su velocidad es mayor (`v1 > v2`), nunca se encontrarán porque el primer canguro siempre estará más adelante.
   - De igual manera, si el segundo canguro empieza más adelante (`x2 > x1`) y su velocidad es mayor (`v2 > v1`), nunca se encontrarán.
   - Si cualquiera de estas condiciones es verdadera, la función devuelve "NO".

2. **Verificación de Velocidades Iguales**:

   - `if(v1 === v2) {`
   - Si las velocidades `v1` y `v2` son iguales, los canguros solo se encontrarán si empiezan en la misma posición (`x1 === x2`).
   - Si están en la misma posición, devuelve "YES", de lo contrario, devuelve "NO".

3. **Cálculo para Diferentes Velocidades**:
   - `if((x1 - x2) % (v2 - v1) === 0 && (x1 - x2) / (v2 - v1) >= 0) {`
   - Si las velocidades son diferentes, comprobamos si la diferencia en las posiciones iniciales (`x1 - x2`) es divisible por la diferencia en las velocidades (`v2 - v1`).
   - Esto es necesario porque el número de saltos `n` debe ser un número entero:
     \[ n = \frac{x1 - x2}{v2 - v1} \]
   - Además, `n` debe ser un número positivo (`(x1 - x2) / (v2 - v1) >= 0`), lo que significa que los canguros se encontrarán en el futuro.
   - Si ambas condiciones se cumplen, devuelve "YES". De lo contrario, devuelve "NO".

### Ejemplos Adicionales

- **Ejemplo 1**:

  - Entrada: `x1 = 0, v1 = 3, x2 = 4, v2 = 2`
  - Salida: "YES"
  - Después de 4 saltos, ambos canguros estarán en la posición `x = 12` (`x1 + 4*v1 = 0 + 4*3 = 12`, `x2 + 4*v2 = 4 + 4*2 = 12`).

- **Ejemplo 2**:
  - Entrada: `x1 = 0, v1 = 2, x2 = 5, v2 = 3`
  - Salida: "NO"
  - No importa cuántos saltos den, el canguro 2 siempre estará más adelante que el canguro 1.
