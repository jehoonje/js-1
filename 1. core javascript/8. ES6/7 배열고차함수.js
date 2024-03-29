function myForEach(array, callback) {
  for (const x of array) {
    Callback(x);
  }
}








// 배열 고차함수
// forEach() : 배열의 요소를 순회
// for (user of userList) {
//   console.log(`내 이름은 ${user.userName} 이구요~ ${user.address}에 살아요~`);
// }

userList.forEach(user => 
  console.log(`제 이름은 ${user.userName} 이구요~ ${user.address}에 살아요~`
  ));


let total = 0;
[10, 20, 30].forEach(n => { 
  total += n;
});
console.log(`total: ${total}`);



console.log('==========================');

// filter: 조건에 맞는 배열안의 요소를 필터링
const numbers = [1,2,3,4,5,6,7,8,9,10];

const filteredArray = numbers.filter(n => n % 2 === 0);
console.log(filteredArray);


// 회원목록에서 이름이 3글자인 회원들을 필터링해줘
const filteredUserList 
  = userList.filter(user => user.userName.length === 3);
console.log(filteredUserList);


// map: 배열에서 특정 데이터들을 추출해서 새로운배열에 매핑
console.log('============================');
//   뭐를 => 뭐해서 

// filter => 10개의 데이터를 필터링하면 10개 이하로 남음
        // ex) 10명 중 서울사는애들 필터링! -> 3명만 남음
// map ==> 10개의 데이터를 매핑하면 항상 10개짜리 배열이 나옴 
        // ex) 10명의 회원정보 중 이름정보만 10개 가져와  // 필터에 햇던거에 배열푸쉬해주면맵핑

const mappedNumbers = numbers.map(n => `<li class="list-item">$<n></li>`);
console.log(mappedNumbers);


// 회원목록에서 회원의 나이를 추출해서 xx세로 매핑
const mappedUsers = userList.map(user => `${user.age}세`);
console.log(mappedUsers);

// 회원목록에서 회원 이름과 회원의 나이와 회원의 주소를 추출할건데
// 이름의 키값을 nickname, 나이는 old, 주소는 addr로 하고싶음

const mappedUserList = userList.map(user => {
  return {nickName: user.userName,
  old: user.age,
  addr: user.address
  };
});
console.log(mappedUserList);





const triple = numbers.find(n => n % 3 === 0); 
console.log(`triple: ${triple}`);

const twenty = userList.find(user => user.age >= 50 && user.age < 60);
console.log(twenty);

