function getTotalX(a, b) {
    const gcd = (x,y) => {
        while(y) {
            [x,y] = [y, x % y];
        }
        return x;
    }
    
    const lcm = (x,y) => {
        return(x*y) / gcd(x,y);
    }
    
    let lcm_a = a[0];
    for(let i = 1; i < a.length; i++) {
        lcm_a = lcm(lcm_a, a[i]);
    };
    
    let gcd_b = b[0];
    for(let i = 1; i < b.length; i++) {
        gcd_b = gcd(gcd_b, b[i]);
    };
    
    let count = 0;
    let multiple = lcm_a;
    while (multiple <= gcd_b) {
        if(gcd_b % multiple === 0) {
            count++;
        }
        multiple += lcm_a;
    }
    
    return count
}