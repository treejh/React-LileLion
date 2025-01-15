import { useState } from "react";

const Note=({note, updateHandler, deleteHandler})=>{

    const [updateMode, setUpdateMode] = useState(false);
    const [text, setText] = useState(note.text);

    const updateModeHandler=()=>{
        setUpdateMode(true);
    }

    const changeHandler=(e)=>{
        setText(e.target.value);
    }

    const updator=()=>{
        updateHandler({
            id: note.id,
            text:text,
            createdAt: new Date().toLocaleString(),
        });
        setUpdateMode(false);
    }

    if(updateMode){
            return(

                <>
                <input type="text" placeholder="수정할 값을 입력하세요" value={text} onChange={changeHandler}/>
                <button onClick={updator}>수정</button>
                </>
            );
        }
    else{
            return(
            <>
            {note.text}&nbsp;<br/><br/>
            {note.createdAt}&nbsp;<br/>
            <button onClick={updateModeHandler}>수정 </button>&nbsp;
            <button onClick={() => deleteHandler(note.id)}>삭제</button>
            <br/>
            <br/>
            </>
            );
        }
       

};

export default Note;