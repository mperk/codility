console.log(prioritizedOrders(6, 
        [
            "zld 93 12",
            "fp kindle book",
            "10a echo show",
            "17g 12 25 6",
            "ab1 kindle book",
            "125 echo dot second generation",
        ]
    ));
function prioritizedOrders(numOrders, orderList)
{
    let prime = [];
    let nonPrime = [];
    for (let i = 0; i < orderList.length; i++) {
        let a = orderList[i].split(" ");       
        if(isNumeric(a[1])){
            nonPrime.push(a);
        } else {
            let key = a.shift();
            prime.push([a, key]);
        }
    }
    
    prime.sort();
    let result = [];
    for (let i = 0; i < prime.length; i++) {
        result.push(prime[i][1] + " " + prime[i][0].join(" "));
    }

    for (let i = 0; i < nonPrime.length; i++) {
        result.push(nonPrime[i].join(" "));
    }
    return result;
}

function isNumeric(num){
    return !isNaN(num)
}
