function solution(n, k) { // n: 양꼬치 주문량, k: 음료수 주문량
    var answer = 0;
    let service = parseInt(n / 10)
    
    k = k - service
    answer = (12000 * n) + (2000 * k)
    
    return answer;
}

//양꼬치 주문량 10인분마다 k를 -1씩 감소
//  (양꼬치주문량 n) / 10 === k를 감소 시킬 수를 변수 service에 할당