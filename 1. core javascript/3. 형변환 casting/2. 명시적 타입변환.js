
let x = '30', y = '40';


let  result = Number(x) + Number(y);

// parseInt는 문자를 순자로 바꿀때 정수로 바꾼다.
// parseDouble 을 사용하면 소수점을 지킬 수 있음.
let result2 = parseInt(x) + parseInt(y)
let result3 = +x + +y ;









console.log(result);
console.log(result2);
console.log(result3); // 셋중에 하나만 쓰면됨

let m = ''+ 10 + 20;
console.log(m); 

let f =''+ false; 

console.log('==========================='); //논리적 명시변환
console.log(Boolean ('hello'));
console.log(Boolean ('null'));
console.log(!!999);
console.log(!!undefined);;


// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
