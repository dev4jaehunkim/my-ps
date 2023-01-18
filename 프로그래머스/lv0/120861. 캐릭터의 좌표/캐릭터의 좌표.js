function solution(keyinput, board) {
    /*
    - board의 x 길이가 11이라면 0이 1칸을 차지하고, 왼쪽으로 -5칸, 오른쪽으로 5칸까지 가능
    - board의 크기를 벗어난 이동 명령은 무시됨
        => 전달된 board의 값을 2로 나누고 나머지를 버리면, 이동할 수 있는 최대 범위를 구할 수 있음
    - keyinput 배열에 입력된 명령을 차례로 실행
    */
    var answer = [0,0];

    const maxPositiveX = Math.floor(board[0]/2);
    const maxNegativeX = -(Math.floor(board[0]/2));
    const maxPositiveY = Math.floor(board[1]/2);
    const maxNegativeY = -(Math.floor(board[1]/2));

    for (inputedKey of keyinput) {
        switch (inputedKey) {
            case 'left':
                answer[0] > maxNegativeX ? answer[0]-- : {};
                break;
            case 'right':
                answer[0] < maxPositiveX ? answer[0]++ : {};
                break;
            case 'up':
                answer[1] < maxPositiveY ? answer[1]++ : {};
                break;
            case 'down':
                answer[1] > maxNegativeY ? answer[1]-- : {};
                break;
            default:
                break;
        }
    }
    
    // 이동을 모두 마친 후에 현재 위치
    return answer;
}