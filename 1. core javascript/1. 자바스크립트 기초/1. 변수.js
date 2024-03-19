


var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당 (대입)

// = 는 우항에 있는 값을 좌항에있는 공간에 저장한다는 것이다.  ( 수학에서의 '같다' 의미가 아님 )

var multiple = result * 3; // 90
console.log(multiple);

var fruit;
fruit = '자몽';
console.log(fruit);  // undefined : 아직 저장되지 않았다. 정의되지 않았다.
// 초기화 하다 == 값을 집어넣는다. 초기화할 때 var를 붙이지 않는다. 

var food = '볶음밥';
food = '돈까스';
// 처음에 만들 때만 var붙이고, 변경 할 때는 붙이지 않는다. 
console.log(food);


// 변수 이름 규칙
//var 7number;//  (x)
var num7ber; // (o)

// var user name; // (x)
var current_login_user_phone_number; // snake case ( 관례상 js : x )
var currentLoginUserPhoneNumber; // camel case ( js : o )

var apple;
var APPLE;   // 두개는 다른 변수
var Apple;   // 이것도 다른 변수

var myPetName! // 특수문자 (x)
var $myPetName_; // ( 달러, 언더바 o)

// var for; // (x) ( 문법적 기능이 들어간 말 for 은 안된다. 이런 언어를 키워드라고 한다 )
var For; // ( 이건됨 )
var lEt; // ( 이거도 됨 )

var userName;
var userEmail;
var wishFoodName; // 이런 식으로 이름 잘 알아보게 지어야함

var myMoney = 1000; // 값이 변할 만한거 const 쓰면안됨
const $orange = '#ffa808'; // 바뀌면 안되는 거 const 상수
const COLOR_RED = '#F00'; // 대문자로 하면 기억하기 좋고 오타률이 줄어듬.







