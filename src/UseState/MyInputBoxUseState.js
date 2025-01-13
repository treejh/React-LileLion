import { useState } from "react";

const MyInputBoxUseState=()=>{
    //text에 들어갈 값

    const [text, setText] = useState("기본값");
    const resetHandler =()=>alert("reset 버튼을 클릭하셨습니다.");
    const changeHandler=(e)=>{
        //인풋 상자에서 값을 얻어와서 이 값으로 state를 바꾼다.
        //setText(e.target.value);

        
    }
    
    return(
    <div>
        <label>{text}</label><br></br>
        <input type="text" value={text} onChange={changeHandler}/>

        <button onClick={resetHandler}>RESET</button>
    </div>
    );

};

export default MyInputBoxUseState;