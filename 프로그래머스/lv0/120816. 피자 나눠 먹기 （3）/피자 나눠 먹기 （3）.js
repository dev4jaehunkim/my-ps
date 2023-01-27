function solution(slice, n) {
    
    var answer = 0;
    while (n>0) {
        n -= slice;
        answer++;
    }
    return answer;
}