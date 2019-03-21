
console.log(solution([3,1,2,4,3]));
function solution(A) {
    var leftSum=0, rightSum=0, result=0;
    var j = 0;
    leftSum = A[j];
    j = 1;
    for (let i = j; i < A.length; i++) {
        rightSum += A[i];
    }

    result = Math.abs(leftSum - rightSum);
    j = 2;

    for (let i = 2; i < A.length; i++) {
        leftSum += A[i-1];
        rightSum -= A[i-1];
        var temp = Math.abs(leftSum - rightSum);
        if(temp<result){
            result = temp;
        }
    }
    return result;
}

// console.log(solution([3000,1000]));
// function solution(A) {
//     var result = 0;
//     for (let i = 0; i < A.length-1; i++) {
//         const _leftSum = leftSum(A, i);
//         const _rightSum = rightSum(A, i + 1);
//         var difference = Math.abs(_leftSum - _rightSum);
//         if(difference < result || i == 0) {
//             result = difference;
//         }
//     }
//     return result;
// }

// function leftSum(A, lastIndex){
//     var sum = 0;
//     for (let i = 0; i <= lastIndex; i++) {
//         sum += A[i];
//     }
//     return sum;
// }

// function rightSum(A, firstIndex){
//     var sum = 0;
//     for (let i = firstIndex; i < A.length; i++) {
//         sum += A[i];
//     }
//     return sum;
// }
