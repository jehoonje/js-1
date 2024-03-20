
var yourName = prompt('이름');
var yourAge = prompt('나이');
var year = 2024 - yourAge + 1;

alert (`${yourName}님은 ${year} 년생 이시군요!!`);

var yourName = prompt('이름');
var yourAge = +prompt('나이');
var year = 2024 + yourAge + 1;

alert (`${yourName}님은 ${year} 년생 이시군요!!`);

// + 일때는 앞에 + 붙여줘야 string -> number 로 바뀜 //
