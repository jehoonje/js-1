const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 2700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];



function map(condition) {
  const filteredArray = []; // 필터링된 회원들을 다시 담을 배열

  for (const user of userList) {
    if (condition(user)) {
      filteredArray.push(condition(user));
    }
  }
  return filteredArray;
}

function min(userList, n) {
  let minUser = userList[0]; 
  for (let i = 1; i < userList.length; i++) {
    if (userList[i][n] < minUser[n]) {
      minUser = userList[i]; 
    }
  }
  return minUser; 
}




//////// 주성 /////////
// function min(userList, X) {
//   let minUser = userList[0];
//   for (const user of userList) {
//     if (user[X] < minUser[X]) {
//       minUser = user;
//     }
//   }
// }

// // 회원정보에서 회원들의 이름들만 다 추출해서
// // 배열에 담기

// const nameList = map((user) => user.userName);
// console.log(nameList);

// // 회원정보에서 회원의 주소들만 다 추출해서
// // 배열에 담아줘

// const addressList = map((user) => user.address);
// console.log(addressList);

// // 회원의 첫번째 취미들만 다 추출
// const firstHobbyList = map((user) => user.hobbys[0]);
// console.log(firstHobbyList);

// // 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// // [대길이(abc1234), 빠나나(banana), ... ]

// const everyNameAndIdList = map((user) => `${user.userName} (${user.account})`);
// console.log(everyNameAndIdList);



console.log('최소 salary를 가진 사용자:', min(userList, 'salary'));
console.log('최소 age를 가진 사용자:', min(userList, 'age'));


function find(condition) {
  for (const user of userList) {
    if (condition(user)) {
      return user;
    }
  }
  return null;
}

function some(condition) {
  for (const user of userList) {
    if (condition(user)) {
      return true;
    }
  }return null;
}

function every(condition) {
  for (const user of userList) {
    if (!condition(user)) {
      return false;
    }
  }return true;
}
// 콜백 함수에 맵핑은 부수로 올 함수를 도와주는역할 한다 생각하면 됨

// '서울'에 사는 첫 번째 사용자를 찾는 예시
const firstUserInSeoul = find((user) => user.address === '서울');
console.log('서울에 사는 첫 번째 사용자:', firstUserInSeoul);

// // 급여 5,000,000 이상인 사용자가 하나라도 있는지 확인하는 예시
const hasHighEarningUser = some((user) => user.salary >= 5000000);
console.log('연봉이 5,000,000 이상인 사용자가 있는가?:', hasHighEarningUser);

// // 모든 사용자가 '서울'에 사는지 확인하는 예시
const allUsersInSeoul = every((user) => user.address === '서울');
console.log('모든 사용자가 서울에 사는가?:', allUsersInSeoul);