import { $btn as $button } from "./getDom.js";  // 불러온 변수
import { clickHandler } from "./event.js";

const $btn = '123'; // 내가만든 변수
console.log(`내가만든 btn: ${$btn}`);
console.log(`불러온 btn:`, $button);

// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);