function kangaroo(x1, v1, x2, v2) {
    const firstIsFar = x1 > x2 && v1 > v2;
    const secondIsFar = x2 > x1 && v2 > v1
    if(firstIsFar || secondIsFar) return 'NO';
    
    if(v1 === v2) {
        return x1 === x2 ? 'YES' : 'NO';
    } else {
        if((x1 - x2) % (v2 - v1) === 0 && (x1 - x2) / (v2 - v1) >= 0) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}