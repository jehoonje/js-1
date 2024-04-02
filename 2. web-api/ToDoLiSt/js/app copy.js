const $btn = document.getElementById("add");
const $text = document.getElementById("todo-text");


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


$text.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // 폼 제출 이벤트 방지
    $btn.click(); // 버튼 클릭 이벤트 발생
  }
});