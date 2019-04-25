console.log(bestSolution([2,3,1,5]));
function solution(A){
    var l = A.length + 1;
    var sum = (l * (l+1)) / 2;
    var sum2 = 0;
    for (let i = 0; i < A.length; i++) {
        sum2 += A[i];
    }
    return (sum - sum2);
}
