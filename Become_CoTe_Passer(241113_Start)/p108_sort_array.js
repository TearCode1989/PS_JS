// Q. 정수 배열을 정렬해서 반환하는 solution() 함수를 완성하세요.
// 입력 [1,-5,2,4,3] , [2,1,1,3,2,5,4], [6,1,7], [1,10,5,3,100], [-1,10,-5,3]

let answer = [];

function solution(array) {
    answer = array.sort((a, b) => a - b);

    // answer2 = array.sort();
    // answer3 = array.sort((a, b) => b - a);

    return answer;
}

let a = solution([1,-5,2,4,3]);
let b = solution([2,1,1,3,2,5,4]);
let c = solution([6,1,7]);
let d = solution([1,10,5,3,100]);
let e = solution([-1,10,-5,3]);

console.log(`a 은(는) ${a} 입니다.`);
console.log(`b 은(는) ${b} 입니다.`);
console.log(`c 은(는) ${c} 입니다.`);
console.log(`d 은(는) ${d} 입니다.`);
console.log(`e 은(는) ${e} 입니다.`);

// 자바스크립트의 sort() 메서드는 아무런 조건을 전달하지 않고 실행하면 데이터가 문자열이라고 가정하고 정렬한다.

// Q1. sort 함수를 이용해서 생길 수 있는 문제점에 대해서 말할 수 있나요?
// Q2. sort 함수의 단점을 보완하는 sort 함수에 대해서 알고 있나요?