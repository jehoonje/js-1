

// var a = +prompt('1부터 10사이에 숫자 쓰세요');
// var b = +prompt('1부터 10사이에 숫자 쓰세요');
// var c = +prompt('1부터 10사이에 숫자 쓰세요');


// if ( a === b && b === c ) {
//   alert('값이 모두 같습니다');
// } else if (a === b || b === c || c === a) {
//   alert('값이 2개가 같습니다');
// } else {
//   alert('값이 모두 다릅니다');
// }




// // 문제 2 : 두 수의 차이 구하기

// var a = +prompt('1부터 10사이에 숫자 쓰세요');
// var b = +prompt('1부터 10사이에 숫자 쓰세요');

// // 두 수의 차이 절대값으로 구하기
// var diff = (a > b) ? a - b : b - a;
// alert(`두 값의 차이는 ${diff}입니다.`);



// 문제 3 : 3개의 정수 중 최소값 구하기
// var a = +prompt('1부터 10사이에 숫자 쓰세요');
// var b = +prompt('1부터 10사이에 숫자 쓰세요');
// var c = +prompt('1부터 10사이에 숫자 쓰세요');

// min : 최소값을 저장해 놓을 변수
var min = a;
if (b < min) min = a;
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`);
