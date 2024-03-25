

let food1 = '짬뽕';
let food2 = '탕수육';
let food3 = '자몽';
let all = `${food1}, ${food2}, ${food3}`;


// 배열 //
// 변수 하나로 여러 데이터 묶어쓸려고
// 데이터 찾기쉽고
// 1열로
// 배열 === 객체(여러데이터가 있는것) === object

let arr = [10, 20 , 30, 40];
console.log(typeof arr);

console.log(arr[1]); // 20

console.log(arr[2] ** 2); // 900


arr[1]  =  999;
arr[3]++;

console.log(arr);

// 배열 데이터 수 확인
console.log(arr.length);

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length - 1]}`);

// 배열데이터 순회 ( 전체 참조 : travis )
console.log('========================');

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// for ~ of 반복문 (배열 전용 반복문) 
let weekDays = ['월','화','수','목','금','토','일'];
console.log('================================');

for (let i = 0; i < weekDays.length; i++) {
  console.log(`${weekDays[i]}요일!!`);
}   // 인덱스 조건걸기 편함 홀수 거르기 라던가

for (let day of weekDays) {
  console.log(`${day}요일!!`);
}  // 자동으로 n 바퀴 돌면서 전체순회를 해서 출력함.

// 배열 생성 관례: 이름 복수형, -List 어미
let fruits = ['자몽', ['딸기'],['오렌지']];
let fruitList = ['자몽', ['딸기'],['오렌지']];
let fruitArray = ['자몽', ['딸기'],['오렌지']];



/////관례 /////
let tags = ['<li>오렌지</li>', 
            '<a href=#>링크</a>', 
            '<h1>로고</h1>',
            '<h2>로고</h2>',
          ];
// 줄 세로로 나열
// 마지막에 콤마