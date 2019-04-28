
console.log(cellCompete([1,1,1,0,1,1,1,1], 2));
function cellCompete(states, days)
{
    for (let i = 0; i < days; i++) {
        let array = new Array();
        Array.prototype.push.apply(array, states)
        array.push(0);
        array.unshift(0);
        for (let j = 1; j < array.length-1; j++) {
            if(array[j-1] === array[j+1]){
                states[j-1] = 0;
            }else {
                states[j-1] = 1;
            }
        }
    }
    return states;
}
