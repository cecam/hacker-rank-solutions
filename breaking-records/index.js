function breakingRecords(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let highestScore = 0;
    let lowestScore = 0;

    scores.map((score) => {
        if(score > maxScore) {
            maxScore = score;
            highestScore++
        };
        if(score < minScore) {
            minScore = score;
            lowestScore++;
        };
    })
    
    return[highestScore, lowestScore]
}