
let x;
console.log(x);


// const : 상수 선언
const y = '메롱';
console.log(y);

const PI = 3.14159265
const COLOR_GREEN = '#0f0';
/*
  $div.style.background = '#0f0';
*/

// 상수는 객체의 불변성을 유지할 수 있다.
let kim = {
  name : '김철수',
  age : 30
};

// 배열, 객체, 함수 다 객체임, 불변성을 유지해야함 통째로 바뀌면안된다는거임 각자한개말고
const array = {
  0: 'z',
  1: 'dd',
  2:'ddf',
  length: 3 
};
array.length;

// 재할당이 필요한 경우에만 let(for문)을 사용하고 일단은 다 무지성 const 쓰기