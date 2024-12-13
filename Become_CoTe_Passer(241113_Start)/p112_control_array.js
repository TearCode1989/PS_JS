// Q. 정수 배열을 하나 받습니다. 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서 반환하는 solution() 함수를 구현하세요.
// 입력 : [4,2,2,1,3,4] , [2,1,1,3,2,5,4] , 출력 : [4,3,2,1] , [5,4,3,2,1]

function solution(array) {
    let answer = [];
    answer = Array.from(new Set(array)).sort((a, b) => b - a);

    return answer;
}


let a = solution([4,2,2,1,3,4]);
let b = solution([2,1,1,3,2,5,4]);

console.log(`a 은(는) ${a} 입니다.`);
console.log(`b 은(는) ${b} 입니다.`);