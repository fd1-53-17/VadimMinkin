function min () {
    
    var minArg;
    for (var i=0; i<arguments.length; i++) {
        if (arguments[i] < minArg || minArg == undefined) {
            minArg = arguments[i];
        }
    }
    return minArg;
}
console.log(min(7, 44, 56, 89, 47, 12, 69, 21));


function max () {
    
    var maxArg;
    for (var i=0; i<arguments.length; i++) {
        if (arguments[i] > maxArg || maxArg == undefined) {
            maxArg = arguments[i];
        }
    }
    return maxArg;
}
console.log(max(7, 44, 56, 89, 47, 12, 69, 21));