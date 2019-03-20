console.log(bestSolution([2,3,1,5]));
function solution(A){
    var result = -1;
    if(A.indexOf(1) < 0){
        return 1;
    }
    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        if(A.indexOf(element+1) < 0) {
            if(result === -1 || result > element + 1) {
                result = element + 1;
            }
        }
    }
    return result;
}

function bestSolution(A){
    var l = A.length + 1;
    var sum = (l * (l+1)) / 2;
    var sum2 = 0;
    for (let i = 0; i < A.length; i++) {
        sum2 += A[i];
    }
    return (sum - sum2);
}