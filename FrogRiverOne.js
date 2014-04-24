function solution(X, A) {
    var steps = {};
    for(var i = 1; i <= X; i++){
       steps[i] = true; 
    }
    var minute = -1;
    for(var j = 0, length = A.length; j < length; j++){
        var current = A[j];
        delete steps[current];
        if(Object.keys(steps).length === 0){
            minute = j;
            break;
        }
    }
    return minute;
}
