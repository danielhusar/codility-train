function solution(a) {
    a = a.sort(function(a,b){return a - b});
    var perm = 1;
    for(var i = 0, length = a.length; i < length; i++){
        var current = a[i];
        var prev = a[i - 1] || 0;
        if(current - prev !== 1){
            perm = 0;
            break;
        }
    }
    return perm;
}
