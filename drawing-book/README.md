# Problema: Mínimo Número de Páginas a Voltear en un Libro

## Descripción

Un profesor pide a los alumnos que abran sus libros en una página específica. Un alumno puede empezar a pasar páginas desde el frente del libro o desde el final. Siempre pasan las páginas una a una. Cuando abren el libro, la página 1 siempre está en el lado derecho.

Cuando voltean la página 1, ven las páginas 2 y 3. Cada página, excepto la última página, siempre estará impresa en ambos lados. La última página puede estar impresa solo en el frente, dado el largo del libro. Si el libro tiene `n` páginas y un alumno quiere llegar a la página `p`, ¿cuál es el número mínimo de páginas que debe voltear? Ellos pueden empezar desde el principio o desde el final del libro.

## Entrada

- `n`: Entero que representa el número total de páginas del libro.
- `p`: Entero que representa la página a la que el alumno quiere llegar.

## Salida

- Un entero que representa el número mínimo de páginas que debe voltear para llegar a la página `p`.

## Ejemplo

Si el libro tiene 6 páginas y el alumno quiere llegar a la página 2:

- Desde el principio: Voltea 1 página.
- Desde el final: Voltea 2 páginas.

El resultado es 1 porque es el mínimo número de páginas a voltear.

## Solución

Para resolver este problema, se pueden considerar dos enfoques:

1. Calcular el número de vueltas de páginas desde el principio del libro hasta la página `p`.
2. Calcular el número de vueltas de páginas desde el final del libro hasta la página `p`.

El mínimo de estas dos cantidades será la solución.

### Implementación en JavaScript

```javascript
function pageCount(n, p) {
  // Calcular el número de vueltas desde el principio
  let fromFront = Math.floor(p / 2);
  // Calcular el número de vueltas desde el final
  let fromBack = Math.floor(n / 2 - Math.floor(p / 2));

  // Retornar el mínimo de las dos vueltas
  return Math.min(fromFront, fromBack);
}

// Ejemplo de uso
console.log(pageCount(6, 2)); // Debe imprimir 1
console.log(pageCount(5, 4)); // Debe imprimir 0
```

### Explicación

Voltear desde el principio: La cantidad de páginas a voltear desde el inicio hasta la página p se calcula dividiendo p entre 2 y tomando la parte entera.
Voltear desde el final: La cantidad de páginas a voltear desde el final hasta la página p se calcula tomando la mitad del total de páginas n y restando el resultado de la división entera de p entre 2.
La función retorna el menor valor entre las dos posibilidades para asegurar el mínimo número de páginas a voltear.

### Ejemplos

Para un libro de 6 páginas y queriendo llegar a la página 2, las vueltas desde el principio son 1 (página 1 -> página 2) y desde el final también son 1 (página 6 -> página 5 -> página 4 -> página 3 -> página 2).
Para un libro de 5 páginas y queriendo llegar a la página 4, las vueltas desde el principio son 2 (página 1 -> página 2 -> página 3 -> página 4) y desde el final son 0 (página 5 -> página 4).
