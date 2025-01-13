import BoardList from "./Board/BoardList";
import ChildrenExam from "./component/ChildrenExample";
import Counter from "./Counter";
import Hello from "./Hello";
import MyButton from "./MyButton";
import RefMyInputBox from "./UseRef/RefMyInputBox";
import MyInputBox from "./UseState/MyInputBox";
import MyInputBoxUseState from "./UseState/MyInputBoxUseState";
import TitlePriceInputBox from "./UseState/TitlePriceInputBox";
import UseStateExam1 from "./UseState/UseStateExam1";
import UseStateExam2 from "./UseState/UseStateExam2";


function App() {
  console.log("app 컴포넌트 실행 ");
  return(
<div>
  <h1>react!!</h1>
  {/*<Counter></Counter>
  <MyButton title="뭐야뭐야"/>
  <Hello color={"red"} name={"kang"} isSpecia={false}/>

  <ChildrenExam></ChildrenExam>
  */}
  
  {/*
    /* UseState 실습*
  <MyInputBox></MyInputBox>
  <br></br><br></br>
  <MyInputBoxUseState></MyInputBoxUseState>

  <br></br><br></br>
  <UseStateExam1></UseStateExam1>
  <br></br><br></br><br></br><br></br>
  <UseStateExam2></UseStateExam2>

  <br></br><br></br>
<TitlePriceInputBox></TitlePriceInputBox>
  */}



  {/* UseRef 실습*/}
<br></br><br></br>
<RefMyInputBox></RefMyInputBox>
<br></br><br></br>
<BoardList></BoardList>


</div>

  );
}

export default App;
