
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




while (true) {
  var number = +prompt('난이도 설정하세요~! 1. 상 ( 3번 기회 ) 2. 중 ( 6번 기회 ) 3. 하 ( 10번 기회 )');
  if (number === 1) {
    var rn = Math.floor(Math.random() * 50 ) + 1;
    for (var i = 2; i < 4; i--) {
      var number2 = +prompt('1 ~ 50사이로 3번 안에 숫자를 맞춰보세요!');
      if (number2 === 33) {
        alert('정답입니다');
        break;
      } else if (number2 < 33) {
        alert('up!!');
        if ( i === 0 ) {
          alert('기회는 끝났습니다');
          break;
        }
        alert(`${i}번 기회가 남았습니다.`);
      } else if (number2 > 33) {
        alert('down!');
        if ( i === 0 ) {
          alert('기회는 끝났습니다');
          break;
        }
        alert(`${i}번 기회가 남았습니다.`);
      } 
    }
    break;
  } else if (number === 2) {
    var rn = Math.floor(Math.random() * 50 ) + 1;
    for (var i = 5; i < 7; i--) {
      var number2 = +prompt('1 ~ 50사이로 6번 안에 숫자를 맞춰보세요!');
      if (number2 === 33) {
        alert('정답입니다');
        break;
      } else if (number2 < 33) {
        alert('up!!');
        if ( i === 0 ) {
          alert('기회는 끝났습니다');
          break;
        }
        alert(`${i}번 기회가 남았습니다.`);
      } else if (number2 > 33) {
        alert('down!');
        if ( i === 0 ) {
          alert('기회는 끝났습니다');
          break;
        }
        alert(`${i}번 기회가 남았습니다.`);
      } 
    }
    break;
  } else if ( number === 3) {
    var rn = Math.floor(Math.random() * 50 ) + 1;
    for (var i = 9; i < 11; i--) {
      var number2 = +prompt('1 ~ 50사이로 10번 안에 숫자를 맞춰보세요!');
      if (number2 === rn) {
        alert('정답입니다');
        break;
      } else if (number2 < rn) {
        alert('up!!');
        if ( i === 0 ) {
          alert('기회는 끝났습니다');
          break;
        }
        alert(`${i}번 기회가 남았습니다.`);
      } else if (number2 > rn) {
        alert('down!');
        if ( i === 0 ) {
          alert('기회는 끝났습니다');
          break;
        }
        alert(`${i}번 기회가 남았습니다.`);
      } 
    }
    break;
  }
  alert('안 할거에요?')
  break;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// var rn = Math.floor(Math.random() * 50 ) + 1;
