
const NOT_FOUND = -1;

// 배열안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myindexOf(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }
  return -1;
}

// function myIncludes(array, searchElement) {
//   for ( var i = 0; i < array.length; i++) {
//     if (searchElement === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }
function myIncludes(array, searchElement) {
  return myIndexOf(array, searchElement) !== NOT_FOUND;
}




var foods = ['족발', '피자', '파스타', '김치찌개'];

var idx = myindexOf(foods, '김치찌개');
console.log(`index: ${idx}`);


var flag = myIncludes(foods, '족발');
console.log(q`flag: ${flag}`);
