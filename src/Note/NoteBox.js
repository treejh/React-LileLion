import { useState } from "react"
import NoteInput from "./NoteInput"
import NoteList from "./NoteList";

const NoteBox=()=>{

    const [noteList, setNoteList] = useState([
        {   id: 1,
            text : "메모입니다.",
            createdAt: new Date().toLocaleString(), }
    ])

    const addNotelist=(text)=>{
        const newList={
            id : Date.now(),
            text:text,
            createdAt: new Date().toLocaleString()
    };
    setNoteList([newList,...noteList]);

};

    const updateNoteList=(newNote)=>{
        noteList.map((note)=>{
            if(newNote.id === note.id){
                note.text = newNote.text;
                note.createdAt = newNote.createdAt;
            }
        })
        
    }

    const deleteNoteList=(id)=>{
       setNoteList(noteList.filter((note)=>note.id !== id));
    }


    return(
        <div>
            <NoteInput addNote={addNotelist}/>
            <NoteList noteList={noteList} 
            updateHandler={updateNoteList}
            deleteHandler={deleteNoteList}/>
        </div>
    );
};

export default NoteBox;