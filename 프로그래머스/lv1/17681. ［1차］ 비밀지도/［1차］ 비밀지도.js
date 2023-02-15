function solution(n, arr1, arr2) {
    var answer = [];
    
    // 배열의 길이(n)만큼 10진수를 2진수로 해독한다.
        // 예를 들어 9(10)를 2진수로 해독한다면
            // 배열의 길이가 4인 경우: 1001(2)
            // 배열의 길이가 5인 경우: 01001(2)
    
    for (let i=0; i<n; i++) {
        // javascript에서 toString 메서드는 인자로 숫자를 전달할 경우 해당 숫자의 진법으로 변환해준다.
            // Number(9).toString(2)
            // -> '1001'
        // 변환된 문자열의 길이가 n과 같다면 냅두고, 짧다면 앞에 0을 붙인다.
            // padStart 메서드 사용(아래 예제는 n이 5일 때)
            // ('1001').padStart(n, '0')
            // -> '01001'
        const map1 = arr1[i].toString(2).padStart(n, '0');
        const map2 = arr2[i].toString(2).padStart(n, '0');
        
        // 전체 지도는 OR 연산으로 구할 수 있다.
            // arr1:    1 0 1 0 0
            // arr2:    0 0 0 0 1
            // union:   1 0 1 0 1
        // 문자열로 OR 연산 시 원하는 결과와 다를 수 있으니 Number로 형변환
        let unionMap = ''
        for (let j=0; j<n; j++) {
            // 출력 조건을 맞추기 위해 변환
            // 공백 === 0, # === 1
            unionMap += (Number(map1[j]) || Number(map2[j])) ? '#' : ' ';
        }
        answer.push(unionMap);
    }
    
    return answer;
}