import { useState } from "react";

const useStateExam1 =()=>{
    const [time, setTime] = useState(1);
    
    const setHandler=()=>{
        let newTime = time;
        
        if(time>=12){
            newTime=1;
        }else{
            newTime=newTime +1;
        }


        setTime(newTime);

        //time <12 ? setHandler(time+1) : setTime(1);    

    }
    return(
        <div>
    <span> 시간 : {time} </span>
    <button onClick={setHandler}>update</button>

        </div>
    );
};

export default useStateExam1;