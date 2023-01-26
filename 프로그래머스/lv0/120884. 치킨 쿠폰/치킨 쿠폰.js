function solution(chicken) {
    let result = 0;
    let temp = chicken % 10; // 108개를 주문하면 쿠폰은 1개가 남는다.
    let answer = parseInt(chicken / 10); // 108개의 닭 주문, 108 쿠폰 발급
    result += answer;
    answer += temp;

    while(1) {
        // 초기값에서 남는 쿠폰을 다시 구한다.
        temp = answer % 10;
        
        // 서비스 치킨 주문
        answer = Math.floor(answer / 10); // 10
        result += answer;
        
        // 쿠폰이 딱 맞아 떨어진다면 남은 쿠폰이 없으므로 반복 중단
        if (answer === 0) {
            break;
        }
        
        // 아니라면 새로 발행된 쿠폰과 남은 쿠폰을 합침
        answer += temp;
    }

    return (result);
}