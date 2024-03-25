// array element //

let pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);
pets[3] = '징징이';


console.log(pets);

// push(): 배열 맨 끝에 데이터 추가
pets.push('징징이2');
pets.push('징징이3', '징징이4', '징징이5');

console.log(pets);

// pop(): 배열 맨 끝 데이터 삭제
let myPet1 = pets.pop();
pets.pop();
let myPet2 = pets.pop();
pets.pop();
console.log(pets);
console.log(myPet1);
console.log(myPet2);

// shift () : 배열의 맨 첫데이터 삭제
// unshift() : 배열의 맨 첫번째에 추가
pets.shift();

console.log(pets);
pets.unshift('뽈뽈이');

console.log(pets);