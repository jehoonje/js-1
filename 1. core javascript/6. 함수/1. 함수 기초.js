
console.log(`김철수님 안녕하세요! 방가방가!!`);
console.log('오늘도 즐거운 하루되세요!!');

// 코드 100줄 정도 작성..\\



console.log(`박영희님 안녕하세요! 방가방가!!`);
console.log('오늘도 즐거운 하루되세요!!');

// 코드 500줄 정도 작성..\\



// 함수 정의 ( 만든다 ) (관례적으로 동사로 지음) (소괄호 중괄호 필수) (이런식으로 하는걸 코드의 모듈화 라고함)
function sayHello (userName) {
  console.log(`${userName}님 안녕하세요! 방가방가!!`);
  console.log('오늘도 즐거운 하루되세요!!');
}

// 함수 호출 (사용한다 ) ( call function ) ( define function ) ( 아무대서나 사용가능 if안에도 가능)
sayHello('둘리');

console.log('===========================');

sayHello('잔망루피');

function makeLine() {
  console.log('===========================');
}
makeLine();
sayHello('a')
makeLine();
sayHello('c')
makeLine();
sayHello('v')
makeLine();

// 나의 프로그램에서는 원의 넓이를 자주 구함
const PI =3.1459265;

// 반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
  return PI * r ** 2;
}


// 반지름이 5인 원의 넓이
var circle1 = calcAreaCircle(5);
console.log(circle1);




// 반지름이 17인 원의 넓이
var circle2 = calcAreaCircle(17);
console.log(circle2);



// 게시글을 삭제하는 함수
function removeBoardArticle() {


}