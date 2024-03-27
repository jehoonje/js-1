//question
//그럼 콜백은 나중에 함수가 있는걸 가져오면 코드는 위에서부터 읽는데도 읽히는건가?




// 어떤 계산을 하는 함수
function operate(param) {
  console.log(`param = ${param}`);

  const x = param(10, 20);

  console.log('계산기 작동!!');
  const n1 = 10, n2 =20;
  const result = param(n1,n2);
  return result;
}

function add(n1,n2) {
  return n1 + n2;
}

// operate 호출 -> 다른 이름이 없는 함수를 전달함
const result = operate(function(n1, n2) {
  return n1 + n2;
});

console.log(`result: ${result}`);


// 경우의 수가 많기때문에 쓰는 게 콜백