// Q. 정수 배열 numbers 가 주어집니다. numbers 에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든
// 수를 배열에 오름차순으로 담아 반환하는 solution() 함수를 완성하세요
// 제약 조건
// numbers의 길이는 2 이상 100 이하 입니다.
// numbers의 모든 수는 0 이상 100 이하 입니다.

function solution(numbers) {
    let answer = [];

    // 두 개의 숫자를 더하는 모든 경우의 수 계산
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    // 중복 제거 및 오름차순 정렬
    answer = Array.from(new Set(answer)).sort((a, b) => a - b);

    return answer;
}

// 테스트 케이스
console.log(solution([2, 1, 3, 4, 1])); // [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7]));    // [2, 5, 7, 9, 12]