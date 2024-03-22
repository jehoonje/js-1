
alert('즐겁게 푸시다가 그만하고 싶으시면 0을 누르세요');

while(true) {
  
  var num1 = Math.floor(Math.random() * 20) + 1;
  var num2 = Math.floor(Math.random() * 20) + 1;
  var answer = `${num1 + num2}`;
  var question = +prompt(`${num1} + ${num2} = `);


  if (question === answer) {
    alert('정답!');
  } else {
    alert('틀렸습니다~');
  }
}
