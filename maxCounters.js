console.log(solution(5, [ 3, 4, 4, 6, 1, 4, 4]));
function solution(N, A){
    var n = new Array(N).fill(0);
    n = n.map(x => 0);
    for (let k = 0; k < A.length; k++) {
        const x = A[k];
        if(1 <= x && x <= N){
            n[x-1] += 1;
        } else {
            var max = Math.max(...n);
            n.fill(max);
        }
    }
    return n;
}