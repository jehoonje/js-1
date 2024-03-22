
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// while (true) {
//   var number = +prompt('1부터 50사이 숫자 맞추기!');
//   if (number === 27) {
//     alert('정답');
//     break;
//   } else if (number < 27) {
//     alert('업!');
//   } else if (number > 27) {
//     alert('다운!');
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (var i = 4; i < 6; i--) {
//   var number = prompt('1 ~ 10사이로 5번 안에 숫자를 맞춰보세요!');
//   if (number === '') {
//     alert('숫자를 입력하세요!');
//     continue;
//   } else {

//   }
//   if ( i === 0 ) {
//     alert('기회는 끝났습니다');
//     break;
//   }
//   if (number === 8) {
//     alert('정답');
//     break;
//   } else if (number < 8) {
//     alert('up!!');
//     alert(`${i}번 기회가 남았습니다.`);
//   } else if (number > 8) {
//     alert('down!');
//     alert(`${i}번 기회가 남았습니다.`);
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////




// while (true) {
//   var number = +prompt('난이도 설정하세요~! 1. 상 ( 3번 기회 ) 2. 중 ( 6번 기회 ) 3. 하 ( 10번 기회 )');
//   if (number === 1) {
//     var rn = Math.floor(Math.random() * 100 ) + 1;
//     for (var i = 2; i < 4; i--) {
//       var number2 = prompt('1 ~ 100사이로 3번 안에 숫자를 맞춰보세요!');
//       if (number2 === '') {
//         alert('숫자를입력하세요');
//         break;
//       } else {}
//       if (number2 === rn) {
//         alert('정답입니다');
//         break;
//       } else if (number2 < rn) {
//         alert('up!!');
//         if ( i === 0 ) {
//           alert(`정답은 ${rn}, 기회는 끝났습니다`);
//           break;
//         }
//         alert(`${i}번 기회가 남았습니다.`);
//       } else if (number2 > rn) {
//         alert('down!');
//         if ( i === 0 ) {
//           alert(`정답은 ${rn}, 기회는 끝났습니다`);
//           break;
//         }
//         alert(`${i}번 기회가 남았습니다.`);
//       } 
//     }
//     break;
//   } else if (number === 2) {
//     var rn = Math.floor(Math.random() * 100 ) + 1;
//     for (var i = 5; i < 7; i--) {
//       var number2 = +prompt('1 ~ 100사이로 6번 안에 숫자를 맞춰보세요!');
//       if (number2 === rn) {
//         alert('정답입니다');
//         break;
//       } else if (number2 < rn) {
//         alert('up!!');
//         if ( i === 0 ) {
//           alert(`정답은 ${rn}, 기회는 끝났습니다`);
//           break;
//         }
//         alert(`${i}번 기회가 남았습니다.`);
//       } else if (number2 > rn) {
//         alert('down!');
//         if ( i === 0 ) {
//           alert(`정답은 ${rn}, 기회는 끝났습니다`);
//           break;
//         }
//         alert(`${i}번 기회가 남았습니다.`);
//       } 
//     }
//     break;
//   } else if ( number === 3) {
//     var rn = Math.floor(Math.random() * 100 ) + 1;
//     for (var i = 9; i < 11; i--) {
//       var number2 = +prompt('1 ~ 100사이로 10번 안에 숫자를 맞춰보세요!');
//       if (number2 === rn) {
//         alert('정답입니다');
//         break;
//       } else if (number2 < rn) {
//         alert('up!!');
//         if ( i === 0 ) {
//           alert(`정답은 ${rn}, 기회는 끝났습니다`);
//           break;
//         }
//         alert(`${i}번 기회가 남았습니다.`);
//       } else if (number2 > rn) {
//         alert('down!');
//         if ( i === 0 ) {
//           alert(`정답은 ${rn}, 기회는 끝났습니다`);
//           break;
//         }
//         alert(`${i}번 기회가 남았습니다.`);
//       } 
//     }
//     break;
//   }
//   alert('안 할거에요?')
//   break;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// var rn = Math.floor(Math.random() * 50 ) + 1;



//////////////////////////////////////////////////////////////////////////////////////////////////////////

//강사//
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 난이도 상수
// const HIGH = 1,
//   MIDDLE = 2,
//   LOW = 3;

// var initCount; // 사용자의 총 입력 기회

// while (true) {
//   while (true) {
//     // 난이도 선택
//     var level = +prompt(
//       '난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]'
//     );

//     if (level === HIGH) {
//       initCount = 3;
//     } else if (level === MIDDLE) {
//       initCount = 6;
//     } else if (level === LOW) {
//       initCount = 10;
//     } else {
//       alert('난이도를 숫자로 다시 입력해주세요');
//       continue;
//     }

//     break;
//   }

//   // 정답 생성
//   var secret = Math.floor(Math.random() * 100) + 1;

//   var countDown = initCount; // 입력기회 횟수

//   var min = 1,
//     max = 100;

//   while (true) {
//     // 사용자의 입력값
//     var answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

//     // 입력값이 범위안의 값인지 체크
//     if (answer < min || answer > max) {
//       alert('범위 안의 값을 입력하시오?!');
//       continue;
//     }
    
//     countDown--;


//     // 정답 판정
//     if (secret === answer) {
//       alert(`정답입니다!`);
//       break;
//     } else if (secret > answer) {
//       alert(`UP!!`);
//       min = answer + 1;
//     } else {
//       alert(`DOWN!!`);
//       max = answer - 1;
//     }

//     // 카운트다운 게임 종료 조건
//     if (countDown <= 0) {
//       alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이지렁 ㅎㅎㅎ`);
//       break;
//     } else {

//       alert(`${countDown}번의 기회가 남았습니다.`);
//     }
//   }

//   // 게임 재시작 여부 확인
//   var exitFlag = confirm('한판 더 하쉴?');
//   if (!exitFlag) {
//     alert('잘가 게임 고만해 이제~');
//     break;
//   }
// }

// // 사용자들은 입력 기회가 5번으로 제한된다.
// // 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// // 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// // 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.

//////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/
const DIFFICULT = 1,
  MIDDLE = 2,
  EASY = 3;

var levelMessage = `~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~
[ 1. 상  || 2. 중  || 3. 하 ]`;

var level = +prompt(levelMessage);

var maxNumber;

switch (level) {
  case DIFFICULT:
    maxNumber = 100;
    break;
  case MIDDLE:
    maxNumber = 50;
    break;
  case EASY:
    maxNumber = 20;
    break;
  default:
    maxNumber = 99999;
}

var qNum = 1; // 문제 번호

var correctCount = 0,
  wrongCount = 0;

while (true) {
  var firstNumber = Math.floor(Math.random() * maxNumber) + 1;
  var secondNumber = Math.floor(Math.random() * maxNumber) + 1;

  // 앞의 숫자가 더 크게 설정
  if (firstNumber < secondNumber) {
    var temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  } else if (firstNumber === secondNumber) {
    continue;
  }

  // 0, 1, 2 중에 하나가 생성되는 난수
  var markNum = Math.floor(Math.random() * 3);

  var mark = '+'; // 연산 기호를 문자열로 저장

  // 실제 정답
  var realAnswer;

  switch (markNum) {
    case 0:
      mark = '+';
      realAnswer = firstNumber + secondNumber;
      break;
    case 1:
      mark = '-';
      realAnswer = firstNumber - secondNumber;
      break;
    case 2:
      mark = 'x';
      realAnswer = firstNumber * secondNumber;
      break;
  }

  // 사용자의 입력답
  var userAnswer = +prompt(
    `Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`
  );

  if (userAnswer === 0) {
    alert('게임을 종료합니다.');
    break;
  }

  // 정답 검증
  if (userAnswer === realAnswer) {
    alert('정답입니다!!');
    correctCount++;
  } else {
    alert('틀렸습니다!!');
    wrongCount++;
  }
} // end each game loop

alert(`# 정답횟수: ${correctCount}회, 틀린횟수: ${wrongCount}회`);
