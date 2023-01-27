function solution(n) {
    var answer = [];
    let prime = 2;
    // answer의 소인수분해한 수를 담고
    // 소수 외에는 더 이상 나눠지는 수가 없을 때까지 반복
    // 2부터 n까지 소수를 구하는 걸 반복하다가 구한 소수로 나눠 떨어지면 n의 값을 축소시키고 다음 회차 반복
    // => 예를 들어 n이 2로 나눠 떨어진다면 2로 나눈 n으로 재할당하고, 2부터 다시 줄어든 n까지 소수를 구함
    while (1) {
        if (isPrime(n)) {
            answer.push(n);
            break;
        }
        if (n % prime === 0) {
             if (isPrime(prime)) {
                 n /= prime;
                 answer.push(prime);
                 prime = 2;
             }
        }
        else prime++;
    }
    
    // 오름차순 정렬
    answer.sort((a,b) => a-b);
    
    // 배열을 Set 객체로 변환하면 중복이 제거되고, 이를 spread 문법으로 다시 배열로 반환
    const set = new Set(answer);
    return [...set];
}

function isPrime(n) {
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}