import { useState } from "react";
import NoteCompleteList from "./NoteCompleteList";
import NoteCompleteInput from "./NoteCompleteInput";

const NoteCompleteBox =()=>{

    const[noteList, setNoteList] = useState([
        {   id: 1,
            text : "메모입니다.",
            createdAt: new Date().toLocaleString(), }
    ]);

    const addNoteList=(text)=>{
        const newNote={
            id : Date.now(),
            text : text,
            createdAt: new Date().toLocaleString(),
        }

        setNoteList([newNote, ...noteList]);
    }

    return(
        <div>
            <NoteCompleteInput addNote={addNoteList}/>
            <NoteCompleteList noteList={noteList}/>
        </div>
    )

}

export default NoteCompleteBox;