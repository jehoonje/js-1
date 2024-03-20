

var money = 3000;

var food = (money >= 8000) ? '돈까스'  : '라면';


var food;
if ( money >= 8000) {
  food = '돈까스';
} else {
  food = '라면';
}



console.log(`선택한 음식: ${food}`);


// 삼항연산자 ///

var food = (money >= 8000) ? '돈까스'  : (money >= 5000) ? '쫄면' : '라면';
// 복잡할때는 아래식으로 

var food;
if (money >= 8000) {
  food = '돈까스';
} else if (money >= 5000) {
  food = '쫄면';
} else if (money >= 3000) {
  food = '라면';
} else {
  food = '굶어';
}