function gradingStudents(grades) {
    return grades.map((grade) => {
        const MIN_GRADE = 40;
        const MAX_DIFF = 3
        let nextMultiple = Math.ceil(grade / 5) * 5;
        
        const isLessThanMin = nextMultiple < MIN_GRADE;
        const diffIsMoreThanMax = (nextMultiple - grade) < MAX_DIFF;
        if(isLessThanMin || !diffIsMoreThanMax) return grade
        
        return nextMultiple
    })
}

console.log(gradingStudents([73, 67, 38, 33])) // [75, 67, 40, 33]