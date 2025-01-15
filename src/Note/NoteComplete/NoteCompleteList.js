import NoteComplete from "./NoteComplete";


const NoteCompleteList =({noteList}) =>{
return(
    <ul>
        {noteList.map((note)=>(
            <li key={note.id}>
                <NoteComplete note={note}></NoteComplete>
            </li>
        )
    )
    }

    </ul>
);

};

export default NoteCompleteList;