
console.log(fixCapacity(7, [[1,2], [2,4], [3,6]], [[1,2]]));
console.log(fixCapacity(10, [[1,3], [2,5], [3,7], [4,10]], [[1,2], [2,3], [3,4], [4,5]]));
function fixCapacity(deviceCapacity, foregroundAppList, backgroundAppList)
{
    let result = [];
    let minDiff = 0;
    for (let i = 0; i < foregroundAppList.length; i++) {
        for (let j = 0; j < backgroundAppList.length; j++) {
            let diff = deviceCapacity - (foregroundAppList[i][1] + backgroundAppList[j][1]);
            if(diff >= 0) {
                if(result.length === 0) { minDiff = diff; }
                if(minDiff > diff){
                    minDiff = diff;
                    result = [];
                    result.push([foregroundAppList[i][0], backgroundAppList[j][0]]);
                }else if(minDiff === diff){
                    result.push([foregroundAppList[i][0], backgroundAppList[j][0]]);
                }
            }
        }
    }
    return result;
}
