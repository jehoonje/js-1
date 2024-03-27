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

function min(userList, salary) {
  if (userList.length === 0) {
    return null; // userList가 비어있을 경우 null을 반환
  }

  let minUser = userList[0]; // 최소값을 저장할 변수를 첫 번째 요소로 초기화
  for (let i = 1; i < userList.length; i++) {
    if (userList[i][salary] < minUser[salary]) {
      minUser = userList[i]; // 현재 요소의 property 값이 최소값보다 작으면 최소값을 업데이트
    }
  }
  return minUser; // 최소값을 가진 사용자 객체 반환
}

// 회원정보에서 회원들의 이름들만 다 추출해서
// 배열에 담기

const nameList = map((user) => user.userName);
console.log(nameList);

// 회원정보에서 회원의 주소들만 다 추출해서
// 배열에 담아줘

const addressList = map((user) => user.address);
console.log(addressList);

// 회원의 첫번째 취미들만 다 추출
const firstHobbyList = map((user) => user.hobbys[0]);
console.log(firstHobbyList);

// 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// [대길이(abc1234), 빠나나(banana), ... ]

const everyNameAndIdList = map((user) => `${user.userName} (${user.account})`);
console.log(everyNameAndIdList);



console.log('최소 salary를 가진 사용자:', min(userList, 'salary'));
console.log('최소 age를 가진 사용자:', min(userList, 'age'));