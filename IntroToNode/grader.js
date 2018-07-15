

function average(scores){
    var total = 0;
    scores.forEach(function(score){
        
        total += score;
        
    });
    
    var avg = total/scores.length
    return  Math.round(avg);
}

    var scores = [90, 98, 89, 100, 100, 86, 94]
    var scores2 = [90, 98, 89, 100, 100, 86, 9]
    var scores3 = [90, 98, 9, 100, 10, 8, 94]
    console.log(average(scores));
    console.log(average(scores2));
    console.log(average(scores3));