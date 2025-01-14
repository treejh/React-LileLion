import { useRef, useState } from "react";

const UserRefExam=()=>{
    console.log("컴포넌트 랜더링 ")
    const [countState,setCount]=useState(0);
    const countRef = useRef(0);
    let countLet=0;

    const StateHandler=()=>{
        setCount(countState+1);
        console.log("useState:::::::::" + (countState+1));

    }
    const RefHandler=()=>{
        countRef.current++;
        console.log("UseRef::::::::::" + countRef.current);

    }
    const LetHandler=()=>{
        countLet++;
        console.log("UseLet:::::::::" + countLet);
    
    }

    return(
        <div>
            <p>useState :{countState}</p><br/>
            <p>useRef : {countRef.current}</p><br/>
            <p>Let : {countLet}</p><br/>

            <button onClick={StateHandler}>useStateUpdate</button>
            <button onClick={RefHandler}>useRefUpdate</button>
            <button onClick={LetHandler}>useLetUpdate</button>

        </div>
    )

}

export default UserRefExam;