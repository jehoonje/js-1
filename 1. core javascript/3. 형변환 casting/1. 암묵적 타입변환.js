


var n1 = 10;
var n2 = '20';

console.log(n1 + n2);  // 문자+문자=로 변환 1020


let n3 = n1 + '';
console.log(typeof n3);  // n3 문자로 변환

let n4 = n2 - n1 - 5 - '3'; // 문자가 숫자로 변환 
console.log(n4);


let n5 = n1 * n2; //
console.log(n5); // 암묵적 타입변환은 자바스크립트 만의 수정문법이다.


let n6 = 'hello' * 3; 
console.log(n6); // NaN : 연산을 할수 없다. not a numbrer. 따옴표안에 숫자가 아닌 다른것이 있으면 안된다 .( 파이썬은 됨 )

console.log('=========================');

let n7 = +'99';   // number로 변환
console.log(true + true);
console.log(false + true);
console.log(false + false);

console.log('========================');

while (1) {

}  // 자바에서 만드는 무한루프 방식.
// C언어에서는 true 는 1 이다. 논리로봄. c+ 부터 true 나옴

// falsy : 0, '', null. undefined, NaN   이 5개 빼면 모두 true이다. //

if (true) console.log ('hello-1');
if (false) console.log ('hello-2');
if (0) console.log ('hello-1');
if ('') console.log ('hello-2');
if (null) console.log ('hello-3');
if (undefined) console.log ('hello-4'); // 전부 false이다~
if (NaN) console.log ('hello-5');

if(99) console.log('hello-6');
if(-87.876) console.log('hello-7');  // 전부 트루이다~~
if(`알룡`) console.log('hello-8');
if (' ') console.log('nello-9');
if ([10,20,30]) console.log('hello-10');
if ([]) console.log('hello-10'); 
if ({ kind : '개' }) console.log('hello-12');
if (function() {}) console.log('hello-13');


for (let i = 1; i <= 10; i++) {
  if (n % 2 === 0) {
    console.log(`S{i}는 짝수입니다`);
  } else {
    console.log(`S{i}는 홀수입니다`);
  }
}


let apple = 10;
if (apple> 0) {
  console.log('사과가 있습니다');
} else {
  console.log('사과가 없습니다');
}


let n = 20
let flag = n > 10;

if (!flag) {

}

