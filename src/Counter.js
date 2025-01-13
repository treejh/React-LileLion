import { useState } from "react";
import MyButton from "./MyButton";
import Hello from "./Hello";

const Counter =()=>{
     console.log("count 컴포넌트 실행 ");
    //let count =0;
   const [count, setCount] = useState (0);

    const plusHanlder = ()=>{
        console.log(count);
        //count++;
        setCount(count+1);
        
    }
    const minusHandler =()=>{
        console.log(count);
        //count --;
        setCount(count-1);
    }

    return(
    <div>
    <h2 style={{marginLeft:"30px"}}>{count}</h2>
    {/*<input type="button" value="+" style={{marginRight:"10px", marginLeft:"10px"}}
    onClick={plusHanlder}/>
    <input type="button" value="-" onClick={minusHandler}/>*/}
    <MyButton title="+" clickHandler={plusHanlder} />
    <MyButton title="-" clickHandler={minusHandler}/>
    <MyButton title="안녕" clickHandler={()=> alert("안녕")}/>
    <Hello />
    
    </div>
    );
};

export default Counter;