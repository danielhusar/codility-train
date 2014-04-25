function solution(S, P, Q) {
    S = S.split('');
    var nucleotides = [];
    var cache = {};
    var settings = {
        A: 1,
        C: 2,
        G: 3,
        T: 4
    }
    
    for(var i = 0, length = P.length; i < length; i++){
        var start = P[i];   
        var end = Q[i];
        var chunk = S.slice(start, end + 1);
        var chunkString = chunk.join('');
        cache[chunkString] = cache[chunkString] || chunk.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        }).sort();
        
        if(cache[chunkString].length){
            nucleotides.push(settings[cache[chunkString][0]]);
        }
    }

    return nucleotides;
}
