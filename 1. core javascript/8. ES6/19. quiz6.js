const traders = [
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2024,
    value: 500000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: '뽀로로',
      city: '부산',
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2025,
    value: 150000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2023,
    value: 120000,
  },
];










// 1 모든 거래의 평균 거래액을 계산하세요.
// function calculateAverage(traders) {
//   // reduce()를 사용하여 총 거래액을 계산
//   const totalTradeValue = traders.reduce((total, trader) => {
//     return total + trader.value; // 각 거래의 거래액을 누적하여 총 거래액 계산
//   }, 0);

//   // 평균 거래액 계산
//   const average = totalTradeValue / traders.length;

//   return average;
// }

// // 함수 호출하여 평균 거래액 계산
// const averageTradeValue = calculateAverage(traders);
// console.log(averageTradeValue);

// // 예상 출력 형태: 숫자 (평균 거래액)
// // 2022년과 2023년에 대전에서 발생한 거래의 총 거래액을 각각 계산하는 함수
// const calculateCityTotalValue = (traders, city, year) => {
//   const cityTotalValue = traders.reduce((total, currentValue) => {
//     // 현재 거래의 도시와 연도를 확인하여 대전에서 발생한 2022년 또는 2023년 거래인지 검사
//     if (currentValue.trader.city === city && (currentValue.year === 2022 || currentValue.year === 2023)) {
//       total += currentValue.value; // 대전에서 발생한 거래의 총 거래액 누적
//     }
//     return total;
//   }, 0); // 초기값은 0으로 설정하여 누적할 총 거래액을 나타냄

//   return cityTotalValue;
// };

// // 함수 호출하여 각 연도별 대전에서 발생한 거래의 총 거래액 계산
// const totalValue2022 = calculateCityTotalValue(traders, '대전', 2022);
// const totalValue2023 = calculateCityTotalValue(traders, '대전', 2023);

// console.log("2022년 대전에서 발생한 거래의 총 거래액:", totalValue2022);
// console.log("2023년 대전에서 발생한 거래의 총 거래액:", totalValue2023);

// 예상 출력 형태: 객체 {2022: 숫자, 2023: 숫자}

// 예상 출력 형태: 객체 {trader: {name: 문자열, city: 문자열}, year: 숫자, value: 숫자}
// 4 모든 거래자의 이름을 알파벳 순으로 정렬하여 출력하세요.
// const sortedTradersByAbc = traders.map(trader => trader.trader.name).sort((a, b) => {
//   // 이름을 비교하여 정렬
//   if (a < b) return -1; // a가 b보다 작으면 -1 반환하여 a를 앞으로 정렬
//   if (a > b) return 1; // a가 b보다 크면 1 반환하여 b를 앞으로 정렬
//   return 0; // 같으면 0 반환하여 순서 변경 없음
// });

// console.log(sortedTradersByAbc);

// 예상 출력 형태: 배열 [문자열1, 문자열2, ...]
// 5 거래액이 500000원 이하인 거래 중 가장 최근에 발생한 거래의 연도를 출력하세요.
// const recentTrsYear = traders
//       .filter(trs => trs.value <= 500000)
//       .reduce((recentYear, trs) => {
//         if (recentYear < trs.year) {
//           return trs.year;
//         } else {
//           return recentYear;
//         }
//       }, 0);
//       console.log(recentTrsYear);
// 예상 출력 형태: 숫자 (최근 거래 연도)
// 6 각 거래자가 거래한 총 거래 횟수를 오름차순으로 정렬하여 출력하세요.

// 예상 출력 형태: 배열 [{name: 문자열, count: 숫자}, ...]
// 7 2022년에 발생한 거래 중 거래액이 가장 큰 거래의 거래자 이름을 출력하세요.

// 예상 출력 형태: 문자열 (거래자 이름)
// 8 2023년에 발생한 거래 중 거래액이 가장 작은 거래의 상세 정보를 출력하세요.

// 예상 출력 형태: 객체 {trader: {name: 문자열, city: 문자열}, year: 숫자, value: 숫자}
// 9 각 도시별로 발생한 거래의 평균 거래액을 객체 형태로 매핑하세요.

// 예상 출력 형태: 객체 {도시1: 숫자1, 도시2: 숫자2, ...}
// 10 각 거래의 거래액을 10000으로 나눈 뒤 소수점을 버린 값으로 각 거래의 부가가치세를 계산하세요.
// - 예상 출력 형태: 배열 [숫자1, 숫자2, ...]