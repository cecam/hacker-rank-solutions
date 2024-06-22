# Problema de los Calcetines

## Descripción del Problema

Hay una gran pila de calcetines que deben emparejarse por color. Dado un arreglo de enteros que representan el color de cada calcetín, determina cuántos pares de calcetines con colores coincidentes hay.

## Ejemplo

### Entrada

```plaintext
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]
```

### Salida

```plaintext
2
```

### Explicación

Hay un par de calcetines de color 1 y un par de calcetines de color 2. Hay tres calcetines sueltos, uno de cada color. El número de pares es 2.

## Descripción de la Función

Completa la función `sockMerchant` con los siguientes parámetros:

- **int n**: el número de calcetines en la pila.
- **int ar[n]**: los colores de cada calcetín.

### Retorna

- **int**: el número de pares.

## Solución en JavaScript

### Código

```javascript
function sockMerchant(n, ar) {
  const pairSocks = {};
  for (let i = 0; i < n; i++) {
    if (!pairSocks[ar[i]]) pairSocks[ar[i]] = 0;
    pairSocks[ar[i]]++;
  }

  let pairs = 0;
  for (const key in pairSocks) {
    pairs += Math.floor(pairSocks[key] / 2);
  }

  return pairs;
}

// Ejemplo de uso
const n = 7;
const ar = [1, 2, 1, 2, 1, 3, 2];
console.log(sockMerchant(n, ar)); // Debería imprimir 2
```

### Explicación del Código

1. **Creación del objeto `pairSocks`:** Utilizamos un objeto para almacenar el número de calcetines de cada color.
2. **Contar calcetines:** Recorremos el array `ar` y contamos cuántos calcetines de cada color hay, incrementando el contador correspondiente en `pairSocks`.
3. **Contar pares:** Recorremos el objeto `pairSocks` y para cada color, dividimos el número de calcetines entre 2 usando `Math.floor` para contar sólo los pares completos.
4. **Devolución del número de pares:** Sumamos todos los pares completos y los devolvemos como resultado de la función.

### Notas Adicionales

- Usamos `Math.floor(pairSocks[key] / 2)` para asegurarnos de contar sólo los pares completos y no los calcetines sueltos.
- Este enfoque es eficiente tanto en términos de tiempo como de espacio, ya que usa un solo bucle para contar los calcetines y otro para contar los pares.
