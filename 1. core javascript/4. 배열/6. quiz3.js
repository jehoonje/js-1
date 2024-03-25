/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/


// 멤버 이름
// var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

// 삭제할 멤버 이름 입력받기
// var memberName = prompt('삭제할 멤버의 이름을 쓰세요');
// var index = tvxq.indexOf(memberName);


// 멤버 삭제하기
// var removeMember = tvxq.includes(memberName);
// if (removeMember === true) {
//   tvxq.splice(index, 1);
// } else {
//   alert(`${memberName}은 잘못된 이름입니다`);
// }


// while(true) {
//   if (tvxq.length === 0) {
//     alert('모두 삭제 되었습니다');
//     break;
//     } else {
//     var memberName = prompt('삭제할 멤버의 이름을 쓰세요');
//     var index = tvxq.indexOf(memberName);
//     var removeMember = tvxq.includes(memberName);
//       if (removeMember === true) {
//         tvxq.splice(index, 1);
//         alert(tvxq);
//         continue;
//         } else if (memberName !== tvxq) {
//           alert(`${memberName}은 잘못된 이름입니다`);
//           continue;
//         }
//       }
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 
// 문제 2 /*
// - Quiz. 
// 아래 요구사항에 맞는 코드를 작성하고 
// 브라우저에서 실행하여 테스트하세요.
// - 요구사항
// 1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
// 2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
//   해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
// 3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
//    다시 수정할 이름을 입력할 수 있도록 하세요.
// 4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
// */


// 멤버 이름
// var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

// 사용자 입력값
// var userInput = prompt('수정할 멤버 이름을 적으세요.');
// var userNewName = prompt('수정하실 이름을 적으세요');

// 수정할 멤버
// var oldMember = tvxq.indexOf(userInput);

// 수정 코드
// tvxq.splice(oldMember, 1, userInput);


// while(true) {
//   var userInput = prompt('수정할 멤버 이름을 적으세요.');
//   var removeMember = tvxq.includes(userInput);
//   if (removeMember) {
//     var userNewName = prompt('수정하실 이름을 적으세요');
//     var index = tvxq.indexOf(userInput);
//     var changeName = tvxq.splice(index, 1, userNewName);
//     alert(`변경되었습니다. ${tvxq}`);
//     break;
//   } else {
//     alert('올바른 이름을 적어주세요');
//   }

// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////// 문제 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 메뉴를 선택하세요
// 1. 새로운 이름추가
// 2. 기존이름 삭제
// 3. 프로그램 종료
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 멤버 이름
var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];


while(true) {
  //// 메뉴 선택 /////
  var ask = +prompt(`현재 멤버 : ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']\n메뉴를 선택하세요.\n1. 새로운 이름추가 \n2. 기존이름 삭제 \n3. 프로그램종료`);


      //// 1. 새로운 이름추가
      if (ask === 1) {
        var addName = prompt('추가할 이름을 적으세요.');
          tvxq.push(addName);
          alert(`추가 되었습니다.`);
          alert(`${tvxq}`)
          continue;



      //// 2. 멤버 이름 삭제 하기
        } else if (ask === 2) {
          while(true) {

            //// 모두 삭제시 나가기
            if (tvxq.length === 0) {
              alert('모두 삭제 되었습니다');
              break;


              } else {
              //// 삭제할 멤버 얻기
              var memberName = prompt('삭제할 멤버의 이름을 쓰세요');
              //// 멤버가 있는지 확인
              var index = tvxq.indexOf(memberName);
              var removeMember = tvxq.includes(memberName);

              //// 값은 이미 true 상태
                if (removeMember) {
                  tvxq.splice(index, 1);   // 삭제하기
                  alert(tvxq);
                

              //// 다른입력값을 넣으면 돌아가기
              } else if (memberName !== tvxq) {
                alert(`${memberName}은 잘못된 이름입니다`);
                break;
              }
            }
          } 


          ///// 3. 프로그램 종료하기 
        } else if (ask ===3) {
          alert('프로그램이 종료됩니다.')
          break;
        }
}