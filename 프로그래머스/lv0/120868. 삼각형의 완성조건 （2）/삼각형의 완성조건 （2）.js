function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    let cnt = 0;
    
    // 첫번째 경우: 두 변의 길이 중 이미 삼각형의 가장 긴 변이 있는 경우
    // 작은 쪽 < [...나머지 한 변의 길이] <= 큰 쪽
    for (let i=max-min+1; i<=max; i++) {
        cnt++;
    }
    
    // 두번째 경우: 나머지 한 변의 길이가 가장 긴 변인 경우
    // 최대 길이는 문제에도 나와있듯 다른 두 변의 길이 합보다 작아야 합니다
    // 큰 쪽 < [...나머지 한 변의 길이] < 최대 길이
    for (let i=max+1; i<max+min; i++) {
        cnt++;
    }
    
    return cnt;
}