function solution(A) {
    var min = Infinity;
    var tempMin;
    var minPos;
    
    for(var i = 0, length = A.length - 1; i < length; i++){
        tempMin = (A[i] + A[i+1])/2;
        
        if(tempMin < min){
            min = tempMin;
            minPos = i;
        }

        if(A[i+2]){
            tempMin = (A[i] + A[i+1] + A[i+2])/3;
            if(tempMin < min){
                min = tempMin;
                minPos = i;
            }
        }
        
        if(min === 1){
            break;
        }
    }
    
    return minPos;
}
