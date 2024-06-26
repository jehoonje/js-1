

// const userList = [
//   {
//     account: "abc1234",
//     userName: "대길이",
//     job: "추노",
//     address: "서울",
//     hobbys: ["수영", "축구", "테니스"],
//     salary: 5400000,
//     age: 35,
//   },
//   {
//     account: "banana",
//     userName: "빠나나",
//     job: "과일",
//     address: "서울",
//     hobbys: ["푸드파이팅", "테니스"],
//     salary: 2700000,
//     age: 18,
//   },
//   {
//     account: "park1234",
//     userName: "주차왕",
//     job: "발렛파킹",
//     address: "경기",
//     hobbys: ["족구", "축구", "테니스", "영화감상"],
//     salary: 3900000,
//     age: 56,
//   },
//   {
//     account: "fire",
//     userName: "불꽃남자카리스마",
//     job: "게이머",
//     address: "서울",
//     hobbys: ["독서", "테니스"],
//     salary: 7900000,
//     age: 42,
//   },
// ];


// function filter(array, condition) {
//   const filteredArray = []; // 필터링된 회원들을 다시 담을 배열
//   for (const user of array) {
//     if (condition(user)) {
//       filteredArray.push(user);
//     }
//   }
//   return filteredArray;
// }

// function map(array, callback) {
//   const mappedArray = [];
//   for (const user of array) {
//     mappedArray.push(callback(user));
//   }
//   return mappedArray;
// }

// console.log('=========================');


// // 
// // 회원정보에서 회원의 주소들만 다 추출해서
// // 배열에 담아줘
// const addressList = map(userList, user => user.address);
// console.log(addressList);

// // 회원의 첫번째 취미들만 다 추출해줘
// const firstHobbyList = map(userList, user => user.hobbys[0]);
// console.log(firstHobbyList);

// // 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// // [ 대길이(abc1234), 빠나나(banana), ... ]
// const myCustomList = map(userList, user => `${user.userName}(${user.account})`);
// console.log(myCustomList);


// console.log('=============================');
// // 서울에 사는 급여가 400만원보다 높은 사람의 이름과 주소만 추출해줘
// const filtered = filter(userList, user => user.address ==='서울' && user.salary > 4000000);
// // console.log(filtered);

// const mapped = map(filtered, user => {
//   return {
//     name: user.userName,
//     addr: user.address
//   }
// });
// console.log(mapped);





// function min(userList, property) {
//   // userList가 비어있으면 null을 반환
//   if (userList.length === 0) {
//     return null;
//   }

//   let minValueUser = userList[0]; // 최소값을 가진 객체를 첫 번째 사용자로 초기화

//   // userList를 순회하면서 주어진 속성의 최소값을 찾음
//   for (const user of userList) {
//     if (user[property] < minValueUser[property]) {
//       minValueUser = user;
//     }
//   }

//   return minValueUser;
// }


// function find(callback) {
//   for (const user of userList) {
//     if (callback(user)) {
//       return user;
//     }
//   }
//   return undefined;
// }

// function some(callback) {
//   for (const user of userList) {
//     if (callback(user)) {
//       return true;
//     }
//   }
//   return false;
// }

// function every(callback) {
//   for (const user of userList) {
//     if (!callback(user)) {
//       return false;
//     }
//   }
//   return true;
// }

// const userList = [
//   {
//     account: 'abc1234',
//     userName: '대길이',
//     job: '추노',
//     address: '서울',
//     hobbys: ['수영', '축구', '테니스'],
//     salary: 5400000,
//     age: 35,
//   },
//   {
//     account: 'banana',
//     userName: '빠나나',
//     job: '과일',
//     address: '서울',
//     hobbys: ['푸드파이팅', '테니스'],
//     salary: 9700000,
//     age: 18,
//   },
//   {
//     account: 'park1234',
//     userName: '주차왕',
//     job: '발렛파킹',
//     address: '경기',
//     hobbys: ['족구', '축구', '테니스', '영화감상'],
//     salary: 3900000,
//     age: 56,
//   },
//   {
//     account: 'fire',
//     userName: '불꽃남자카리스마',
//     job: '게이머',
//     address: '서울',
//     hobbys: ['독서', '테니스'],
//     salary: 7900000,
//     age: 42,
//   },
// ];


// console.log('최소 salary를 가진 사용자:', min(userList, 'salary'));
// console.log('최소 age를 가진 사용자:', min(userList, 'age'));


// // '서울'에 사는 첫 번째 사용자를 찾는 예시
// const firstUserInSeoul = find((user) => user.address === '서울');
// console.log('서울에 사는 첫 번째 사용자:', firstUserInSeoul);

// // 급여 5,000,000 이상인 사용자가 하나라도 있는지 확인하는 예시
// const hasHighEarningUser = some((user) => user.salary >= 5000000);
// console.log('급여가 5,000,000 이상인 사용자가 있는가?:', hasHighEarningUser);

// // 모든 사용자가 '서울'에 사는지 확인하는 예시
// const allUsersInSeoul = every((user) => user.address === '서울');
// console.log('모든 사용자가 서울에 사는가?:', allUsersInSeoul);




// // 여러개를 찾으면 배열객체집합형으로 한개를 찾는거면 필요없음