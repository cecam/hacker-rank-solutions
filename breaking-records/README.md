# Problema Rompiendo Récords

María juega baloncesto universitario y quiere volverse profesional. Cada temporada mantiene un registro de su desempeño. Ella tabula el número de veces que rompe su récord de temporada para la mayor cantidad de puntos y la menor cantidad de puntos en un juego. Los puntos anotados en el primer juego establecen su récord para la temporada, y ella comienza a contar a partir de ahí.

## Descripción del Problema

Dadas las puntuaciones de una temporada, determina el número de veces que María rompe sus récords de mayor y menor cantidad de puntos anotados durante la temporada.

## Ejemplo

```text
scores = [12, 24, 10, 24]

Las puntuaciones están en el mismo orden en que se jugaron los juegos. Ella tabula sus resultados de la siguiente manera:

| Juego | Puntuación | Mínimo | Máximo | Conteo Min | Conteo Max |
|-------|------------|--------|--------|------------|------------|
| 0     | 12         | 12     | 12     | 0          | 0          |
| 1     | 24         | 12     | 24     | 0          | 1          |
| 2     | 10         | 10     | 24     | 1          | 1          |
| 3     | 24         | 10     | 24     | 1          | 1          |
```

Dadas las puntuaciones de una temporada, determina el número de veces que María rompe sus récords de mayor y menor cantidad de puntos anotados durante la temporada.

## Descripción de la Función

Completa la función `breakingRecords`.

### Parámetros

- `int scores[n]`: puntos anotados por juego.

### Retornos

- `int[2]`: Un array con los números de veces que ella rompió sus récords. El índice 0 es para romper el récord de más puntos, y el índice 1 es para romper el récord de menos puntos.

## Solución

```javascript
function breakingRecords(scores) {
  let maxScore = scores[0];
  let minScore = scores[0];
  let highestScore = 0;
  let lowestScore = 0;

  scores.map((score) => {
    if (score > maxScore) {
      maxScore = score;
      highestScore++;
    }
    if (score < minScore) {
      minScore = score;
      lowestScore++;
    }
  });

  return [highestScore, lowestScore];
}
```

### Explicación

1. Inicializa `maxScore` y `minScore` con la puntuación del primer juego.
2. Inicializa los contadores `highestScore` y `lowestScore` en 0.
3. Itera sobre las puntuaciones:
   - Si la puntuación actual es mayor que `maxScore`, actualiza `maxScore` e incrementa `highestScore`.
   - Si la puntuación actual es menor que `minScore`, actualiza `minScore` e incrementa `lowestScore`.
4. Retorna un array con `highestScore` y `lowestScore`.

### Ejemplo de Ejecución

Dado el input `scores = [12, 24, 10, 24]`:

- Juego 0: La puntuación es 12. Esto establece los valores iniciales de `maxScore` y `minScore` en 12.
- Juego 1: La puntuación es 24. Esto es mayor que `maxScore` (12), por lo que `maxScore` se actualiza a 24 y `highestScore` se incrementa a 1.
- Juego 2: La puntuación es 10. Esto es menor que `minScore` (12), por lo que `minScore` se actualiza a 10 y `lowestScore` se incrementa a 1.
- Juego 3: La puntuación es 24. No se establecen nuevos récords.

La función retorna `[1, 1]` porque María rompió el récord de más puntos una vez y el récord de menos puntos una vez.
