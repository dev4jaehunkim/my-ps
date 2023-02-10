function solution(d, budget) {
    // 최대한 많은 부서에게 물품을 지원하려면 금액이 작은 물품이 많으면 됨
    // 처음 들어오는 배열은 정렬되지 않은 상태이기 때문에 우선 정렬
    // total 변수를 선언 후 d 배열을 순회하면서 total에 금액 누적
    // total이 budget을 초과한 경우 사줄 수 있는 만큼 다 사주고 추가 결제를 한 것이라는 의미이므로 현재 인덱스를 반환합니다.(인덱스는 0부터 시작하기 때문에 초과한 후에 인덱스를 사용해야 최대로 사줄 수 있는 부서의 수를 구할 수 있음)
    var answer = 0;
    d = d.sort((a,b) => a-b);
    for (let i=0; i<d.length; i++) {
        answer += d[i];
        if (answer > budget) return i;
    }
    
    // 모든 부서에게 물품을 구매해줄 수 있는 경우 위 반복문에서 함수가 종료되지 않을 것이므로 예산신청안(d)의 개수를 그대로 리턴
    return d.length;
}