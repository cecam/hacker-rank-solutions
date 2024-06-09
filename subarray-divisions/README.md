# Problema: Compartir una Barra de Chocolate

Dos niños, Lily y Ron, quieren compartir una barra de chocolate. Cada uno de los cuadrados de la barra tiene un número entero.

Lily decide compartir un segmento contiguo de la barra seleccionado de tal manera que:

1. La longitud del segmento coincida con el mes de nacimiento de Ron.
2. La suma de los números en los cuadrados sea igual al día de nacimiento de Ron.

Determina cuántas formas hay de dividir la barra de chocolate.

## Ejemplo

```markdown
s = [2, 2, 1, 3, 2]
d = 4
m = 2
```

Lily quiere encontrar segmentos que sumen el día de nacimiento de Ron, `d = 4`, con una longitud que coincida con su mes de nacimiento, `m = 2`. En este caso, hay dos segmentos que cumplen con los criterios: `[2, 2]` y `[1, 3]`.

## Descripción de la Función

Completa la función `birthday` con los siguientes parámetros:

- `int s[n]`: los números en cada uno de los cuadrados de chocolate.
- `int d`: el día de nacimiento de Ron.
- `int m`: el mes de nacimiento de Ron.

## Retorno

- `int`: el número de formas en que se puede dividir la barra de chocolate.

## Solución en JavaScript

```javascript
function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let segmentSum = 0;
    for (let j = 0; j < m; j++) {
      segmentSum += s[i + j];
    }
    if (segmentSum === d) {
      count++;
    }
  }
  return count;
}

// Ejemplo de uso:
const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;
console.log(birthday(s, d, m)); // Output: 2
```

### Explicación del Código

1. **Función `birthday`**: Recibe tres parámetros: `s` (la lista de números en los cuadrados de chocolate), `d` (el día de nacimiento) y `m` (el mes de nacimiento).
2. **Contador `count`**: Inicializamos un contador para llevar la cuenta de los segmentos que cumplen con los requisitos.
3. **Bucle `for`**: Iteramos sobre el array `s` desde el índice `0` hasta `s.length - m`. El límite superior del rango asegura que los segmentos de longitud `m` no excedan los límites del array.
4. **Suma del segmento `segmentSum`**: Para cada índice `i`, sumamos los elementos del segmento `s[i:i + m]`.
5. **Condición `if`**: Comprobamos si la suma del segmento es igual a `d`. Si es así, incrementamos el contador.
6. **Retorno**: Finalmente, devolvemos el valor del contador, que es el número de segmentos que cumplen con los requisitos.

Este enfoque garantiza que todos los posibles segmentos de longitud `m` se consideran y se verifica su suma, proporcionando así la solución al problema.
