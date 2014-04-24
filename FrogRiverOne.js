function solution(X, A) {
    var steps = {};
    var minute = -1;
    for(var j = 0, length = A.length; j < length; j++){
        if(!steps[A[j]]){
            steps[A[j]] = true;
            X--;
        }
        if(X === 0){
            minute = j;
            break;
        }
    }
    return minute;
}
