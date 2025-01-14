import { useState } from "react";

const Todo=({todo,deleteHandler,updateHandler })=>{
   
    /* 이렇게 사용하면 가독성 안좋음 
    const deleteHandler=()=>{
        deleteHandler(todo,id)
    }*/
   const [updateMode,setUpdateMode] = useState(false);
   const [title, setTitle] = useState(todo.title);

   const updateModelHandler=()=>{
        setUpdateMode(true);
   };

   const changeHandler=(e)=>{
    setTitle(e.target.value);
   };

   const updater=()=>{
    updateHandler( {id:todo.id, title :title} );
    setUpdateMode(false);
   }

   if(updateMode){
    return(
    <>
    <input type="text" value ={title} onChange={changeHandler}/>
    <button onClick={updater}>수정</button>
    </>
    );
   }else{

    return(
        <>
        {todo.title}&nbsp;
        <button onClick={() => deleteHandler(todo.id)}>삭제</button>&nbsp;
        <button onClick={updateModelHandler}>수정</button>
        </>
    );
}
}

export default Todo;