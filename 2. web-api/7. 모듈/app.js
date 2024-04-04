
import { $btn as $button } from "./getDom.js";    // 불러온 변수
// as 로 겹치는 이름 변경해주기
import { clickHandler } from "./event.js";


const $btn ='123'; //내가 만든 변수
// const $pText = 'zzz';

// event.js에서 만든 이벤트 핸들러 등록
$btn.addEventListener('click', clickHandler);
