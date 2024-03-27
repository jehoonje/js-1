/*
Q1. 아래 문제를 각각 풀어보세요.
1. 빈 객체 user를 만듭니다.
2. user에 키가 name, 값이 John인 프로퍼티를 동적 추가하세요.
3. user에 키가 surname, 값이 Smith인 프로퍼티를 동적 추가하세요.
4. name의 값을 Pete로 수정해보세요.
5. user에서 프로퍼티 name을 삭제하세요.
*/

// let user = {
// };

// user.name = 'John';
// console.log(user);
// user.surname = 'Smith';
// console.log(user);
// user.name = 'Pete';
// console.log(user);
// delete user.name;
// console.log(user);










































/*
Q2. 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.
var salaries = {
  kim: 1000000,
  park: 1600000,
  lee: 1300000
}
- 모든 팀원의 월급을 합한 값을 구하고, 
  그 값을 변수 total에 저장해주는 코드를 작성해보세요. 
  total엔 3900000이 저장되어야겠죠?
*/

// var salaries = {
//   kim: 1000000,
//   park: 1600000,
//   lee: 1300000
// }

// var total = salaries.kim + salaries.park + salaries.lee;
// console.log(total);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 강사님      /////////// ///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
var total = 0;
for ( var x in satisfies) {
  total += satisfies[x];
}





// Quiz2

/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
  아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
  "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
  "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/


// var user = {
//   kim1234:'kkk1234',
//   lee4567:'lll4567',
//   park9876:'ppp9876'
// }

// var userInfo = {
//   userList: [{
//           account: 'kim1234',
//           password: 'kkk1234',
//           username: '김두한'
//       },
//       {
//           account: 'park9876',
//           password: 'ppp9999',
//           username: '박찬호'
//       },
//       {
//           account: 'hong7766',
//           password: 'hhh1234',
//           username: '홍길동'
//       },
//   ]
// };




// //체크 비밀번호 변수
var checkPassword = [];
//비밀번호 체크
for (var pass of userInfo.userList) {
  checkPassword.push(pass.password);
}


// 사용자에게 아이디 입력 받기

while(true) {
  var userInputId = prompt('아이디를 입력하세요.');
  if (userInputId in user) {
    // 아이디가 존재하면 비밀번호 받기
    var userInputPassword = prompt('비밀번호를 입력하세요');

    // 비밀번호가 존재하는지 확인
    if (checkPassword.includes(userInputPassword)) {
      alert('로그인에 성공하였습니다.');
      break;

    // 일치 하지 않는 경우
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
    // 아이디가 존재하지 않는 경우
  } else {
    alert('아이디가 존재하지 않습니다.');
  } 
}






////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////  강사님 //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
  아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
  "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
  "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/


var userInfo = {
  userList: [
    {
      account: 'kim1234',
      password: 'kkk1234',
      username: '김두한',
    },
    {
      account: 'park9876',
      password: 'ppp9999',
      username: '박찬호',
    },
    {
      account: 'hong7766',
      password: 'hhh1234',
      username: '홍길동',
    },
  ],
};

// 위 객체에서 배열만 추출
var userList = userInfo.userList;

while (true) {
  // 계정을 입력받고 해당 계정이 존재하는 계정인지를 확인
  var inputAccount = prompt('아이디를 입력하세요~'); // 사용자 입력한 계정명

  // 회원목록 배열을 반복순회하여 입력한 계정명과 일치하는 계정이 있는지 체크
  var foundUser = null;
  for (var user of userList) {
    if (inputAccount === user.account) {
      foundUser = user;
      break;
    }
  }

  if (foundUser !== null) {
    // console.log('일단 너 회원가입했네?');
    // 비번 검증
    // 사용자에게 비번 입력받기
    var inputPassword = prompt('비번을 입력하세요~');
    if (inputPassword === foundUser.password) {
      alert(`${foundUser.username}님 로그인 성공!!`);
      break;
    } else {
      alert('비번이 틀려써~~ ㅋ');
    }
  } else {
    alert('가입부터 하지?');
  }
}
