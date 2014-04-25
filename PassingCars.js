function solution(A) {
    var passing = 0;
    var east = 0;
    for(var i = 0, length = A.length; i < length; i++){
        if(A[i] === 0){
            east++;
        }else{
            passing = east + passing;
        }
        if(passing > 1000000000){
            passing = -1;
            break;
        }
    }
    return passing;
}
