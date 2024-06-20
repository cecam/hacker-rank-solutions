function migratoryBirds(arr) {
    let birdsCount = {}
    for(let i=0; i<arr.length; i++) {
        if(!birdsCount[arr[i]]) {
            birdsCount[arr[i]] = 1;
        } else {
            birdsCount[arr[i]]++;
        }
    }
    let maxCount = 0;
    let minId = Number.MAX_SAFE_INTEGER;
    
    for(let bird in birdsCount) {
        if(birdsCount[bird] > maxCount) {
            maxCount = birdsCount[bird];
            minId = parseInt(bird)
        } else if (birdsCount[bird] === maxCount) {
            let currentId = parseInt(bird)
            if(currentId < minId) {
                minId = currentId;
            }
        }
    }
    
    return minId
}