function solution(polynomial) {
    // 덧셈으로 이뤄진 다항식이며 +가 첫번째나 마지막으로 등장하는 잘못된 입력이 없다는 가정이므로,
    // 기호를 제외한 피연산자 항만 추출
    const terms = polynomial.split(' + ');
    
    // 변수는 x만 존재한다고 가정했기 때문에 x를 포함하고 있는지 여부로 미지수인 항과 정수로만 이뤄진 항을 구분할 수 있음
    let unknownTerms = terms.filter(el => el.includes('x'));
    const intTerms = terms.filter(el => !el.includes('x'));
    
    // 일반 x는 1x로 변환해서 숫자를 더하기 쉽게 만들어줌
    unknownTerms = unknownTerms.map(el => {
        if (el === 'x') return 1;
        else return Number(el.replace('x', ''));
    });
    
    // reduce를 일반항과 미지수항에 각각 적용
    let unknownSum = unknownTerms.reduce((acc,cur) => acc+=Number(cur), 0);
    const intSum = intTerms.reduce((acc, cur) => acc+=Number(cur), 0);
    
    // 미지수항은 다시 x를 포함하도록 변환
    // 1이면 그냥 x로 변환
    // 0이면 빈 문자로 변환
    if (unknownSum > 0) {
        if (unknownSum === 1) unknownSum = 'x';
        else unknownSum += 'x';
    }
    else unknownSum = '';
    
    // 둘 다 0이 아닐 때
    if (intSum > 0 && unknownSum.length > 0) {
        return `${unknownSum} + ${intSum}`;
    }
    
    // 하나가 0인 경우 나머지 하나를 출력
    else if (intSum === 0 && unknownSum.length > 0) return unknownSum;
    else if (unknownSum.length === 0 && intSum > 0) return String(intSum);
    
    // 둘 다 0인 경우
    return String(0);
}