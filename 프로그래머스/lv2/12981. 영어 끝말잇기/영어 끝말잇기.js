function solution(n, words) {
    // 몇번째 사람인지는 반복문 안에서 현재 인덱스를 n으로 나눠 구할 수 있다.
    // n이 3일 때, 5번째(4번 인덱스) 단어에서 틀렸다면 4 % 3 === 1이 나온다.
        // 몇번째 사람이 틀렸는지는 인덱스가 아니기 때문에 +1을 하면 틀린 사람의 순번을 구할 수 있다.
    // 몇 턴째인지를 구하는 방법은 현재 인덱스+1을 n으로 나누면 된다. (리턴 시에는 정수로)
        // i+1로 하는 이유는 인덱스는 0부터 시작하지만 턴은 1부터 시작하기 때문
    
    // 매 반복 회차마다 검증해야 할 작업은 2가지
         // 1. 단어의 시작 글자가 이전 회차 단어의 끝 글자와 일치하는지
         // 2. 이전 회차에서 중복 여부
    for (let i=1; i<words.length; i++) {
        const currWord = words[i];
        const prevWord = words[i-1];
        if (currWord[0] !== prevWord[prevWord.length-1] ||
           words.slice(0, i).includes(words[i])) return [(i%n)+1, Math.ceil((i+1)/n)]
    }
    return [0,0];
}
// function solution(n, words) {
//     var answer = [];

//     // 순번은 1부터 시작해서 n까지 도달했을 때 다시 1로 돌아가야 함
//     // words 배열을 순회하는 반복문 내부에서 조건에 따라 순번(turn) 변수를 +1씩 증가시키거나, 1로 초기화
//         // turn === n인 경우 로직을 모두 수행한 뒤 n을 1로 초기화하고, 그렇지 않은 경우 n++
    
//     // 매 반복 회차마다 검증해야 할 작업은 2가지
//         // 1. 단어의 시작 글자가 이전 회차 단어의 끝 글자와 일치하는지
//         // 2. 이전 회차에서 중복 여부
//     // 단, 배열의 0번째 요소는 스타트기 때문에 검증 작업을 할 필요가 없으므로 반복문 순회는 1번 인덱스부터 시작
    
//     // 검증 작업에 실패한 경우 해당 단어를 말한 사람과 그 사람이 몇번째로 말한 단어인지 알아야 함
//     // 순번은 turn 변수로 확인 가능
//     // 각 사람이 말한 단어를 의미하는 wordHistory 객체를 만들어 turn을 key로 말했던 내역을 배열 형태로 저장
//         // 몇 번째에서 틀렸는지 length로 확인 가능
    
//     const wordHistory = {}
//     let turn = 1;
    
//     for (let i=1; i<words.length; i++) {
//         // n번 사람이 몇 번째로 말한 단어인지 저장하기 위한 객체
//         if (wordHistory[turn] === undefined) wordHistory[turn] = [];
//         wordHistory[turn].push(words[i]);
//         console.log(wordHistory[turn])
        
//         // 단어가 이미 등장했었을 경우
//         // 단 자신과의 비교는 건너뛰어야 함
// //         for (let j=0; i<=words.length; j++) {
// //             if (i === j) continue;
// //             if (words[i] === words[j]) return [turn, wordHistory[turn].length];    
// //         }
        
//         // 새 단어가 끝나는 단어로 시작하지 않는 경우
//         const currWord = words[i];
//         const prevWord = words[i-1];
//         if (currWord[0] !== prevWord[prevWord.length-1]) return [turn, wordHistory[turn].length];
        
//         // 순번 순환
//         if (turn === n) turn = 1;
//         else turn++;
//     }

//     return [0,0];
// }