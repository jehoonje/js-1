console.log();

var user = {
  kim1234:'kkk1234',
  lee4567:'lll4567',
  park9876:'ppp9876'
}

var userInfo = {
  userList: [{
          account: 'kim1234',
          password: 'kkk1234',
          username: '김두한'
      },
      {
          account: 'park9876',
          password: 'ppp9999',
          username: '박찬호'
      },
      {
          account: 'hong7766',
          password: 'hhh1234',
          username: '홍길동'
      },
  ]
};
// var checkID = {};

// for (var i=0; i < userList.account; i++) {
//   checkID.account = userList.account;
//   console.log(checkID);


// }

// console.log(checkID);

let user = {
};

user.name = 'John';
console.log(user);
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);