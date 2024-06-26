
// createCounter라는 클로저함수를 만드세요
// 파라미터로 전달받은 숫자부터 시작하고 반환받은 헬퍼함수를 작동하면
// 해당 숫자부터 카운트가 증가합니다.

// const counterFromFive = createCounter(5);
// console.log(counterFromFive()); // 6
// console.log(counterFromFive()); // 7


// // no 1
// const counterFromFive = () => {
//   let count = 5; // 지역변수

//   const helper = () => ++count;

//   return helper;
// };

// const createCounter = counterFromFive(5);

// console.log(createCounter());
// console.log(createCounter());
// console.log(createCounter());
// console.log(createCounter());




// // no.2


// const createCalculator = () => {
//   let total = 0;
//   return {
//     add: num => total += num,
//     subtract: num => total -= num,
//     getTotal: () => total
//   };
// };



// // createCalculator를 호출하면 반환되는 헬퍼함수는 
// // 3가지의 기능을 갖고 있는데 add는 더하기 기능을 수행
// // substract는 빼기 기능을 수행 getTotal은 현재 값을 가져옴

// const calculator = createCalculator();
// console.log(calculator.add(5)); // 5
// console.log(calculator.subtract(2)); // 3
// console.log(calculator.add(14)); // 17
// console.log(calculator.add(21)); // 38
// console.log(calculator.subtract(29)); // 9
// console.log(calculator.getTotal()); // 9




/////////////////////// 내가 퍼온 gpt문제 ////


const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];

// 특정 색깔 사과 개수 세기:

// 주어진 appleBasket 배열에서 특정 색깔의 사과가 몇 개 있는지 세는 함수를 작성하세요. 
// 예를 들어, 녹색 사과의 개수를 세는 함수를 작성하세요.



const countGreenApples = appleBasket.reduce((count, apple) => {
  if (apple.color === 'green') {
    count++;
  }
  return count;
}, 0);

console.log(`Number of green apples: ${countGreenApples}`);


// 사탕 같은 달콤한 사과 찾기:
const sweetestApple = appleBasket.reduce((sweetest, apple) => {
  
  if (apple.sweet > sweetest) {
    return apple;
  } else {
    return sweetest;
  }
}, appleBasket[0]);
console.log(sweetestApple);

// 주어진 appleBasket 배열에서 달콤한 정도가 특정 기준을 넘는 특정 색깔의 사과들의 배열을 반환하는 함수를 작성하세요. 예를 들어, 달콤한 정도가 10을 넘는 빨간색 사과들을 찾는 함수를 작성하세요.
// 색깔별 평균 달콤함 계산하기:

const filteredFruits =
            appleBasket.filter(apple => apple.sweet > 10 );
            console.log(filteredFruits);
// 주어진 appleBasket 배열에서 특정 색깔의 사과들의 평균 달콤함을 계산하는 함수를 작성하세요. 예를 들어, 녹색 사과들의 평균 달콤함을 계산하는 함수를 작성하세요.
// 가장 달콤한 사과 찾기:
let count = 0; // 녹색 사과의 개수를 세는 변수를 초기화합니다.

const reducedApple = appleBasket.reduce((total, apple) => {
    if (apple.color === 'green') {
      total += apple.sweet; // 녹색 사과의 달콤함을 누적합니다.
      count++; // 녹색 사과 개수를 세기 위해 count를 증가시킵니다.
    }
    return total; // 수정된 부분: total만 반환합니다.
}, 0); // 초기값으로 누적값을 0으로 설정합니다.

const avgApple = reducedApple / count; // 평균을 구하기 위해 count로 나눕니다.
console.log(avgApple);
// 주어진 appleBasket 배열에서 특정 색깔의 가장 달콤한 사과의 객체를 반환하는 함수를 작성하세요. 예를 들어, 빨간색 사과 중에서 가장 달콤한 사과를 찾는 함수를 작성하세요.

const appRed = appleBasket.reduce((total, apple) => {
    if (apple.color === 'red' && apple.sweet > total.sweet) {
      return apple
    } else {
      return total;
    }
});

console.log(appRed);
// 사과 정렬하기:

// 주어진 appleBasket 배열을 달콤함을 기준으로 오름차순으로 정렬하는 함수를 작성하세요.

// 달콤함을 기준으로 사과를 정렬합니다.        기준
const appleSort = appleBasket.sort((a, b) => a.sweet - b.sweet);

// 정렬된 사과를 출력합니다.
console.log(appleSort);

