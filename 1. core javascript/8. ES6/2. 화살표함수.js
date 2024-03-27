
// //// 함수 선언식
// function add(n1, n2) {
//   return n1 + n2;
// }




// ///// 함수 표현식
// const add = function (n1, n2) {
//   return n1 + n2;
// };




///// 화살표 함수    // 중괄호(한줄일때), 리턴 제거가능(한줄일떄)
const add = (n1, n2) => n1 + n2;

const r1 = add(10, 20);
console.log(`r1: ${r1}`);


const sayHello = () => console.log('안녕하세요');

sayHello();

const kim = {
  name: '김철수',
  greeting: sayHello, 
  dance: () => console.log('춤을 신나게 춥니다.')
};

kim. greeting();
kim.dance();


// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 pow 작성해보세요.


// 파라미터 n <= 이거 이부분 () 안에원래있는데 저렇게 한개만있으면 소괄호 삭제가능
const pow = n => n ** 2;
console.log(pow(3));

