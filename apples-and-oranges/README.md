# Problema del Conteo de Frutas en la Casa de Sam

## Descripción del Problema

La casa de Sam está flanqueada por un manzano a la izquierda y un naranjo a la derecha. El objetivo es calcular cuántas manzanas y naranjas caen en la casa de Sam dadas ciertas condiciones.

### Configuración de la Casa y los Árboles

- La casa está definida por la región `[s, t]`, donde `s` es el punto de inicio y `t` el punto final.
- El manzano está ubicado en el punto `a`, a la izquierda de la casa.
- El naranjo está ubicado en el punto `b`, a la derecha de la casa.

### Dinámica de la Caída de Frutas

- Las frutas (manzanas y naranjas) caen a una cierta distancia `d` de sus respectivos árboles a lo largo del eje x.
  - Un valor negativo de `d` indica que la fruta cayó a la izquierda del árbol.
  - Un valor positivo de `d` indica que la fruta cayó a la derecha del árbol.

### Entradas

- `m` manzanas tienen distancias dadas por el arreglo `apples[]`.
- `n` naranjas tienen distancias dadas por el arreglo `oranges[]`.

### Tarea

Calcular el número de manzanas y naranjas que caen en la casa de Sam (dentro del rango `[s, t]`).

## Ejemplo

Considera la siguiente configuración:

- La casa de Sam está entre `s = 7` y `t = 10`.
- El manzano está ubicado en `a = 4` y el naranjo en `b = 12`.
- Hay `m = 3` manzanas con distancias `[2, 3, -4]` y `n = 3` naranjas con distancias `[3, -2, -4]`.

El resultado será:

- Las manzanas caen en las posiciones `[6, 7, 0]`.
- Las naranjas caen en las posiciones `[15, 10, 8]`.
- Contando estas, `1` manzana y `2` naranjas caen en la casa de Sam.

## Descripción de la Función

La función `countApplesAndOranges` debe realizar lo siguiente:

- **Parámetros**:

  - `s`: Entero, punto de inicio de la ubicación de la casa de Sam.
  - `t`: Entero, punto final de la ubicación de la casa de Sam.
  - `a`: Entero, ubicación del manzano.
  - `b`: Entero, ubicación del naranjo.
  - `apples`: Arreglo de enteros, distancias a las que cada manzana cae del árbol.
  - `oranges`: Arreglo de enteros, distancias a las que cada naranja cae del árbol.

- **Salida**:
  - La función imprime el número de manzanas y naranjas que caen en la casa de Sam, cada uno en una línea separada.

## Implementación

Aquí está una implementación en JavaScript de la solución:

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const verifyPosition = (array, treePosition) => {
    let elementsIn = 0;
    array.map((element) => {
      let elementPosition = element + treePosition;
      if (elementPosition >= s && elementPosition <= t) elementsIn++;
    });

    return elementsIn;
  };
  console.log(verifyPosition(apples, a));
  console.log(verifyPosition(oranges, b));
}
```

### Función: `countApplesAndOranges`

#### Descripción Paso a Paso:

1. **Definir la Función `verifyPosition`**:

   - `verifyPosition` es una función auxiliar dentro de `countApplesAndOranges`.
   - Esta función toma dos argumentos:
     - `array`: un array de distancias de frutas desde el árbol.
     - `treePosition`: la posición del árbol desde el cual caen las frutas.
   - La función calcula cuántas frutas del array caen dentro del intervalo de la casa `[s, t]`.

2. **Inicializar Contador**:

   - Dentro de `verifyPosition`, se inicializa una variable `elementsIn` a 0. Este contador almacenará el número de frutas que caen dentro del intervalo de la casa.

3. **Calcular Posiciones**:

   - Usando `map` en el array de distancias, se suma cada distancia a `treePosition` para obtener la posición final de la fruta en el suelo.
   - Si la posición calculada (`elementPosition`) está dentro del intervalo `[s, t]`, se incrementa el contador `elementsIn`.

4. **Retornar el Contador**:

   - Después de recorrer todas las frutas en el array, la función `verifyPosition` retorna el número total de frutas que caen dentro del intervalo de la casa.

5. **Llamar a `verifyPosition` para Manzanas y Naranjas**:
   - Se llama a `verifyPosition` con el array de manzanas y la posición del árbol de manzanas, y se imprime el resultado.
   - Se llama a `verifyPosition` con el array de naranjas y la posición del árbol de naranjas, y se imprime el resultado.
