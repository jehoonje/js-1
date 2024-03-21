
// 1 -> 2 -> 3 -> 4 -> 2 -> 3 -> 4 -> 2(false) -> End

var i = 1; // 1. begin
while ( i <= 5 ) {  // 2.end
  console.log('hello');  // 3. execute
  i++;  //  4. step
}













var i = 1;

for (var i = 1; i <= 5; i++) {
  console.log('hello');
  
}

// 가독성의 장점
// 횟수를 모를 때 보통 while
// 횟수가 정해졌을 때 보통 for 사용




// ex) 1~ 10 누적합
var total = 0;  // 반복문 바깥 쪽에 위치해야함.
for (var i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);

// 횟수 지정 반복문     // 0에서 미만사용( < ) 카운트 서양식 카운트
for (var i = 0; i < 5; i++) {
  console.log('메롱');
}