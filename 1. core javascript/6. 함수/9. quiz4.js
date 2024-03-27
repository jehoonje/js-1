/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
    반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

// 값 만큼 : length

// 함수는 걍 위에 몰아놓기
// ============== 함수 정의 영역 ============//
// =============== 실행 영역 ===========//   이런식으로 나눠

function calcNumbersTotalAndAverage(...numbers) {
  var total = 0;
  var avg = 0;
  for (var n of numbers) {
    total+=n;
  }
  var avg = total / numbers.length;
  
  return {
    total : total,
    avg : avg
  };
}



var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);