
// for (var i = 1; i <= 50; i++) {
//   console.log(i);
//   if (i > 10) {
//     break;
//   }
// }


console.log('===================');

for (var i = 0; i < 3; i++) {

  for (var j = 0; j <2; j ++) {
    if ( 1 === j) {
      break;     // 바로 위 for문만 브레이크 시킨다.
    }
    console.log(`${i}, ${j}`);
  }
}