import { useEffect, useState } from "react";

const UseEffectExam01 =()=>{

    console.log("UseEffectExam01 랜더링");

    const[count, setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect()실행!!");
    });//컴포넌트가 마운트, 업데이트, 마운트 해제될때 불러진다. 
    
    useEffect(()=>{
        console.log("useEffect() [count] 실행!!");
    },[count]); //랜더링 될때마다 매번 실행 

    useEffect(()=>{
        console.log("useEffect() [] 실행!!");
    },[]); //비어있는 디페전시 어레이는 최초 한번만 실행된다. 


    return <div>
        <span>count :: {count} </span>&nbsp;
        <button onClick={()=>{
            setCount(count+1);
        }}> update</button>
    </div>
}

export default UseEffectExam01;