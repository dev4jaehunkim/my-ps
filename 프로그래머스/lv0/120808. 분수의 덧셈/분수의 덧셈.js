function solution(numer1, denom1, numer2, denom2) {
    // 기약 분수로 표현하려면 두 분수를 우선 통분하여 더한 뒤 분자 분모의 최대 공약수로 각각 나눠주면 됨
    
    // 분자
    const numer = numer1*denom2 + numer2*denom1;
    // 분모
    const denom = denom1 * denom2;
    // 최대공약수
    const gcd = getGcd(numer, denom);
    
    return [(numer/gcd), (denom/gcd)];
}

function getGcd(a, b) {
    if (b === 0) return a;
    else return getGcd(b, a%b);
}