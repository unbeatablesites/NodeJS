var fs = require("fs");



function bank(ammount){
var add = process.argv[2];
var sub = process.argv[3];
var oper = process.argv[4];
    var total = 0;
    ammount.forEach(function(cash){
        
        total += cash;
        
    });
    
    var add = total
    return  Math.round(add);
}

    var ammount = [0]
    
    
    if (process.argv[2] === process.argv[2]){
        console.log(bank(ammount) + process.argv[2] );
    }