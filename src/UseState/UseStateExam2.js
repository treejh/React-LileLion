import { useState } from "react";

const UseStateExam2 =()=>{
    
    const [input, setInput] = useState("");
    
    //입력받은 값 리스트 
    const [names,setNames] = useState(["carami","jihyun","jang"]);


    const inputChangeHandler =(e)=>{
        setInput(e.target.value);
    }

    const uploadHanlder=()=>{
        {/*새 배열을 만들어서 넘겨야 한다.*/}
        setNames([input, ...names]);
    }

    return(

        <div>
            <input type="text" value={input} onChange={inputChangeHandler}/>
            <button onClick={uploadHanlder}>입력</button>

            {/*입력받은 값들을 리스트로 출력*/}
            {names.map(name=>{
                return <p> &ensp;{name} <br/> </p>

            }
            
            )}
        </div>
        
    );
}

export default UseStateExam2;