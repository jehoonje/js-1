// 무한루프 : 특정 구간이 되면 break 먹이기 위해 사용
// while : 횟수가 정해지지 않았을 때
// for : 횟수가 정해져있을 때

// 1 ~ 100 사이의 랜덤 정수
// random() * (y - x + 1) + x




while (true) {
  var rn = Math.floor(Math.random() * 10)  + 1;
  console.log('hello');
  if (rn === 7) break;
}

console.log('반복문 종료!!');



