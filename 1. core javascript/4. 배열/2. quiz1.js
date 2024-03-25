

let scores = [83, 99, 100, 57,24,33,59];
let total = 0;

for (let i = 0; i< scores.length; i++ ){
  total+=scores[i];
  
}

var average = total / scores.length;
console.log(`총점 : ${total}점 평균 : ${average}점` );

// 콘솔로그가 for문 안에있어서 순회 반복 내내 점수가 나와버림. 그래서 밖으로 빼야함 위처럼.
