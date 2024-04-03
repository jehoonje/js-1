// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의

const $userInput = document.getElementById("input-number");

const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");

const $resultCard = document.getElementById("current-result");

// result 요소노드
const $currentResult = document.getElementById("current-result");

// result에 그려질 숫자
let currentResult = 0;
// 계산 로그 요소노드
const $currentCalculation = document.getElementById("current-calculation");
const array = [];
// ================ 함수 정의 영역 ================= //



// 선택된 모든 요소에 CSS 스타일을 적용합니다.
displayCalculationLog = (logText) => {
    const $logEntries = document.querySelector("#logs .log-entries");
    const $logEntry = document.createElement("li");
    $logEntry.classList.add("log-entries__item")
    $logEntry.textContent = logText;
    $logEntries.appendChild($logEntry);
}




// 계산 기능 헬퍼 함수
const calculate = (operator) => {
    
    // 계산 전 값을 백업
    const prevResult = currentResult;
    // 입력창에 입력한 숫자를 읽어와야 함.
    const enteredNumber = +$userInput.value;

    switch (operator) {
        case "+":
            currentResult += enteredNumber;
            break;
        case "-":
            currentResult -= enteredNumber;
            break;
        case "*":
            currentResult *= enteredNumber;
            break;
        case "/":
            currentResult /= enteredNumber;
            break;
        default:
            console.log("Invalid operation");
            break;
    }

    // 화면에 결과를 렌더링
    $currentResult.textContent = currentResult;

    // 계산 로그 생성
    const descriptionLog = `${prevResult} ${operator} ${enteredNumber}`;
    const descriptionLogAll = `${prevResult} ${operator} ${enteredNumber} = ${currentResult}`;
    $currentCalculation.textContent = descriptionLog;
    array.push(descriptionLogAll);
    
    displayCalculationLog(descriptionLogAll);

}

