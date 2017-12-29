function min (a, b,) {
    console.log(arguments);
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(min(1, 55));


function max (a, b) {
    console.log(arguments);
    if (a >= b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(max(7, 44));