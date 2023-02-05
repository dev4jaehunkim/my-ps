function solution(numbers) {
    numbers = numbers.sort((a,b) => a-b);
    const len = numbers.length;
    return numbers[len-2] * numbers[len-1];
}