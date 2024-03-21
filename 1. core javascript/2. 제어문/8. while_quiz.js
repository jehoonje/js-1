
/////// 1번 문제 ///////////


var num1 = +prompt('첫번째 양의 정수를 입력!');
var num2 = +prompt('두번째 양의 정수를 입력!');
const num3 = num1

var total = 0;

while (num1 <= num2) {
  total += num1;
  num1++;
}

alert(`${num3} ~ ${num2} 까지의 누적합 ${total}`);





/////// 2번 문제 /////////


// var count = +prompt('정수: '); // 반복문 회전 수
// var mark = ''; // 기호를 누적할 변수

// var i = 1;
// while (i <= count) {
//   if (i % 2 === 1) {
//     mark += '+';
//   } else {
//     mark += '-';
//   }
//   i++;
// }
// alert(mark);


