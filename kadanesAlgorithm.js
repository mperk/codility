
console.log(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
function solution(A){
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < A.length; i++) {
        currentSum = Math.max(0, currentSum + A[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
