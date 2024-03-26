
// 객체 생성
// 우리 집 강아지 정보 저장

// let name = '뽀삐';
// let kind = '진돗개';
// let age = 3;
// let injection = true;
// let favorite = ['산책', '간식'];
// let bark = () => console.log('왈왈');

// var dog = [
//   '뽀삐',
//   '진돗개',
//   3,
//   true,
//   ['산책', '간식'],
//   () => console.log('왈왈'),
// ];


let dog = {
  name: '뽀삐',
  kind: '진돗개',
  age: 3,
  injection: true,
  favorite: ['산책', '간식'],
  bark: () => console.log('왈왈'),
};

console.log(dog.name);
console.log(dog.favorite);

// 객체라서 순서 바뀌어도 됨.


// 우리 집 고양이 정보 저장

let cat = {
  name: '콩순이',
  kind: '코숏',
  age: 2,
  injection: true,
  favorite: ['낮잠', '방 어지르기'],
  hate: '뽀삐'  // 객체안에 객체 추가가능 
};

console.log(dog.name);
console.log(cat.name);

let 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: 'abc',
    닉네임: '깜찍이',
    가입일자: '2023-12-12'
  },
  글내용: '하ㅏ라라라',
  작성일자: '2024-03-26'
}


console.log('=========================');

// 객체에 저장된 데이터 참조(조회)

console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);

// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++
!dog.injection
dog.favorite.push('꼬리흔들기');
cat.favorite.splice(0, 1);

dog.favorite.slice(0);
dog.favorite.splice(1,1);
dog.favorite.reverse();
console.log(dog.favorite);


// 객체를 참조하는 두번째 방법
console.log('============================');

let key = 'name';
console.log(dog.name);
console.log(dog['name']);
console.log(dog[key]);
// console.log(dog[name]); 안됨

// 프로퍼티 수정
console.log('===========================');

dog.age =4;
cat.favortie[1] = '실뭉치';

console.log(dog);
console.log(cat);

// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
console.log('============================');

cat.friend = '철수';

console.log(cat);


// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;

console.log(cat);
