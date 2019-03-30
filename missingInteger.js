// This is a demo task.
// Write a function:
// class Solution { public int solution(int[] A); }
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];


// console.log(solution([ 1, 3, 6, 4, 1, 2]));
console.log(solution([-1,-1, -5,-4,-2,-4,-8,-2,-3, 1]));
function solution(A) {
    const len = A.length;
    const hash = {};
    for (let i = 0; i < len; i++) {
        hash[A[i]] = A[i];
    }
    for (let i = 1; i < 1000002; i++) {
        if(!hash[i]) return i;
    }
    return 1;
}


//bad solution. score is %66
function solution1(A) {
    var result = 1;
    while(A.indexOf(result) >= 0){
        result++;
    }
    return result;
}
