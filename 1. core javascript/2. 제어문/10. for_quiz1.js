/// 문제 1 /// 입력받은 숫자 이하의 2의 제곱수를 가로로 출력

// var limit = +prompt('숫자');
// var str = '';

// for (  var i = 2;   i <= limit;  i*=2) {
//   str += i + ',';
  
// }
// alert(str);



/// 문제 2 ///
// 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력



// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 개수: ${count}개`;

alert(result);
