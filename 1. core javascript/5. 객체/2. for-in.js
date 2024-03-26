let phone = {
  company: "삼성",
  color: "펄 화이트",
  model: "갤럭시 S24 Ultra",
  price: 1200000,
};

// for in 문은 for of문과 달리 값이 아닌 키가 반복됨
for (let data in phone) {
  console.log(data);
  // console.log(phone.data);
  // key가 문자열이면 [] 대괄호 문법을 써야한다.
  console.log(phone[data]);
  // console.log(typeof data);
}

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하고 싶음
console.log('===========================');
console.log('model' in phone);
//ex)  부정 조건문 만들 때 괄호 밖에 ! 두기.
// phone.memory = '22GB'; 기존에 요소가 있었으면 변화없음
// if (!('memory' in phone)) {
//   phone.memory = '32GB';
// }

console.log(phone);

let newkey = 'memory';
if (!('newkey' in phone)) {
  phone[newkey] = '32GB';    // 문자열이라 대괄호 
}
console.log(phone);
