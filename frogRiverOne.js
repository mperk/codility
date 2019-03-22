console.log(solution(5, [1, 3, 1, 4,2,3,5,4] ))
function solution(X, A) {
    var total = (X *(X +1))/2;
    var b = [];
    var sum = 0;
    for (let i = 0; i <= A.length; i++) {
        const e = A[i];
        if(b.indexOf(e) < 0 && A[i] <= X){
            sum += e;
        }
        if(sum === total){
            return i;
        }else if(sum>total){
            return -1;
        }
        b.push(e);
    }
    return -1
}
