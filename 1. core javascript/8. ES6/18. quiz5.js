
// createCounter라는 클로저함수를 만드세요
// 파라미터로 전달받은 숫자부터 시작하고 반환받은 헬퍼함수를 작동하면
// 해당 숫자부터 카운트가 증가합니다.

// const counterFromFive = createCounter(5);
// console.log(counterFromFive()); // 6
// console.log(counterFromFive()); // 7


// no 1
const counterFromFive = () => {
  let count = 5; // 지역변수

  const helper = () => ++count;

  return helper;
};

const createCounter = counterFromFive(5);

console.log(createCounter());
console.log(createCounter());
console.log(createCounter());
console.log(createCounter());




// no.2


const createCalculator = () => {
  let total = 0;
  return {
    add: num => total += num,
    subtract: num => total -= num,
    getTotal: () => total
  };
};



// createCalculator를 호출하면 반환되는 헬퍼함수는 
// 3가지의 기능을 갖고 있는데 add는 더하기 기능을 수행
// substract는 빼기 기능을 수행 getTotal은 현재 값을 가져옴

const calculator = createCalculator();
console.log(calculator.add(5)); // 5
console.log(calculator.subtract(2)); // 3
console.log(calculator.add(14)); // 17
console.log(calculator.add(21)); // 38
console.log(calculator.subtract(29)); // 9
console.log(calculator.getTotal()); // 9




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



const countByColor = appleBasket.reduce((count, apple) => {

  if (apple.color in count) {
    if (apple === 'green'){count[apple.color]++;
    
    }else {
      count[apple.color] = 1;
    }
  }
  return count;
}, {})

console.log(countByColor);



// 사탕 같은 달콤한 사과 찾기:

// 주어진 appleBasket 배열에서 달콤한 정도가 특정 기준을 넘는 특정 색깔의 사과들의 배열을 반환하는 함수를 작성하세요. 예를 들어, 달콤한 정도가 10을 넘는 빨간색 사과들을 찾는 함수를 작성하세요.
// 색깔별 평균 달콤함 계산하기:

// 주어진 appleBasket 배열에서 특정 색깔의 사과들의 평균 달콤함을 계산하는 함수를 작성하세요. 예를 들어, 녹색 사과들의 평균 달콤함을 계산하는 함수를 작성하세요.
// 가장 달콤한 사과 찾기:

// 주어진 appleBasket 배열에서 특정 색깔의 가장 달콤한 사과의 객체를 반환하는 함수를 작성하세요. 예를 들어, 빨간색 사과 중에서 가장 달콤한 사과를 찾는 함수를 작성하세요.
// 사과 정렬하기:

// 주어진 appleBasket 배열을 달콤함을 기준으로 오름차순으로 정렬하는 함수를 작성하세요.