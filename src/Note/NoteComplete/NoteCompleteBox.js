import { useState } from "react";
import NoteCompleteList from "./NoteCompleteList";
import NoteCompleteInput from "./NoteCompleteInput";

const NoteCompleteBox =()=>{

    const[noteList, setNoteList] = useState([
        {   id: Date.now(),
            text : "메모입니다.",
            createdAt: new Date().toLocaleString(),
            check : false }
    ]);

    const [filterType, setFilterType] = useState("All");

    const addNoteList=(text)=>{
        const newNote={
            id : Date.now(),
            text : text,
            createdAt: new Date().toLocaleString(),
            check : false
        }

        setNoteList([newNote, ...noteList]);
    }

    const filteredNotes=noteList.filter((note)=>{
        //true인것만 반환되기 때문에, false인것은 반환되지 않으므로, 완료된것만 반환 
        if(filterType==="Complete") return note.check;
        //!를 사용하여 false -> true로 하여, 미완료인것만 반환 
        if(filterType==="InComplete") return !note.check;
        return true;
    }
)

const changeState = (id) => {
    setNoteList(noteList.map((note) => {
        if (note.id === id) {
            return { ...note, check: !note.check }; 
        }
        return note; 
    }));
};

const deleteNote=(id) =>{
    setNoteList(
        noteList.filter((note)=>note.id!==id)
    );
}


    return(
        <div>
            <NoteCompleteInput addNote={addNoteList}/>
            <div>
            <br/>
            <button onClick={()=>setFilterType("All")}>전체 보기</button>
            <button onClick={()=>setFilterType("Complete")}>완료된 메모</button>
            <button onClick={()=>setFilterType("InComplete")}>미완료 메모</button>
            </div>
            <NoteCompleteList
            changeState={changeState}
             noteList={filteredNotes}
             deleteHandler = {deleteNote}/>
        </div>
    )

}

export default NoteCompleteBox;