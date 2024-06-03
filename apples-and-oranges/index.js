function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let samHouse = [];
    for(let index = s; index<=t; index++) {
        samHouse.push(index);
    }
    const verifyPosition = (array, treePosition) => {
        let elementsIn = 0;
        array.map(element => {
            let elementPosition = element + treePosition;
            if(samHouse.includes(elementPosition)) elementsIn++;
        })
        
        return elementsIn
    }
    console.log(verifyPosition(apples, a))
    console.log(verifyPosition(oranges, b))   
}