const NoteComplete =({note})=>{
    return(
        <>
         {note.text}&nbsp;<br/><br/>
         {note.createdAt}&nbsp;<br/>
        </>
    )

}

export default NoteComplete;