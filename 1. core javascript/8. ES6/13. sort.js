
// 배열 데이터 정렬하기
const nums = [6, 11, 3, 7, 9, 10, 2, 4, 1]
console.log(nums);

nums.sort((a, b) => a - b);  // 오름차
console.log(nums);


nums.sort((a, b) => b - a); // 내림차
console.log(nums);

//nums.reverse(); // 내림차
//console.log(nums);

