function squareArea(side){
    return side * side;
}

function ractangleArea(len, wid){
    return len * wid;
}

function circleArea(r){
    let rSqure = r * r;
    return 3.14 * rSqure;
}

module.exports = {
    squareArea : squareArea,
    ractangleArea : ractangleArea,
    circleArea : circleArea,
}
