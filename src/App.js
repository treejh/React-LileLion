import BoardList from "./Board/BoardList";
import ChildrenExam from "./component/ChildrenExample";
import Counter from "./Counter";
import Hello from "./Hello";
import MyButton from "./MyButton";
import NoteBox from "./Note/NoteBox";
import NoteCompleteBox from "./Note/NoteComplete/NoteCompleteBox";
import TodoBox from "./Todo/TodoBox";
import UseEffectCleanUp from "./UseEffectExam/UseEffectCleanUp";
import UseEffectExam01 from "./UseEffectExam/UseEffectExam01";

import RefMyInputBox from "./UseRef/RefMyInputBox";
import UserRefExam from "./UseRef/UseRefExam";
import MyInputBox from "./UseState/MyInputBox";
import MyInputBoxUseState from "./UseState/MyInputBoxUseState";
import TitlePriceInputBox from "./UseState/TitlePriceInputBox";
import UseStateExam1 from "./UseState/UseStateExam1";
import UseStateExam2 from "./UseState/UseStateExam2";


function App() {
  return (
    /*<div className="card">
      <TodoBox />
      <UseEffectExam01/>
      <UseEffectCleanUp/>
    </div>*/

    <div className="card-container">
    <div className="card">
      <h2 >jihyun Note(기본)</h2>
      <NoteBox/>
    </div>
    <div className="card">
      <h2 >jihyun Note(완료, 미완료)</h2>
      <NoteCompleteBox/>
    </div>
    <div className="card">
      <h2 >jihyun Note(둘 다)</h2>
      <NoteBox/>
    </div>
    </div>


  );
}

export default App;
