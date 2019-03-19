//#region toptal interview
numberOfCarryOperation("533395", "29")
function numberOfCarryOperation(x, y){
    var carry;
    var iteration;
    var xIteration = x.length - 1;
    var yIteration = y.length - 1;
    if(x.length > y.length) {
        iteration = x.length;
    } else{
        iteration = y.length;
    }
    var count = 0;
    var carry = 0;
    while(iteration > 0 ) {
        var _x;
        var _y;
        if(xIteration >= 0){
            _x = x[xIteration];
            xIteration--;
        }
        if(yIteration >= 0){
            _y = y[yIteration];
            yIteration--;
        }

        var result = +_x + +_y + carry;
        if(result > 9){
            console.log("1 is carried");
            carry = 1;
            count++;
        }else{
            carry = 0;
        }
        iteration--;
    }
    
    console.log(+x + +y, count + " carry operation");
}
//#endregion