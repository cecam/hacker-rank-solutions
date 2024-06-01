### Problema: Redondeo de Notas en HackerLand University

HackerLand University tiene la siguiente política de calificación:

1. Cada estudiante recibe una calificación en el rango inclusivo de 0 a 100.
2. Cualquier calificación menor a 40 es una calificación reprobatoria.

Sam es un profesor de la universidad y le gusta redondear las calificaciones de cada estudiante según las siguientes reglas:

- Si la diferencia entre la calificación y el siguiente múltiplo de 5 es menor a 3, redondear la calificación al siguiente múltiplo de 5.
- Si la calificación es menor a 38, no se realiza el redondeo, ya que el resultado seguirá siendo una calificación reprobatoria.

#### Ejemplos:

- Una calificación de 84 se redondea a 85 (85 - 84 es menor a 3).
- Una calificación de 29 no se redondea (el resultado es menor a 40).
- Una calificación de 57 no se redondea (60 - 57 es 3 o más).

### Función para Automatizar el Proceso de Redondeo

La función `gradingStudents` toma como parámetro una lista de calificaciones iniciales de los estudiantes y devuelve una lista de las calificaciones después del redondeo según las reglas descritas.

#### Implementación en JavaScript:

```javascript
function gradingStudents(grades) {
  return grades.map((grade) => {
    const MIN_GRADE = 40;
    const MAX_DIFF = 3;
    let nextMultiple = Math.ceil(grade / 5) * 5;

    const isLessThanMin = nextMultiple < MIN_GRADE;
    const diffIsMoreThanMax = nextMultiple - grade < MAX_DIFF;
    if (isLessThanMin || !diffIsMoreThanMax) return grade;

    return nextMultiple;
  });
}

// Ejemplo de uso
const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades)); // Output: [75, 67, 40, 33]
```

#### Explicación del Código:

1. **Constantes**: `MIN_GRADE` se establece en 40, el umbral para aprobar, y `MAX_DIFF` se establece en 3, el máximo diferencial permitido para redondear.
2. **Cálculo del siguiente múltiplo de 5**: `Math.ceil(grade / 5) * 5` se usa para encontrar el siguiente múltiplo de 5 de la calificación.
3. **Condiciones para el redondeo**:
   - `isLessThanMin`: Verifica si el siguiente múltiplo de 5 es menor a la calificación mínima aprobatoria.
   - `diffIsMoreThanMax`: Verifica si la diferencia entre el siguiente múltiplo de 5 y la calificación es menor a 3.
4. **Lógica de Redondeo**: Si el siguiente múltiplo de 5 es menor a la calificación mínima aprobatoria o la diferencia es mayor o igual a 3, la calificación no se redondea. De lo contrario, se redondea al siguiente múltiplo de 5.

Esta solución automatiza eficientemente el proceso de redondeo de calificaciones, cumpliendo con las reglas de la política de calificación de HackerLand University.
