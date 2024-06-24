# Problema de División de la Cuenta

Dos amigos, Anna y Brian, están decidiendo cómo dividir la cuenta en una cena. Cada uno pagará solo por los artículos que consuman. Brian obtiene la cuenta y calcula la porción de Anna. Debes determinar si su cálculo es correcto.

## Enunciado del Problema

Por ejemplo, supongamos que la cuenta tiene los siguientes precios: `bill = [2, 4, 6]`. Anna decide no comer el artículo \( k = \text{bill}[2] \) que cuesta 6. Si Brian calcula la cuenta correctamente, Anna pagará \( \frac{(2 + 4)}{2} = 3 \). Si él incluye el costo de `bill[2]`, calculará \( \frac{(2 + 4 + 6)}{2} = 6 \). En este segundo caso, debería devolverle 3 a Anna.

## Descripción de la Función

Completa la función `bonAppetit`. Debe imprimir `Bon Appetit` si la cuenta está dividida justamente. De lo contrario, debe imprimir la cantidad entera de dinero que Brian le debe a Anna.

### Parámetros de la Función:

- `bill`: un array de enteros que representa el costo de cada artículo ordenado.
- `k`: un entero que representa el índice basado en cero del artículo que Anna no come.
- `b`: la cantidad de dinero que Anna contribuyó a la cuenta.

## Ejemplo

**Entrada:**

```javascript
bill = [2, 4, 6];
k = 2;
b = 6;
```

````

**Salida:**

```
3
```

## Solución

La siguiente función en JavaScript implementa la solución a este problema:

```javascript
function bonAppetit(bill, k, b) {
  const initialValue = 0;
  const annaConsumed =
    bill.reduce((accumulator, currentValue, index) => {
      return index !== k ? accumulator + currentValue : accumulator;
    }, initialValue) / 2;

  console.log(annaConsumed === b ? "Bon Appetit" : b - annaConsumed);
}
```

### Explicación

1. **Inicializar Suma Total**: Comienza con un valor inicial de 0.
2. **Calcular la Parte de Anna**: Usa el método `reduce` para sumar todos los artículos en el array `bill` excepto el artículo en el índice `k`. Divide el resultado entre 2 para obtener la parte de Anna.
3. **Verificar Contribución**: Compara la parte calculada de Anna con su contribución real `b`.
4. **Imprimir Resultado**: Si la parte de Anna es igual a `b`, imprime "Bon Appetit". De lo contrario, imprime la cantidad que Brian le debe a Anna (`b - annaConsumed`).

````
