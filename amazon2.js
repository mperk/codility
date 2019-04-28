
console.log(generalizedGCD([2,4,6,8,10], 5));
function generalizedGCD(num, arr)
{
    let gcd = 1;
    let divider = 2;
    arr = arr.sort((a, b) => a - b);
    const max = arr[arr.length - 1];
    
    while(divider <= max) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] % divider === 0){
                count++;
            }
        }
        if(count === num) {
            gcd = divider;
        }
        divider++;
    }
    return gcd;
}
