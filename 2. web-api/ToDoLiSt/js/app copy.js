
//========= 전역 변수 영역 ========//

// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: '할 일 1',
    done: false
  },
  {
    id: 2,
    text: '할 일 2',
    done: false
  },
  {
    id: 3,
    text: '할 일 3',
    done: false
  },
];


//========= 함수 정의 영역 ========//

// 새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수
function renderNewTodoElement({ id, text }) {
  // 2. li태그 생성하기
  const $newTodoLi = document.createElement('li');
  // 2-1. 생성한 태그에 텍스트 추가하기
  // 2-2. 클래스, data-id 추가하기
  $newTodoLi.classList.add('todo-list-item');
  $newTodoLi.dataset.id = id;
  // 2-3. li의 자식들 추가하기
  $newTodoLi.innerHTML = `
            <label class="checkbox">
              <input type="checkbox">
              <span class="text">${text}</span>
            </label>
            <div class="modify">
              <span class="lnr lnr-undo"></span>
            </div>
            <div class="remove">
              <span class="lnr lnr-cross-circle"></span>
            </div>
  `;
  
  // 3. 생성한 태그 ul에 추가하기
  const $todoListUl = document.querySelector('.todo-list');
  $todoListUl.appendChild($newTodoLi);

}

// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById('todo-text');
  const inputText = $todoText.value;

  // 새 할 일의 아이디 값을 생성하는 함수
  const makeNewId = () => todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기

  // todos 배열에 새로운 할일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false
  };

  // 2. 배열에 추가하기
  todos.push(newTodo);

  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);

}

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
  const index = todos.findIndex(todo => todo.id === dataId);
  todos.splice(index, 1);
  console.log(todos);
}


//========= 함수 실행 영역 - 함수 호출, 이벤트 리스너 등록 ========//

// 추가 버튼 클릭 이벤트
document.getElementById('add').addEventListener('click', e => {
  e.preventDefault(); // form의 submit중단
  insertTodoData();
});

// 삭제 버튼 클릭 이벤트
document.querySelector('.todo-list').addEventListener('click', e => {

  if (!e.target.matches('.remove span')) return;

  // 삭제 처리 진행
  // 클릭한 버튼이 포함된 li를 탐색
  const $targetLi = e.target.closest('.todo-list-item');

  // 화면에서 제거
  // document.querySelector('.todo-list').removeChild($targetLi);
  $targetLi.remove();

  // 배열에서 데이터 제거
  removeTodoData(+$targetLi.dataset.id);
});

