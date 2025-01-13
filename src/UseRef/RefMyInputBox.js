import { useRef, useState } from "react";

const RefMyInputBox=()=>{
    //text에 들어갈 값

    //text에 들어갈 값

    const [text, setText] = useState("기본값");

    const textInput = useRef();
    const labelRef=useRef();
    const resetHandler =()=>{
        //alert("reset 버튼을 클릭하셨습니다.");
        setText("");
        textInput.current.focus();
        //ßlabelRef.current.innerHtml="hi";

    }
    const changeHandler=(e)=>{
        //인풋 상자에서 값을 얻어와서 이 값으로 state를 바꾼다.
        setText(e.target.value);

        
    }
    
    return(
    <div>
        <label ref={labelRef}>{text}</label><br></br>
        <input type="text" value={text} onChange={changeHandler} ref={textInput}/>

        <button onClick={resetHandler}>RESET</button>
    </div>
    );

};

export default RefMyInputBox;