const NoteInput=({addNote})=>{

    const keyUpHandler =(e)=>{
        console.log(e.key);
        if(e.key ==="Enter"){
            if(e.target.value===""){
                return;
            }
            console.log(e.target.value);
            addNote(e.target.value);
            e.target.value="";
        

        }
        
    };

    return(
        <div>
            <input type="text" placeholder="여기에 메모를 입력하세요" onKeyUp={keyUpHandler} 
            className="input-text"/>
        </div>
    )

}

export default NoteInput;
