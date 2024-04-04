const $form = document.querySelector(".todo-insert");
const $btn = document.getElementById("add");
const $text = document.getElementById("todo-text");

$form.addEventListener("submit", (e) => {
  e.preventDefault(); // 폼 제출 이벤트 방지

  const inputValue = $text.value.trim(); // 입력값 얻기 및 양쪽 공백 제거

  if (inputValue) { // 입력값이 비어 있지 않으면
    renderNewTodo({
      id: Date.now(), // 임시 ID 생성
      text: inputValue
    });
    $text.value = ""; // 입력 필드 비우기
  } else {
    alert("할 일을 입력하세요!"); // 입력값이 비어 있을 때 알림
  }
});

$text.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // 폼 제출 이벤트 방지
    $form.dispatchEvent(new Event("submit")); // 폼 전송 이벤트 발생
  }
});


$text.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // 폼 제출 이벤트 방지
    $btn.click(); // 버튼 클릭 이벤트 발생
  }
});


function renderNewTodo({ id, text }) {
  const $toDoList = document.querySelector(".todo-list");
  const $newLi = document.createElement("li");
  $newLi.classList.add("todo-list-item");
  $newLi.dataset.id = id;
  $newLi.innerHTML = `
    <label class="checkbox">
      <input type="checkbox">
      <span class="text">${text}</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
  `;
  $toDoList.appendChild($newLi);
}

// 삭제 버튼 클릭 이벤트 처리
document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('lnr-cross-circle')) {
      // 클릭한 삭제 버튼의 부모 요소인 할 일 항목을 찾아서 삭제
      const todoItem = target.closest('.todo-list-item');
      const todoId = todoItem.dataset.id;
      deleteTodoItem(todoId); // 해당 항목 삭제
      todoItem.remove(); // UI에서 삭제된 항목 제거
  }
});


