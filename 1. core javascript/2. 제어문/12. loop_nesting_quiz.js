var one = +prompt('한변');
var two = +prompt('두번째 변');
var star = '';


for (var i = 0; i < one; i++)  {
  
  for (var j = 0; j < two; j++) {
  star += '*';
  
  }
  star += '\n';
}

alert(star);