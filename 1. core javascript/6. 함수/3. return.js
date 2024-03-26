// return은 함수의 탈출문 (종료문)
function add(n1, n2) {
  console.log(`n1: ${n1}, n2: ${n2}`);
  return n1 + n2;
}

// 반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것
var result = add(10, 20) * add(add(1, 4), 2);
console.log(`result: ${result}`);