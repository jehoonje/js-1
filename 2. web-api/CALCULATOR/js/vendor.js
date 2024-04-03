// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의

const $userInput = document.getElementById("input-number");

const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");

// result 요소노드
const $currentResult = document.getElementById('current-result');

// result에 그려질 숫자
let currentResult = 0;


// ================ 함수 정의 영역 ================= //
// 계산 기능 헬퍼 함수
const calculate = () => {
  // 더하기를 해야 함
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;

  // 2. 결과에 누적
  currentResult += enteredNumber;

  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  

};
