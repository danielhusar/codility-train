function solution(a) {
    var index = 0;
    var leftSum = a[index];
    var rightSum = a.slice(1, length).reduce(function(m,n){ return m + n}, 0);
    var diff = Math.abs(leftSum - rightSum);
    var length = a.length - 2;
    while(length--){
        index++;
        leftSum = leftSum + a[index];
        rightSum = rightSum - a[index];
        var tempDiff = Math.abs(leftSum - rightSum);
        if(tempDiff < diff){
            diff = tempDiff;
        }
    }
    return diff;
}
