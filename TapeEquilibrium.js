function solution(a) {
    var diff = -1;
    for(var i = 0, length = a.length; i < length - 1; i++){
        var leftSum = a.slice(0, i + 1).reduce(function(m,n){ return m + n}, 0);
        var rightSum = a.slice(i + 1, length).reduce(function(m,n){ return m + n}, 0);
        var tempDiff = Math.abs(leftSum - rightSum);
        if(tempDiff < diff || diff < 0){
            diff = tempDiff;
        }
    }
    return diff;
}
