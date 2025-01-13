import ChildrenExam from "./component/ChildrenExample";
import Counter from "./Counter";
import Hello from "./Hello";
import MyButton from "./MyButton";


function App() {
  console.log("app 컴포넌트 실행 ");
  return(
<div>
  <h1>react!!</h1>
  <Counter></Counter>
  <MyButton title="뭐야뭐야"/>
  <Hello color={"red"} name={"kang"} isSpecia={false}/>

  <ChildrenExam></ChildrenExam>
</div>

  );
}

export default App;
