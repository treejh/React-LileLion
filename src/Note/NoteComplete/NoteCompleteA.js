const NoteCompleteA =({note, changeState, deleteHandler})=>{
    return(
        <>
         {note.text}&nbsp;<br/><br/>
         {note.createdAt}&nbsp;<br/>
         <br/>
         <br/>
        <button onClick={()=>changeState(note.id) 
        }> {note.check ? "취소" : "완료" } </button>
        <button onClick={()=>deleteHandler(note.id)}>삭제</button>
        </>
    )

}

export default NoteCompleteA;