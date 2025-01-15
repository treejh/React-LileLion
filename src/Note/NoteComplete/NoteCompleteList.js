import NoteCompleteA from "./NoteCompleteA";



const NoteCompleteList =({noteList, changeState,deleteHandler}) =>{
return(
    <ul>
        {noteList.map((note)=>(
            <li key={note.id}>
                <NoteCompleteA note={note} 
                changeState={changeState}
                deleteHandler={deleteHandler}/>
            </li>
        )
    )
    }
    </ul>
);

};

export default NoteCompleteList;