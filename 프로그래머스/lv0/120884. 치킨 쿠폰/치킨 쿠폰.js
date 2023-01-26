function solution(chicken) {
    // 서비스 치킨의 수를 누적할당해 줄 변수
    let answer = 0;
    
    // 치킨을 주문한 수만큼 쿠폰 발행
    let coupon = chicken

    // 쿠폰이 10개 이상인 경우 서비스 치킨 주문을 반복
    while(coupon >= 10){
        // 서비스 치킨 주문하고 리턴할 변수에 누적
        const service = parseInt(coupon/10);
        answer = answer + service;
        
        // 새로 발행된 쿠폰과 이전 회차에서 남았던 쿠폰을 합쳐줌
        coupon = service + coupon%10
    }

    return answer;
}