import Note from "./Note";

const NoteList=({noteList , updateHandler, deleteHandler})=>{
    return(
        <ul>
            {noteList.map((note)=>(
                <li key={note.id}>
                   <Note note={note} 
                   updateHandler={updateHandler}
                   deleteHandler={deleteHandler}></Note>
                </li>
            ))
            }

        </ul>
    );
};

export default NoteList;