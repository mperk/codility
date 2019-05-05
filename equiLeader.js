// A non-empty array A consisting of N integers is given.

// The leader of this array is the value that occurs in more than half of the elements of A.

// An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// we can find two equi leaders:

// 0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
// 2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
// The goal is to count the number of equi leaders.

// Write a function:

// function solution(A);

// that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

// For example, given:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// the function should return 2, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].


console.log(solution([4,3,4,4,4,2]));
function solution(A){
    let count = 0;
    for (let i = 1; i < A.length; i++) {
        let first = findLeader(A.slice(0,i));
        let second = findLeader(A.slice(i, A.length));
        if(first === second && first !== undefined){
            count = count + 1;
        }
    }
    return count;
}

function findLeader(A){
    let obj = {};
    let max = [0,1];
    for (let i = 0; i < A.length; i++) {
        if(obj[A[i]] === undefined){
            obj[A[i]] = 1;
        } else {
            obj[A[i]] = obj[A[i]] + 1;
        }
        if(obj[A[i]] >= max[1]){
            max = [A[i], obj[A[i]]];
        }
    }
    if(max[1]> A.length /2){
        return max[0];
    }else {
        return 0;
    }
}