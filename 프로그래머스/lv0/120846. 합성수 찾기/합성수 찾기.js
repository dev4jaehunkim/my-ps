// 1과 n 자신은 약수에 이미 포함
// n/i가 약수라면 i/n도 동일한 약수이므로 i의 약수 목록 중 절반까지만 찾아봐도 됨
function isComposite(n) {
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) return true;
    }
    return false;
}

function solution(n) {
    var answer = 0;
    // 0~3까지는 합성수가 없으므로 4부터 합성수 카운팅
    for (let i=4; i<=n; i++) {
        if (isComposite(i)) answer++;
    }
    
    return answer;
}