console.log(solution([ 1, 3, 6, 4, 1, 2]));
function solution(A) {
    // TODO: find best solution
}


//bad solution. score is %66
function solution1(A) {
    var result = 1;
    while(A.indexOf(result) >= 0){
        result++;
    }
    return result;
}
