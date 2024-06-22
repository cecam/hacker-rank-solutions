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