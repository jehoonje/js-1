// 실무에서 보통 자료형을 타입이라고 말함

var num = 27;
console.log(typeof num);

console.log(num / 5); // 정수개념이 없기 때문에 여타 언어(자바 등) 과 달리 5.4 가 출력됨.


var foodName = num; // 27
console.log(foodName);
var foodName = 'num' // num         * js에선 ''한개짜리 따옴표 주로 씀
console.log(foodName);

var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>'; // \n 엔터치란 소리 \t 탭치란 소리
console.log(element);

var elem = `
<nav> 
  <ul>
    <li>wawa</li>
  </ul>
</nav>
`
//// `` 쓰면 탈출문자 처리없이 그대로 가능
console.log(elem);

console.log('===================');

var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월' + day + '일은' + anni + '입니다.';

console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`; // `` 백틱 사용
console.log(sentence2);


// boolean : 논리
var userAge = 30;
var flag = userAge > 19;
console.log(typeof flag);
console.log(flag); // true 


// undefined: 아직 값이 없는 상태 ( 고의x )
// null : 일부러 값을 없앤 상태 (고의로 값을 없앰)
var petName;
console.log(petName); // undefined

var myHobby = '산책';
myHobby = null
console.log(myHobby);

function buyNewCar(money){
  if (money > 5000)  return '그랜져';
  else if (money > 3000) return '아반떼';
  else if (money = 0) return null;
} 








-10; // - 단항 연산자
20-10; // - 이항 연산자
